import {
  property,
  customElement,
  createRef,
  QuarkElement,
  state,
} from "quarkc";
import AsyncValidator from "async-validator";
import "../cell";

import style from "./form-item.css";
import { IRuleItem } from "./type";
import { formTagNamesMap, noop } from "./utils";
import { debounce } from "../../utils/index";

export interface Rule {
  name: string; // 需要校验的 field 组件的 name 属性
  required?: boolean; // 是否必填
  message?: string; // 错误信息
  validator?: (value: string | number) => boolean; // 校验规则
}

interface IFormProps {
  hiderequiredasterisk: boolean;
  hidemessage: boolean;
  labelwidth: string;
  labelsuffix: string;
  labelposition: "left" | "right";
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
  labelwidth = "";

  @property({ type: Boolean })
  islink = false;

  @property({ type: String })
  prop: string;

  @property({ type: Boolean })
  hiderequiredasterisk: false; // 是否隐藏必填 *

  formRef: any = createRef();

  rules: IRuleItem[] = [];

  @state()
  validateState = "";

  @state()
  validateMessage = "";

  @state()
  itemNode = null;

  @state()
  formProps: IFormProps = {
    hiderequiredasterisk: false,
    hidemessage: false,
    labelwidth: "",
    labelsuffix: "",
    labelposition: "left",
  };

  defaultSlotRef: any = createRef();

  setFormProps(props: IFormProps) {
    this.formProps = props;
  }

  validate(callBack = noop) {
    if (!this.prop) return;
    if (!Array.isArray(this.rules)) {
      throw new Error("rules need array");
    }

    if (this.rules.length === 0) {
      return;
    }

    const value = this.getValue();
    this.validateState = "validating";

    const descriptor = {
      [this.prop]: this.rules,
    };

    const validator = new AsyncValidator(descriptor);
    validator.validate(
      { [this.prop]: value },
      { firstFields: true },
      (errors, invalidFields) => {
        this.validateState = !errors ? "success" : "error";
        this.validateMessage = errors ? errors[0].message : "";
        callBack(this.validateMessage, invalidFields);
      }
    );
  }

  clearValidate() {
    this.validateState = "";
    this.validateMessage = "";
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
        if (this.itemNode.tagName === formTagNamesMap["QUARK-FIELD"]) {
          this.itemNode.addEventListener("blur", () => {
            this.onFieldBlur();
          });
        }
      }
    }
  };

  onFieldChange = debounce(() => {
    // console.log("onFieldChange");
    this.validate();
  }, 200);

  onFieldBlur() {
    // console.log("onFieldBlur");
    this.validate();
  }

  componentWillUnmount() {
    // 移除监听表单字段change blur
    if (this.itemNode) {
      this.itemNode.removeEventListener("change", () => {
        this.onFieldChange();
      });
      if (this.itemNode.tagName === "QUARK-FIELD") {
        this.itemNode.removeEventListener("blur", () => {
          this.onFieldBlur();
        });
      }
    }
  }

  isRequired() {
    return (
      this.prop &&
      this.rules &&
      Array.isArray(this.rules) &&
      this.rules.length > 0 &&
      this.rules.some((rule) => rule.required)
    );
  }

  itemClass() {
    const classNames = ["quark-form-item"];
    this.validateState === "success" ? classNames.push("is-success") : null;
    this.validateState === "validating"
      ? classNames.push("is-validating")
      : null;

    if (this.formProps.hiderequiredasterisk) {
      classNames.push("is-no-asterisk");
    }
    return classNames.join(" ");
  }

  errorMessageRender() {
    return (
      !this.formProps.hidemessage &&
      !this.hidemessage &&
      this.validateState === "error" &&
      this.validateMessage && (
        <div class="quark-form-item_error-msg">{this.validateMessage}</div>
      )
    );
  }
  labelStyle() {
    const ret: any = {};
    if (this.formProps.labelwidth) {
      ret.width = this.formProps.labelwidth;
      ret.textAlign = this.formProps.labelposition;
    }
    return ret;
  }

  render() {
    return (
      <div class={this.itemClass()}>
        <div class="quark-form-item__wrapper">
          <div class="quark-form-item__prefix">
            <div class="quark-form-item__label" style={this.labelStyle()}>
              <slot name="label">
                {this.label}
                {this.formProps.labelsuffix}
              </slot>
            </div>
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
