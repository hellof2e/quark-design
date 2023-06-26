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
import { formTagNames, noop } from "./utils";

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

  defaultSlotRef: any = createRef();

  validate(callBack = noop) {
    if (!Array.isArray(this.rules)) {
      throw new Error("rules need array");
    }

    if (this.rules.length === 0) {
      return;
    }

    const value = this.getValue();
    console.log("validate prop", this.prop, value);

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
        console.log(11111, this.validatemessage);
        console.log(2222, invalidFields);
      }
    );
    return this.errormsg ? { [this.prop]: this.errormsg } : null;
  }

  getValue = () => {
    if (!this.prop) return;
    const slotNodes = this.defaultSlotRef.current.assignedNodes();
    if (slotNodes.length > 0) {
      const formNode = slotNodes.find((node) =>
        formTagNames.includes(node.tagName)
      );
      return formNode.value;
    } else {
      return null;
    }
  };

  errorMessageRender() {
    return (
      this.validatestate === "error" &&
      this.validatemessage && (
        <div class="quark-form-item_error-msg">{this.validatemessage}</div>
      )
    );
  }

  isRequired() {
    return (
      this.rules &&
      Array.isArray(this.rules) &&
      this.rules.length > 0 &&
      this.rules.some((rule) => rule.required)
    );
  }

  render() {
    return (
      <form-item>
        <div class="quark-form-item__wrapper">
          <div class="quark-form-item__prefix">
            {!this.hiderequiredasterisk && this.isRequired() && (
              <div class="quark-form-item__asterisk">*</div>
            )}
            <slot name="label">
              <div class="quark-form-item__label">{this.label}</div>
            </slot>
          </div>
          <div class="quark-form-item__main">
            <div class="quark-form-item__main-content">
              <slot ref={this.defaultSlotRef}></slot>
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
      </form-item>
    );
  }
}

export default QuarkFormItem;
