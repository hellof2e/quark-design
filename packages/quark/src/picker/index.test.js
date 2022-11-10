import { expect, fixture } from '@open-wc/testing';
import sinon from 'sinon';
import 'quarkd/lib/picker';

const data = {
  title: "请选择时间",
  open: true,
  bottomhidden: true,
};
let el;

describe("<quark-picker>", async () => {
  it("element exist", async () => {
    el = await fixture(
      `<quark-picker 
        title=${data.title}
        open=${data.open}
        >
        </quark-picker>`
    );
    const container = el.shadowRoot.querySelector(".quark-picker-container");
    const header = el.shadowRoot.querySelector(".quark-picker-header");
    const headerTitle = el.shadowRoot.querySelector(".quark-picker-title");
    const content = el.shadowRoot.querySelector(".quark-picker-content");
    const bottom = el.shadowRoot.querySelector(".quark-picker-bottom");
    expect(container).to.exist;
    expect(header).to.exist;
    expect(headerTitle).to.exist;
    expect(content).to.exist;
    expect(bottom).to.exist;
  });

  it("header slot", async () => {
    const slot = `<div slot="header">
    <span class="cancel">取消</span>
    <span class="picker-title">请选择城市</span>
    <span class="ensure">确定</span>
  </div>`;
    el = await fixture(`<quark-picker>${slot}</quark-picker>`);
    const descE = el.shadowRoot.querySelector("slot[name='header']");
    const slotResult = descE.assignedNodes()[0];
    expect(slotResult.outerHTML).to.equal(slot);
  });
});
