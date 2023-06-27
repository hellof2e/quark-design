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
import { formTagNames, noop, swicth } from "./utils";
import { debounce } from "../../utils/index";

export interface Rule {
  name: string; // 需要校验的 field 组件的 name 属性
  required?: boolean; // 是否必填
  message?: string; // 错误信息
  validator?: (value: string | number) => boolean; // 校验规则
}

@customElement({
  tag: "quark-form-item",
  style,
})
class QuarkFormItem extends QuarkElement {
  showerrormessage = true;

  label = "";

  hiderequiredasterisk: false; // 是否隐藏必填 *

  formRef: any = createRef();

  rules: IRuleItem[] = [];

  islink = false;

  @property({ type: String })
  prop: string;

  @state()
  errormsg = "";

  @state()
  validatestate = "";

  @state()
  validatemessage = "";

  @state()
  slotNodes = [];

  @state()
  formnode = null;

  defaultSlotRef: any = createRef();

  validate(callBack = noop) {
    if (!this.prop) return;
    if (!Array.isArray(this.rules)) {
      throw new Error("rules need array");
    }

    if (this.rules.length === 0) {
      return;
    }

    const value = this.getValue();
    this.validatestate = "validating";

    const descriptor = {
      [this.prop]: this.rules,
    };

    const validator = new AsyncValidator(descriptor);
    validator.validate(
      { [this.prop]: value },
      { firstFields: true },
      (errors, invalidFields) => {
        this.validatestate = !errors ? "success" : "error";
        this.validatemessage = errors ? errors[0].message : "";
        callBack(this.validatemessage, invalidFields);
        // console.log(11111, this.validatemessage);
        // console.log(2222, invalidFields);
      }
    );
    return this.errormsg ? { [this.prop]: this.errormsg } : null;
  }

  clearValidate() {
    this.validatestate = "";
    this.validatemessage = "";
  }

  getValue = () => {
    if (!this.prop) return;
    let value = null;
    if (this.formnode) {
      const tagName = this.formnode.tagName;
      if (
        tagName === "QUARK-RADIO" ||
        tagName === "QUARK-CHECKBOX" ||
        tagName === swicth
      ) {
        value = this.formnode.checked;
      } else {
        value = this.formnode.value;
      }
      console.log("getValue", value);
    }

    return value;
  };

  defaultSlotChange = () => {
    if (!this.defaultSlotRef.current) return;
    this.slotNodes = this.defaultSlotRef.current.assignedNodes();
    if (this.slotNodes.length > 0) {
      const formNode = this.slotNodes.find((node) =>
        formTagNames.includes(node.tagName)
      );

      // 监听表单字段change blur
      if (formNode) {
        this.formnode = formNode;
        this.formnode.addEventListener("change", () => {
          this.onFieldChange();
        });
        if (this.formnode.tagName === "QUARK-FIELD") {
          this.formnode.addEventListener("blur", () => {
            this.onFieldBlur();
          });
        }
      }
    }
  };

  onFieldChange = debounce(() => {
    console.log("onFieldChange");
    this.validate();
  }, 200);

  onFieldBlur() {
    console.log("onFieldBlur");
    this.validate();
  }

  errorMessageRender() {
    return (
      this.validatestate === "error" &&
      this.validatemessage && (
        <div class="quark-form-item_error-msg">{this.validatemessage}</div>
      )
    );
  }
  componentWillUnmount() {
    // 移除监听表单字段change blur
    if (this.formnode) {
      this.formnode.removeEventListener("change", () => {
        this.onFieldChange();
      });
      if (this.formnode.tagName === "QUARK-FIELD") {
        this.formnode.removeEventListener("blur", () => {
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

  formItemClassHandler() {
    const classNames = ["quark-form-item"];
    this.validatestate === "success" ? classNames.push("is-success") : null;
    this.validatestate === "validating"
      ? classNames.push("is-validating")
      : null;
    return classNames.join(" ");
  }

  render() {
    return (
      <div class={this.formItemClassHandler()}>
        <div class="quark-form-item__wrapper">
          <div class="quark-form-item__prefix">
            {!this.hiderequiredasterisk && this.isRequired() && (
              <div class="quark-form-item__asterisk">*</div>
            )}
            <div class="quark-form-item__label">
              <slot name="label">{this.label}</slot>
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
