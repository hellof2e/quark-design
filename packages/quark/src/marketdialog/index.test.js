import { expect, fixture } from "@open-wc/testing";
import "../../../lib/progress";

const data = {
  value: "10",
  color: "red",
};
let el;

describe("<quark-progress>", async () => {
  before(async () => {
    el = await fixture(
      `<quark-progress 
        value=${data.value}
        color=${data.color}
      >
      </quark-progress>`
    );
  });

  it("quark-progress exist", async () => {
    const progress = el.shadowRoot.querySelector(".progress");
    expect(progress).to.exist;
  });

  it("quark-progress value attribute", async () => {
    expect(el.value).to.equal(data.value);
  });

  it("quark-progress color attribute", async () => {
    expect(el.color).to.equal(data.color);
  });

  it("slot percent", async () => {
    const slot = `<span slot="percent">我是右标题</span>`;
    el = await fixture(`<quark-progress>${slot}</quark-progress>`);
    const descE = el.shadowRoot.querySelector("slot[name=percent]");
    const slotResult = descE.assignedNodes()[0];
    expect(slotResult.outerHTML).to.equal(slot);
  });
});
