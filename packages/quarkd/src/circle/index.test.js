import { expect, fixture } from "@open-wc/testing";
import "quarkd/lib/circle";

const data = {
  size: 80,
  color: "#02b357",
  strokewidth: 5,
};
let el;

describe("<quark-circle>", async () => {
  it("to attribute", async () => {
    el = await fixture(`<quark-circle size=${data.size}></quark-circle>`);
    expect(el.size).to.be.equal(data.size);
  });

  it("title attribute", async () => {
    el = await fixture(`<quark-circle color=${data.color}></quark-circle>`);
    expect(el.color).to.equal(data.color);
  });

  it("desc attribute", async () => {
    el = await fixture(
      `<quark-circle strokewidth=${data.strokewidth}></quark-circle>`
    );
    expect(el.strokewidth).to.equal(data.strokewidth);
  });
});
