<<<<<<< HEAD
import { assert, expect, fixture, html } from '@open-wc/testing';
import 'quarkd/lib/tag';
=======
import { assert, expect, fixture, html } from "@open-wc/testing";
import "../../../lib/tag";
>>>>>>> 6531b81639467a96c76b639475a9e07f71ddf373
const data = {
  slotText: "主要标签",
  type: "blue",
  size: "large",
  color: "#666666",
  textcolor: "#333333",
  plain: true,
};
let el;
describe("<quark-tag>", async () => {
  before(async () => {
    el = await fixture(
      `<quark-tag 
      type=${data.type} 
      size=${data.size}
      plain=${data.plain}
      light=${data.light}
      color=${data.color}
      textcolor=${data.textcolor}
    >
      ${data.slotText}
    </quark-tag>`
    );
  });

  it("tag exist", async () => {
    const tag = el.shadowRoot.querySelector(".tag");
    expect(tag).to.exist;
  });

  it("type attribute", () => {
    expect(el.type).to.equal(data.type);
  });

  it("size attribute", () => {
    expect(el.size).to.equal(data.size);
  });

  it("plain attribute", () => {
    expect(el.plain).to.exist;
  });

  it("light attribute", () => {
    expect(el.light).to.exist;
  });

  it("color attribute", () => {
    expect(el.color).to.equal(data.color);
  });
  it("textcolor attribute", () => {
    expect(el.textcolor).to.equal(data.textcolor);
  });
});
