import { expect, fixture } from "@open-wc/testing";
import sinon from "sinon";
import "../../../lib/field/index";
const data = {
  name: "test",
  label: "标题",
  value: "12",
  defaultvalue: "12",
  type: "text",
  placeholder: "你好啊",
  max: "12",
  maxlength: "13",
  min: "10",
  minlength: "12",
  errormsg: "不能为空",
};
let el;
// color size 无法测试
describe("quark-field base attribute", async () => {
  before(async () => {
    el = await fixture(
      `<quark-field
        name=${data.name}
        value=${data.value}
        defaultvalue=${data.defaultvalue}
        type=${data.type}
        placeholder=${data.placeholder}
        max=${data.max}
        maxlength=${data.maxlength}
        min=${data.min}
        minlength=${data.minlength}
        errormsg=${data.errormsg}
      >
      </quark-field>`
    );
  });

  it("quark-field name attribute ", async () => {
    expect(el.name).to.equal(data.name);
  });

  it("quark-field value attribute ", async () => {
    expect(el.value).to.equal(data.value);
  });

  it("quark-field defaultvalue attribute ", async () => {
    expect(el.defaultvalue).to.equal(data.defaultvalue);
  });

  it("quark-field type attribute ", async () => {
    expect(el.type).to.equal(data.type);
  });

  it("quark-field placeholder attribute ", async () => {
    expect(el.placeholder).to.equal(data.placeholder);
  });

  it("quark-field max attribute ", async () => {
    expect(el.max).to.equal(data.max);
  });

  it("quark-field maxlength attribute ", async () => {
    expect(el.maxlength).to.equal(data.maxlength);
  });

  it("quark-field minlength attribute ", async () => {
    expect(el.minlength).to.equal(data.minlength);
  });

  it("quark-field min attribute ", async () => {
    expect(el.min).to.equal(data.min);
  });

  it("quark-field errormsg attribute ", async () => {
    expect(el.errormsg).to.equal(data.errormsg);
  });

  it("label slot", async () => {
    const slot = `<span slot="label">我是标题</span>`;
    el = await fixture(`<quark-field>${slot}</quark-field>`);
    const descE = el.shadowRoot.querySelector("slot[name='label']");
    const slotResult = descE.assignedNodes()[0];
    expect(slotResult.outerHTML).to.equal(slot);
  });
  it("quark-field event", async () => {
    const eventspy = sinon.spy();
    const blurEventspy = sinon.spy();
    const focesEventspy = sinon.spy();
    el.addEventListener("change", eventspy);
    el.addEventListener("blur", blurEventspy);
    el.addEventListener("focus", focesEventspy);
    const input = el.shadowRoot.querySelector("input");
    if (!input) return;
    input.dispatchEvent(new Event("change"));
    input.dispatchEvent(new Event("blur"));
    input.dispatchEvent(new Event("focus"));
    expect(eventspy.called).to.equal(false);
    expect(blurEventspy.called).to.equal(false);
    expect(focesEventspy.called).to.equal(false);
  });
});
