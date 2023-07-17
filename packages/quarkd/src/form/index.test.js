import { expect, fixture } from "@open-wc/testing";
import "quarkd/lib/form";

let el;

describe("<quark-form>", async () => {
  before(async () => {
    el = await fixture(`<quark-form></quark-form>`);
  });

  it("quark-form exist", async () => {
    const form = el.shadowRoot.querySelector(".quark-form");
    expect(form).to.exist;
  });

  it("slot ", async () => {
    const slot = `<quark-form-item>
      <quark-field name="age"></quark-field>
    </quark-form-item>`;
    el = await fixture(`<quark-form>${slot}</quark-form>`);
    const descE = el.shadowRoot.querySelector("slot");
    const slotResult = descE.assignedNodes()[0];
    expect(slotResult.outerHTML).to.equal(slot);
  });
});
