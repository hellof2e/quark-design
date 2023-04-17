import { expect, fixture } from "@open-wc/testing";
import "quarkd/lib/grid";
const data = {
  column: "3",
  square: true,
  noborder: true,
  text: "文字",
  icon: "https://m.hellobike.com/resource/helloyun/16682/dyElZ_img.png",
};
let el;
describe("<quark-grid>", async () => {
  before(async () => {
    el = await fixture(
      `<quark-grid column=${data.column} square=${data.square} noborder=${data.noborder}> 
      <quark-grid-item icon=${data.icon} text=${data.text} />
      <quark-grid-item icon=${data.icon} text=${data.text} />
      <quark-grid-item icon=${data.icon} text=${data.text} />
      <quark-grid-item icon=${data.icon} text=${data.text} />
    </quark-grid>`
    );
  });

  it("element exist", async () => {
    const container = el.shadowRoot.querySelector(".quark-grid");
    expect(container).to.exist;
  });

  it("column attribute", () => {
    expect(el.column).to.equal(data.column);
  });

  it("square attribute", () => {
    expect(el.square).to.equal(data.square);
  });

  it("noborder attribute", () => {
    expect(el.noborder).to.equal(data.noborder);
  });
});
