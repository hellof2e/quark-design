import { expect, fixture } from "@open-wc/testing";
import "quarkd/lib/swipecell";

const data = {
  disabled: true,
  threshold: 0.4,
  leftWidth: 10,
  rightWidth: 10,
};
let el;

describe("<quark-swipe-cell>", async () => {
  it("element exist", async () => {
    el = await fixture(
      `<quark-swipe-cell 
        threshold=${data.threshold}
        >
        </quark-swipe-cell>`
    );
    const swipeCellContainer = el.shadowRoot.querySelector(".quark-swipe-cell");
    expect(swipeCellContainer).to.exist;
  });
  it("attribute", async () => {
    el = await fixture(
      `<quark-swipe-cell 
        threshold=${data.threshold}
        disabled=${data.disabled}
        left-width=${data.leftWidth}
        right-width=${data.rightWidth}
        >
        </quark-swipe-cell>`
    );
    expect(el.threshold).to.be.equal(data.threshold);
    expect(el.disabled).to.equal(data.disabled);
    expect(el.leftWidth).to.equal(data.leftWidth);
    expect(el.rightWidth).to.equal(data.rightWidth);
  });
});
