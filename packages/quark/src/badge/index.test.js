import { expect, fixture, html } from "@open-wc/testing";
import "../../../lib/badge";
const data = {
  type: "label",
  content: "100",
  size: "big",
  border: true,
  max: "99",
};
let el;
describe("<quark-badge>", async () => {
  before(async () => {
    el = await fixture(
      `<quark-badge 
      type=${data.type} 
      content=${data.content} 
      size=${data.size}
      border=${data.border}
      max=${data.max}
    >
    </quark-badge>`
    );
  });

  it("badge exist", async () => {
    const badge = el.shadowRoot.querySelector(".quark-badge");
    expect(badge).to.exist;
  });

  it("type attribute", () => {
    expect(el.type).to.equal(data.type);
  });

  it("content attribute", () => {
    expect(el.content).to.equal(data.content);
  });

  it("size attribute", () => {
    expect(el.size).to.equal(data.size);
  });

  it("max attribute", () => {
    expect(el.max).to.equal(data.max);
  });

  it("slot ", async () => {
    const slot = `<span>123</span>`;
    el = await fixture(
      `<<quark-badge>
          ${slot}
        </quark-noticebar>`
    );
    const slotResult = el.children[0];
    expect(slotResult.outerHTML).to.equal(slot);
  });
});
