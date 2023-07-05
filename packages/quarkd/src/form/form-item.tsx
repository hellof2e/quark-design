import {
  property,
  customElement,
  createRef,
  QuarkElement,
  state,
} from "quarkc";
import AsyncValidator, { RuleItem } from "async-validator";
import "../cell";

import style from "./form-item.css";
import { formTagNamesMap, getPropByPath, noop } from "./utils";
import { debounce } from "../../utils/index";

export interface Rule {
  name: string; // 需要校验的 field 组件的 name 属性
  required?: boolean; // 是否必填
  message?: string; // 错误信息
  validator?: (value: string | number) => boolean; // 校验规则
}

interface IFormProps {
  hideRequiredAsterisk: boolean;
  hideMessage: boolean;
  labelWidth: string;
  labelSuffix: string;
  labelPosition: "left" | "right";
}

@customElement({
  tag: "quark-form-item",
  style,
})
class QuarkFormItem extends QuarkElement {
  @property({ type: Boolean })
  hidemessage = false;

  @property({ type: String })
  label = "";

  @property({ type: String })
  labelWidth = "";

  @property({ type: Boolean })
  islink = false;

  @property({ type: String })
  prop: string;

  @property({ type: Boolean })
  hiderequiredasterisk: false; // 是否隐藏必填 *

  formRef: any = createRef();

  @state()
  validateState = "";

  @state()
  validateMessage = "";

  @state()
  validateDisabled = false;

  @state()
  itemNode = null;

  @state()
  rules: RuleItem | null = null;

  @state()
  formProps: IFormProps = {
    hideRequiredAsterisk: false,
    hideMessage: false,
    labelWidth: "",
    labelSuffix: "",
    labelPosition: "left",
  };

  @state()
  formModel = null;

  defaultSlotRef: any = createRef();

  initialValue = null;

  setFormProps(props: IFormProps) {
    this.formProps = props;
  }

  setFormModel(model) {
    if (!model || !this.prop) return;
    this.formModel = model;
    this.initialValue = getPropByPath(model, this.prop, true).v;
  }

  setRule(rule) {
    this.rules = { [this.prop]: rule };
  }

  getRules() {
    if (!this.rules) return null;
    let formRules = this.rules;
    const prop = getPropByPath(formRules, this.prop || "", true);
    formRules = formRules ? prop.o[this.prop || ""] || prop.v : [];
    return [].concat(formRules || []);
  }

  validate(callback = noop) {
    this.validateDisabled = false;
    if (!this.prop) return;

    const rules = this.getRules();

    if (!rules || rules.length === 0) {
      callback();
      return true;
    }

    this.validateState = "validating";

    const validator = new AsyncValidator({ [this.prop]: rules });
    validator.validate(
      { [this.prop]: this.getValue() },
      { firstFields: true },
      (errors, invalidFields) => {
        this.validateState = !errors ? "success" : "error";
        this.validateMessage = errors ? errors[0].message : "";
        callback(this.validateMessage, invalidFields);
      }
    );
  }

  clearValidate() {
    this.validateState = "";
    this.validateMessage = "";
    this.validateDisabled = false;
  }

  resetField() {
    this.validateState = "";
    this.validateMessage = "";

    const prop = getPropByPath(this.formModel, this.prop, true);
    this.validateDisabled = true;
    if (Array.isArray(this.initialValue)) {
      prop.o[prop.k] = [].concat(this.initialValue);

      // uploader 恢复默认值
      if (this.itemNode.tagName === formTagNamesMap["QUARK-UPLOADER"]) {
        const value = this.initialValue.map((item) => item.url || item.content);
        this.itemNode.setPreview(value);
      }
    } else {
      prop.o[prop.k] = this.initialValue;
    }

    setTimeout(() => {
      this.validateDisabled = false;
    }, 0);
  }

  getValue = () => {
    if (!this.prop) return;
    let value = null;
    if (this.itemNode) {
      const tagName = this.itemNode.tagName;
      if (
        tagName === formTagNamesMap["QUARK-RADIO"] ||
        tagName === formTagNamesMap["QUARK-CHECKBOX"] ||
        tagName === formTagNamesMap["QUARK-SWITCH"]
      ) {
        value = this.itemNode.checked;
      } else if (tagName === formTagNamesMap["QUARK-UPLOADER"]) {
        value = this.itemNode.values;
      } else {
        value = this.itemNode.value;
      }
    }
    if (this.formModel) {
      this.formModel[this.prop] = value;

      const prop = getPropByPath(this.formModel, this.prop, true);

      if (Array.isArray(value)) {
        prop.o[prop.k] = [].concat(value);
      } else {
        prop.o[prop.k] = value;
      }
    }
    return value;
  };

  defaultSlotChange = () => {
    if (!this.defaultSlotRef.current) return;
    const slotNodes = this.defaultSlotRef.current.assignedNodes();
    if (slotNodes.length > 0) {
      const formNode = slotNodes.find((node) => {
        return !!formTagNamesMap[node.tagName];
      });

      // 监听表单字段change blur
      if (formNode) {
        this.itemNode = formNode;
        this.itemNode.addEventListener("change", () => {
          this.onFieldChange();
        });
        if (
          this.itemNode.tagName === formTagNamesMap["QUARK-FIELD"] ||
          this.itemNode.tagName === formTagNamesMap["QUARK-TEXTAREA"]
        ) {
          if (this.itemNode.disabled || this.itemNode.readonly) return;
          this.itemNode.addEventListener("blur", () => {
            this.onFieldBlur();
          });
        }
      }
    }
  };

  onFieldChange = debounce(() => {
    if (this.validateDisabled) return;
    this.validate();
  }, 200);

  onFieldBlur() {
    this.validate();
  }

  isRequired() {
    const rules = this.getRules();
    return (
      this.prop &&
      rules &&
      Array.isArray(rules) &&
      rules.some((rule) => rule.required)
    );
  }

  itemClass() {
    const classNames = ["quark-form-item"];
    this.validateState === "success" ? classNames.push("is-success") : null;
    this.validateState === "validating"
      ? classNames.push("is-validating")
      : null;

    if (this.formProps.hideRequiredAsterisk) {
      classNames.push("is-no-asterisk");
    }
    if (this.isRequired()) {
      classNames.push("is-required");
    }
    return classNames.join(" ");
  }

  errorMessageRender() {
    return (
      !this.formProps.hideMessage &&
      !this.hidemessage &&
      this.validateState === "error" &&
      this.validateMessage && (
        <div class="quark-form-item_error-msg">{this.validateMessage}</div>
      )
    );
  }
  labelStyle() {
    const ret: any = {};
    if (this.formProps.labelWidth) {
      ret.width = this.labelWidth || this.formProps.labelWidth;
      ret.textAlign = this.formProps.labelPosition;
    }
    return ret;
  }

  componentWillUnmount() {
    // 移除监听表单字段change blur
    if (this.itemNode) {
      this.itemNode.removeEventListener("change", () => {
        this.onFieldChange();
      });
      if (
        this.itemNode.tagName === formTagNamesMap["QUARK-FIELD"] ||
        this.itemNode.tagName === formTagNamesMap["QUARK-TEXTAREA"]
      ) {
        if (this.itemNode.disabled || this.itemNode.readonly) return;
        this.itemNode.removeEventListener("blur", () => {
          this.onFieldBlur();
        });
      }
    }
  }

  render() {
    return (
      <div class={this.itemClass()}>
        <div class="quark-form-item__wrapper">
          <div class="quark-form-item__label" style={this.labelStyle()}>
            <slot name="label">
              <span>{this.label}</span>
              <span>{this.formProps.labelSuffix}</span>
            </slot>
          </div>
          <div class="quark-form-item__main">
            <div class="quark-form-item__main-content">
              <slot
                ref={this.defaultSlotRef}
                onslotchange={this.defaultSlotChange}
              ></slot>
            </div>
            {this.errorMessageRender()}
          </div>
          <div class="quark-form-item__suffix">
            <slot name="suffix"></slot>
          </div>
          {this.islink && (
            <div class="quark-form-item__is-link">
              <quark-icon-arrow-right />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default QuarkFormItem;
