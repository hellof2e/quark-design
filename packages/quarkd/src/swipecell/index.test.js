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
    el = await fixture(`<quark-swipe-cell></quark-swipe-cell>`);
    const swipeCellContainer = el.shadowRoot.querySelector(".quark-swipe-cell");
    expect(swipeCellContainer).to.exist;
  });
  it("attribute", async () => {
    el = await fixture(
      `<quark-swipe-cell
        disabled=${data.disabled}
        leftwidth=${data.leftWidth}
        rightwidth=${data.rightWidth}
      >
      </quark-swipe-cell>`
    );
    expect(el.disabled).to.equal(data.disabled);
    expect(el.leftwidth).to.equal(data.leftWidth);
    expect(el.rightwidth).to.equal(data.rightWidth);
  });
});
