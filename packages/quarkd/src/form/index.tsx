import { property, customElement, createRef, QuarkElement } from "quarkc";

import style from "./style.css";
import { IFormItem, IRuleItem } from "./type";
import validateAll, {
  filterSymbol,
  booleanTagNames,
  radio,
  radioGroup,
  formTagNames,
} from "./utils";
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

  rules: IRuleItem[] = [];

  child: IFormItem[] = [];

  getFormData = () => {
    const data: any = {};
    this.child.forEach((i: IFormItem) => {
      if (booleanTagNames.includes(i.tagName)) {
        // 兼容 radio 成组出现问题，只取  group 的 value
        if (i.tagName === radio && i.parentNode.tagName === radioGroup) {
          data[i.name] = Symbol("radio");
        } else {
          // 兼容 布尔为 false 时候
          data[i.name] = Boolean(i.value || i.checked);
        }
      } else {
        // 兼容引用类型数据
        data[i.name] = i.value || i.values;
      }
    });
    return data;
  };

  setInit = () => {
    const { current } = this.formRef;
    if (this.shadowRoot && current) {
      const el = current.querySelector("slot");
      const formChildren = el?.assignedNodes();
      let nodes = formChildren;
      formChildren.forEach((node: Element) => {
        if (node.querySelectorAll) {
          const includesNameNode = node.querySelectorAll(`[name]`) || [];
          // @ts-ignore
          nodes = [...nodes, ...includesNameNode];
        }
      });
      this.child = nodes.filter((i: IFormItem) => i.name);
    }
  };

  setRules = (rules: IRuleItem[]) => {
    this.setInit();
    if (!Array.isArray(rules)) throw new Error("rules need array");
    const values = this.getFormData();
    if (values) {
      Object.keys(values).forEach((c: string) => {
        this.rules = rules.map((i: IRuleItem) => {
          if (i.name === c) {
            i.value = values[c];
            if (this.formRef.current) {
              i.el = this.child.find((i) => i.name === c);
            }
            this.setFieldMsg(i);
          }
          return i;
        });
      });
    }
  };

  handleRightSlotChange = () => {
    console.log("onslotchange", this.slotRef);
    // console.log("onslotchange formRef", this.formRef);
    // this.setInit();
  };

  validate = (formRef, callBack) => {
    const hasCallback = callBack && typeof callBack === "function";
    return new Promise((resolve) => {
      console.log("validate formRef", formRef);
      const formItems = formRef.querySelectorAll("quark-form-item");
      const formData = {};
      const errorMessages = [];
      if (formItems && formItems.length > 0) {
        formItems.forEach((el) => {
          // const childNodes = el.children;
          // let filedValue = "";
          // for (let i = 0; i < childNodes.length; i++) {
          //   if (formTagNames.includes(childNodes[i].tagName)) {
          //     filedValue = childNodes[i].value;
          //     break;
          //   }
          // }
          const prop = el.getAttribute("prop");
          if (prop) {
            el.validate();
            // const msg = el.validate(prop, filedValue);
            // if (msg) errorMessages.push(msg);
            // formData[prop] = filedValue;
          }
        });
      }
      if (errorMessages.length > 0) {
        hasCallback ? callBack(false, errorMessages) : resolve(false);
      } else {
        hasCallback ? callBack(true) : resolve(true);
      }
    });

    // return validateAll(rules)(this.setErrorMsg);
  };

  setFieldMsg = (ruleItem: IRuleItem) => {
    const { el, message, required, validator } = ruleItem;
    if (!el) return;
    if (el.localName !== "quark-field") return;
    el.required = required;
    el.setRules([{ required, validator, message }]);
  };

  setErrorMsg = (ruleItem: IRuleItem) => {
    const { el } = ruleItem;
    if (!el) return;
    if (el.validRules) el.validRules();
  };

  getValues = () => {
    const values = this.getFormData();
    // 这里把最新的表单值塞进去
    this.setRules(this.rules);
    const validateStatus = this.validate(this.rules);
    if (validateStatus) {
      const formData = filterSymbol(values);
      return Promise.resolve(formData);
    }
    const r = this.rules.find((r) => r.validateStatus === false);
    return Promise.reject(r);
  };

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
