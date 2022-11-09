import { expect, fixture } from '@open-wc/testing';
import 'quarkd/lib/noticebar';

const data = {
  text: "暂无数据",
  desc: "暂无数据",
};
let el;

describe("<quark-noticebar>", async () => {
  it("element exist", async () => {
    el = await fixture(
      `<quark-noticebar >
        </quark-noticebar>`
    );
    const noticebar = el.shadowRoot.querySelector("slot");
    expect(noticebar).to.exist;
  });

  it("text slot ", async () => {
    const textSlot = `<span slot="text">123</span>`;
    el = await fixture(
      `<quark-noticebar>
         ${textSlot}
        </quark-noticebar>`
    );
    const textNode = el.shadowRoot.querySelector("slot[name='text']");
    const slotResult = textNode.assignedNodes()[0];
    expect(slotResult.outerHTML).to.equal(textSlot);
  });

  it("left slot ", async () => {
    const leftSlot = `<span slot="left">123</span>`;
    el = await fixture(
      `<quark-noticebar>
         ${leftSlot}
        </quark-noticebar>`
    );
    const leftNode = el.shadowRoot.querySelector("slot[name='left']");
    const slotResult = leftNode.assignedNodes()[0];
    expect(slotResult.outerHTML).to.equal(leftSlot);
  });

  it("right slot ", async () => {
    const rightSlot = `<span slot="right">123</span>`;
    el = await fixture(
      `<quark-noticebar>
         ${rightSlot}
        </quark-noticebar>`
    );
    const rightNode = el.shadowRoot.querySelector("slot[name='right']");
    const slotResult = rightNode.assignedNodes()[0];
    expect(slotResult.outerHTML).to.equal(rightSlot);
  });
});
