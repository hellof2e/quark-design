<<<<<<< HEAD
import { expect, fixture } from '@open-wc/testing';
import sinon from 'sinon';
import 'quarkd/lib/search';
=======
import { expect, fixture } from "@open-wc/testing";
import sinon from "sinon";
import "../../../lib/search";
>>>>>>> 6531b81639467a96c76b639475a9e07f71ddf373
// import './index'
const data = {
  value: "默认值",
  placeholder: "placeholder",
  maxlength: "5",
  iconcolor: "red",
  dark: true,
  showback: true,
  showaction: false,
  clearable: false,
  autofocus: true,
  actiontext: "操作按钮",
  disabled: true,
  readonly: true,
};
let el;
// color size 无法测试
describe("quark-search base attribute", async () => {
  before(async () => {
    el = await fixture(
      `<quark-search
        value=${data.value}
        placeholder=${data.placeholder}
        maxlength=${data.maxlength}
        readonly
        disabled
      >
      </quark-search>`
    );
  });

  it("quark-search exist", async () => {
    const search = el.shadowRoot.querySelector(".quark-search");
    expect(search).to.exist;
  });

  it("quark-search value attribute ", async () => {
    expect(el.value).to.equal(data.value);
  });

  it("quark-search placeholder attribute ", async () => {
    expect(el.placeholder).to.equal(data.placeholder);
  });

  it("quark-search maxlength attribute ", async () => {
    expect(el.maxlength).to.equal(data.maxlength);
  });

  it("quark-search readonly attribute ", async () => {
    expect(el.readonly).to.equal(data.readonly);
  });

  it("quark-search disabled attribute ", async () => {
    expect(el.disabled).to.equal(data.disabled);
  });
});
describe("quark-search Dom attribute", async () => {
  it("dark exit", async () => {
    const el = await fixture(`<quark-search dark="true"></quark-search>`);
    const dark = el.shadowRoot.querySelector(".quark-search__dark");
    expect(dark).to.be.exist;
  });

  it("dark null", async () => {
    const el = await fixture(`<quark-search></quark-search>`);
    const dark = el.shadowRoot.querySelector(".quark-search__dark");
    expect(dark).to.be.null;
  });

  it("onBackClicked Event", async () => {
    const el = await fixture(
      `<quark-search showback=${data.showback}></quark-search>`
    );
    const eventspy = sinon.spy();
    el.addEventListener("back", eventspy);
    const backRef = el.shadowRoot.querySelector(".quark-search__back");
    backRef.dispatchEvent(new Event("click"));
    expect(eventspy.called).to.equal(true);
  });

  it("onCancelClicked Event", async () => {
    const el = await fixture(`<quark-search></quark-search>`);
    const eventspy = sinon.spy();
    el.addEventListener("cancel", eventspy);
    const cancelRef = el.shadowRoot.querySelector(".quark-search__action");
    cancelRef.dispatchEvent(new Event("click"));
    expect(eventspy.called).to.equal(true);
  });

  it("input change Event", async () => {
    const el = await fixture(`<quark-search></quark-search>`);
    const eventspy = sinon.spy();
    el.addEventListener("change", eventspy);
    const input = el.shadowRoot.querySelector("input");
    input.dispatchEvent(new Event("input"));
    expect(eventspy.called).to.equal(true);
  });

  it("input blur Event", async () => {
    const el = await fixture(`<quark-search></quark-search>`);
    const eventspy = sinon.spy();
    el.addEventListener("blur", eventspy);
    const input = el.shadowRoot.querySelector("input");
    input.dispatchEvent(new Event("blur"));
    expect(eventspy.called).to.equal(true);
  });

  it("input focus Event", async () => {
    const el = await fixture(`<quark-search></quark-search>`);
    const eventspy = sinon.spy();
    el.addEventListener("focus", eventspy);
    const input = el.shadowRoot.querySelector("input");
    input.dispatchEvent(new Event("focus"));
    expect(eventspy.called).to.equal(true);
  });

  it("slot action", async () => {
    const slot = `<span slot="action">action</span>`;
    el = await fixture(`<quark-search>${slot}</quark-search>`);
    const descE = el.shadowRoot.querySelector("slot[name=action]");
    const slotResult = descE.assignedNodes()[0];
    expect(slotResult.outerHTML).to.equal(slot);
  });
});
