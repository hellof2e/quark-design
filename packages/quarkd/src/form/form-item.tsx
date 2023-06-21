import { property, customElement, createRef, QuarkElement } from "quarkc";
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

  required = false;

  islink = false;

  validate() {
    console.log("form-item validate");
  }

  errorMessageRender() {
    console.log(this.showerrormessage);
    return (
      this.showerrormessage && (
        <div class="quark-form-item_error-msg">error-msg</div>
      )
    );
  }

  render() {
    return (
      <form-item>
        <div class="quark-form-item__wrapper">
          <div class="quark-form-item__prefix">
            {this.required && <div class="quark-form-item__required">*</div>}
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
