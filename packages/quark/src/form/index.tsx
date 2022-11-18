import QuarkElement, { property, customElement, createRef } from "@quarkd/core";

import style from "./style.css";
import { IFormItem, IRuleItem } from "./type";
import validateAll, {
  filterSymbol,
  booleanTagNames,
  radio,
  radioGroup,
} from "./utils";

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

  shadowRoot: ShadowRoot;

  rules: IRuleItem[] = [];

  child: IFormItem[] = [];

  booleanEle: string[] = [];

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
    this.setInit();
  };

  validate = (rules: IRuleItem[]) => {
    return validateAll(rules)(this.setErrorMsg);
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
        <slot onslotchange={this.handleRightSlotChange}></slot>
      </form>
    );
  }
}

export default QuarkForm;
