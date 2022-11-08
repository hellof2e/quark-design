import { expect, fixture } from "@open-wc/testing";
import "../../../lib/cell";

const data = {
  title: "标题",
  desc: "描述",
  to: "#/button",
};
let el;

describe("<quark-cell>", async () => {
  it("to attribute", async () => {
    el = await fixture(
      `<quark-cell 
        to=${data.to}
        >
        </quark-cell>`
    );
    expect(el.to).to.be.equal(data.to);
  });

  it("title attribute", async () => {
    el = await fixture(
      `<quark-cell title=${data.title}>
        </quark-cell>`
    );
    const titleE = el.shadowRoot.querySelector(".title");
    expect(titleE.innerHTML).to.equal(data.title);
    expect(el.title).to.equal(data.title);
  });

  it("desc attribute", async () => {
    el = await fixture(
      `<quark-cell desc=${data.desc}>
        </quark-cell>`
    );
    const descE = el.shadowRoot.querySelector(".desc");
    expect(descE.innerHTML).to.equal(data.desc);
    expect(el.desc).to.equal(data.desc);
  });
});
