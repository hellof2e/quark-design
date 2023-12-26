import { expect, fixture } from "@open-wc/testing";
import "quarkd/lib/watermark";

const options = {
  width: "64",
  height: "120",
  rotate: "-22",
  gapx: "24",
  gapy: "48",
  textContent: "quark-design cool!",
};

let el;

describe("<quark-watermark>", async () => {
  before(async () => {
    el = await fixture(
      `<quark-watermark
        width=${options.width}
        height=${options.height}
        rotate=${options.rotate}
        gapx=${options.gapx}
        gapy=${options.gapy}
        text=${options.textContent}
        />
    >
    </quark-badge>`
    );
  });
  it("watermark element exist", async () => {
    const watermark = el.shadowRoot.querySelector(".quark-watermark");
    expect(watermark).to.exist;
  });

  it("width attribute", async () => {
    expect(el.width).to.equal(options.width);
  });

  it("height attribute", async () => {
    expect(el.height).to.equal(options.height);
  });

  it("rotate attribute", async () => {
    expect(el.rotate).to.equal(options.rotate);
  });

  it("gapx attribute", async () => {
    expect(el.gapx).to.equal(options.gapx);
  });

  it("gapy attribute", async () => {
    expect(el.gapy).to.equal(options.gapy);
  });
});
