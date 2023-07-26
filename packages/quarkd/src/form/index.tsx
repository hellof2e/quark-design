import {
  property,
  customElement,
  createRef,
  QuarkElement,
  state,
} from "quarkc";

import style from "./style.css";
import QuarkFormItem from "./form-item";
import { Rules, labelPosition } from "./type";
import { getPropByPath } from "./utils";
import { slotAssignedElements } from "../../utils/public";

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
  hideasterisk: false; // 是否隐藏必填 *

  @property({ type: String })
  labelwidth: "";

  @property({ type: String })
  labelsuffix: "";

  @property()
  labelposition: labelPosition = "left";

  formRef: any = createRef();

  slotRef: any = createRef();

  @state()
  formItems: QuarkFormItem[] = [];

  model: Record<string, any> | null = null;

  rules: Rules | null = null;

  onSlotChange = () => {
    if (this.slotRef.current) {
      const allFormItes = slotAssignedElements(
        this.slotRef.current?.assignedNodes()
      ).filter((item) => item.tagName === "QUARK-FORM-ITEM");

      this.formItems = allFormItes.filter((item) => item.prop);

      allFormItes.forEach((item) => {
        item.setFormProps({
          hideMmessage: this.hidemessage,
          labelwidth: this.labelwidth,
          hideasterisk: this.hideasterisk,
          labelsuffix: this.labelsuffix,
          labelposition: this.labelposition,
        });
      });
      this.formItems.forEach((el) => {
        if (this.model) {
          el.setFormModel(this.model);
        }

        if (this.rules && el.prop) {
          let prop = el.prop;
          if (el.prop.indexOf(".") > -1) {
            prop = el.prop.split(".").shift();
          }
          const rule = getPropByPath(this.rules, prop, true);
          el.setRule({
            [prop]: rule.v,
          });
        }
      });
    }
  };

  validate = (callback): Promise<boolean> | void => {
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
          callback(valid, valid ? this.getValues() : invalidFields);
        }
        break;
      }
      if (typeof callback === "function" && ++count === this.formItems.length) {
        callback(valid, valid ? this.getValues() : invalidFields);
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

  clearValidate(props?: string[] | string) {
    let fields = this.formItems;
    if (props) {
      if (Array.isArray(props)) {
        fields = this.formItems.filter((item) => props.indexOf(item.prop) > -1);
      } else {
        fields = this.formItems.filter((item) => props === item.prop);
      }
    }
    fields.forEach((item) => {
      item.clearValidate();
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

  setModel = (model: Record<string, any>) => {
    this.model = model;
  };

  getValues(): Record<string, any> {
    if (!this.model) {
      console.warn("[Quark Warn]please setModel!");
      return;
    }
    this.formItems.forEach((item) => {
      item.getValue();
    });
    return this.model;
  }

  render() {
    return (
      <form class="quark-form" ref={this.formRef}>
        <slot ref={this.slotRef} onslotchange={this.onSlotChange}></slot>
      </form>
    );
  }
}

export default QuarkForm;
