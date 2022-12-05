import { expect, fixture } from '@open-wc/testing';
import 'quarkd/lib/empty';

const data = {
  title: "暂无数据",
  desc: "暂无数据",
};
let el;

describe("<quark-empty>", async () => {
  it("element exist", async () => {
    el = await fixture(
      `<quark-empty >
        </quark-empty>`
    );
    const desc = el.shadowRoot.querySelector(".quark-empty");
    expect(desc).to.exist;
  });

  it("title attribute", async () => {
    el = await fixture(
      `<quark-empty title=${data.title}>
        </quark-empty>`
    );
    const titleE = el.shadowRoot.querySelector(".quark-empty-title");
    expect(titleE.innerHTML).to.equal(data.title);
    expect(el.title).to.equal(data.title);
  });

  it("desc attribute", async () => {
    el = await fixture(
      `<quark-empty desc=${data.desc}>
        </quark-empty>`
    );
    const descE = el.shadowRoot.querySelector(".quark-empty-desc");
    expect(descE.innerHTML).to.equal(data.desc);
    expect(el.desc).to.equal(data.desc);
  });

  it("slot attribute", async () => {
    const slot = `<span slot="footer">我是空状态</span>`;
    el = await fixture(`<quark-empty desc=${data.desc}>${slot}</quark-empty>`);
    const descE = el.shadowRoot.querySelector("slot");
    const slotResult = descE.assignedNodes()[0];
    expect(slotResult.outerHTML).to.equal(slot);
  });
});
