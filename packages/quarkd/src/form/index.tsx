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
  validatefirst: false;

  @property({ type: Boolean })
  hidemessage: false;

  @property({ type: Boolean })
  hiderequiredasterisk: false; // 是否隐藏必填 *

  @property({ type: String })
  labelwidth: "";

  @property({ type: String })
  labelsuffix: "";

  @property({ type: String })
  labelposition: "left";

  formRef: any = createRef();

  slotRef: any = createRef();

  @state()
  formItems: QuarkFormItem[] = [];

  handleRightSlotChange = () => {
    if (this.slotRef.current) {
      this.formItems = this.slotRef.current
        .assignedNodes()
        .filter((item) => item.tagName === "QUARK-FORM-ITEM" && item.prop);

      if (this.hidemessage) {
        this.formItems.forEach((el) => {
          el.setFormProps({
            hidemessage: this.hidemessage,
            labelwidth: this.labelwidth,
            hiderequiredasterisk: this.hiderequiredasterisk,
            labelsuffix: this.labelsuffix,
            labelposition: this.labelposition,
          });
        });
      }
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

    for (let i = 0; i < this.formItems.length; i++) {
      this.formItems[i].validate((message, field) => {
        if (message) {
          valid = false;
        }
        invalidFields = { ...invalidFields, ...field };
      });

      if (this.validatefirst && !valid) {
        if (typeof callback === "function") {
          callback(valid, invalidFields);
        }
        break;
      }
      if (typeof callback === "function" && ++count === this.formItems.length) {
        callback(valid, invalidFields);
      }
    }

    if (promise) {
      return promise;
    }
  };

  validateField = (props: string | string[], callback) => {
    const _props = [].concat(props);
    const fields = this.formItems.filter(
      (field) => _props.indexOf(field.prop) !== -1
    );
    if (!fields.length) {
      console.warn("[Quark Warn]please pass correct props!");
      return;
    }

    fields.forEach((field) => {
      field.validate(callback);
    });
  };

  clearValidate() {
    this.formItems.forEach((item) => {
      item.clearValidate();
    });
  }

  componentDidMount(): void {
    console.log("componentDidMount", this.hidemessage, typeof this.hidemessage);
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
