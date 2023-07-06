import {
  property,
  customElement,
  createRef,
  QuarkElement,
  state,
} from "quarkc";

import style from "./style.css";
import QuarkFormItem from "./form-item";
import { Rules } from "async-validator";

@customElement({
  tag: "quark-form",
  style,
})
class QuarkForm extends QuarkElement {
  @property({ type: Boolean })
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

  model: { [key: string]: any } | null = null;

  rules: Rules | null = null;

  onSlotChange = () => {
    if (this.slotRef.current) {
      this.formItems = this.slotRef.current
        .assignedNodes()
        .filter((item) => item.tagName === "QUARK-FORM-ITEM" && item.prop);

      this.formItems.forEach((el) => {
        if (this.model) {
          el.setFormModel(this.model);
        }
        if (this.rules && el.prop && this.rules[el.prop]) {
          el.setRule(this.rules[el.prop]);
        }
        el.setFormProps({
          hideMessage: this.hidemessage,
          labelWidth: this.labelwidth,
          hideRequiredAsterisk: this.hiderequiredasterisk,
          labelSuffix: this.labelsuffix,
          labelPosition: this.labelposition,
        });
      });
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

  clearValidate(props: string[] | string = "") {
    this.formItems.forEach((item) => {
      if (props) {
        if (Array.isArray(props) && props.indexOf(item.prop) > -1) {
          item.clearValidate();
        }
        if (item.prop === props) {
          item.clearValidate();
        }
      } else {
        item.clearValidate();
      }
    });
  }

  resetFields() {
    if (!this.model) {
      console.warn("[Quark Warn]please setModel!");
      return;
    }

    this.formItems.forEach((item) => {
      item.resetField();
    });
  }

  setRules(rules: Rules) {
    this.rules = rules;
  }

  setModel = (model) => {
    this.model = model;
  };

  render() {
    return (
      <form class="quark-form" ref={this.formRef}>
        <slot ref={this.slotRef} onslotchange={this.onSlotChange}></slot>
      </form>
    );
  }
}

export default QuarkForm;
