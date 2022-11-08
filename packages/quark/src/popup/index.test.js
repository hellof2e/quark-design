import { expect, fixture } from "@open-wc/testing";
import sinon from "sinon";
import "../../../lib/popup";

const data = {
  slotText: "弹框内容",
  position: "bottom",
  round: true,
  open: true,
  closeable: true,
};
let el;

describe("<quark-popup>", async () => {
  it("position attribute", async () => {
    el = await fixture(
      `<quark-popup 
            position=${data.position}
          >
          </quark-popup>`
    );
    expect(el.position).to.equal(data.position);
  });

  it("round attribute", async () => {
    el = await fixture(
      `<quark-popup 
            round=${data.round}
          >
          </quark-popup>`
    );
    expect(el.round).to.exist;
  });

  it("open attribute", async () => {
    el = await fixture(
      `<quark-popup 
            open=${data.open}
          >
          </quark-popup>`
    );
    expect(el.open).to.exist;
  });

  it("closeable attribute", async () => {
    el = await fixture(
      `<quark-popup 
            closeable=${data.closeable}
          >
          </quark-popup>`
    );
    expect(el.closeable).to.exist;
  });

  it("onClose event", async () => {
    el = await fixture(
      `<quark-popup 
            closeable=${data.closeable}
          >
          </quark-popup>`
    );
    const eventspy = sinon.spy();
    el.addEventListener("closed", eventspy);
    const maskRef = el.shadowRoot.getElementById("mask");
    maskRef.dispatchEvent(new Event("click"));
    expect(eventspy.called).to.equal(true);
  });

  it("slot", async () => {
    const slot = `<span>我是右标题</span>`;
    el = await fixture(`<quark-popup>${slot}</quark-popup>`);
    const descE = el.shadowRoot.querySelector("slot");
    const slotResult = descE.assignedNodes()[0];
    expect(slotResult.outerHTML).to.equal(slot);
  });
});
