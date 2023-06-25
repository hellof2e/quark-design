import {
  property,
  customElement,
  createRef,
  QuarkElement,
  state,
} from "quarkc";
import "../cell";

import style from "./form-item.css";
import { IRuleItem } from "./type";

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

  formRef: any = createRef();

  rules: IRuleItem[] = [];

  islink = false;

  @state()
  errormsg = "";

  validate(prop: string) {
    if (!Array.isArray(this.rules)) {
      throw new Error("rules need array");
    }
    this.rules.forEach((item) => {
      if (item.required) {
        this.errormsg = item.message || "";
      }
    });
    return this.errormsg ? { [prop]: this.errormsg } : null;
  }

  errorMessageRender() {
    return (
      this.showerrormessage &&
      this.errormsg && (
        <div class="quark-form-item_error-msg">{this.errormsg}</div>
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
            {this.isRequired() && (
              <div class="quark-form-item__required">*</div>
            )}
            <slot name="label">
              <div class="quark-form-item__label">{this.label}</div>
            </slot>
          </div>
          <div class="quark-form-item__main">
            <div class="quark-form-item__main-content">
              <slot></slot>
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
