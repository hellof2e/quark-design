import {
  property,
  customElement,
  createRef,
  QuarkElement,
  state,
} from "quarkc";

import style from "./style.css";
import QuarkFormItem from "./form-item";

export interface Rule {
  name: string; // 需要校验的 field 组件的 name 属性
  required?: boolean; // 是否必填
  message?: string; // 错误信息
  validator?: (value: string | number) => boolean; // 校验规则
}

@customElement({
  tag: "quark-form",
  style,
})
class QuarkForm extends QuarkElement {
  @property()
  value = "";

  @property({ type: Boolean })
  showtext = false;

  formRef: any = createRef();

  slotRef: any = createRef();

  @state()
  formItems: QuarkFormItem[] = [];

  handleRightSlotChange = () => {
    if (this.slotRef.current) {
      this.formItems = this.slotRef.current
        .assignedNodes()
        .filter((item) => item.tagName === "QUARK-FORM-ITEM" && item.prop);
    }
  };

  validate = (callback) => {
    let promise;
    if (typeof callback !== "function" && window.Promise) {
      promise = new window.Promise((resolve, reject) => {
        callback = function (valid, invalidFields) {
          valid ? resolve(valid) : reject(invalidFields);
        };
      });
    }
    let valid = true;
    let count = 0;
    if (this.formItems.length === 0) {
      callback(true);
    }
    let invalidFields = {};
    this.formItems.forEach((item) => {
      item.validate((message, filed) => {
        if (message) {
          valid = false;
        }
        invalidFields = { ...invalidFields, ...filed };
      });
      if (typeof callback === "function" && ++count === this.formItems.length) {
        callback(valid, invalidFields);
      }
    });
    if (promise) {
      return promise;
    }
  };

  clearValidate() {
    this.formItems.forEach((item) => {
      item.clearValidate();
    });
  }

  render() {
    return (
      <form ref={this.formRef}>
        <slot
          ref={this.slotRef}
          onslotchange={this.handleRightSlotChange}
        ></slot>
      </form>
    );
  }
}

export default QuarkForm;
