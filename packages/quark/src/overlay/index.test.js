<<<<<<< HEAD
import { expect, fixture } from '@open-wc/testing';
import sinon from 'sinon';
import 'quarkd/lib/overlay';
=======
import { expect, fixture } from "@open-wc/testing";
import sinon from "sinon";
import "../../../lib/overlay";
>>>>>>> 6531b81639467a96c76b639475a9e07f71ddf373

const data = {
  open: true,
  zindex: 1,
};
let el;

describe("<quark-overlay>", async () => {
  it("element exist", async () => {
    el = await fixture(
      `<quark-overlay 
        open=${data.open}
        zindex=${data.zindex}
        >
        </quark-overlay>`
    );
    const container = el.shadowRoot.querySelector(".content");
    const mask = el.shadowRoot.querySelector(".mask");
    expect(container).to.exist;
    expect(mask).to.exist;
    expect(el.open).to.equal(data.open);
    expect(el.zindex).to.equal(`${data.zindex}`);
  });

  it("content slot", async () => {
    const slot = `<div>content</div>`;
    el = await fixture(`<quark-overlay>${slot}</quark-overlay>`);
    const descE = el.shadowRoot.querySelector("slot");
    const slotResult = descE.assignedNodes()[0];
    expect(slotResult.outerHTML).to.equal(slot);
  });
});
