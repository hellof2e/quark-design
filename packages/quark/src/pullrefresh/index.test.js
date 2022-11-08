import { expect, fixture } from "@open-wc/testing";
import "../../../lib/pull-refresh";

const data = {
  dark: false,
  disabled: false,
  headheight: 50,
  loading: false,
  pullingtext: "下拉即可刷新",
  loosingtext: "松开立即刷新",
  loadingtext: "加载中",
  textcolor: "提示文字颜色",
};
let el;

describe("<quark-pull-refresh>", async () => {
  it("element exist", async () => {
    el = await fixture(
      `<quark-pull-refresh >
        </quark-pull-refresh>`
    );
    const pull = el.shadowRoot.querySelector(".pull-refresh");
    expect(pull).to.exist;
  });

  it("dark attribute", async () => {
    el = await fixture(
      `<quark-pull-refresh dark=${data.dark}>
        </quark-pull-refresh>`
    );
    expect(el.dark).to.equal(data.dark);
  });

  it("disabled attribute", async () => {
    el = await fixture(
      `<quark-pull-refresh disabled=${data.disabled}>
        </quark-pull-refresh>`
    );
    expect(el.disabled).to.equal(data.disabled);
  });

  it("loading attribute", async () => {
    el = await fixture(
      `<quark-pull-refresh loading=${data.loading}>
        </quark-pull-refresh>`
    );
    expect(el.loading).to.equal(data.loading);
  });

  it("headheight attribute", async () => {
    el = await fixture(
      `<quark-pull-refresh headheight=${data.headheight}>
        </quark-pull-refresh>`
    );
    expect(el.headheight).to.equal(data.headheight);
  });

  it("pullingtext attribute", async () => {
    el = await fixture(
      `<quark-pull-refresh pullingtext=${data.pullingtext}>
        </quark-pull-refresh>`
    );
    expect(el.pullingtext).to.equal(data.pullingtext);
  });

  it("loadingtext attribute", async () => {
    el = await fixture(
      `<quark-pull-refresh loadingtext=${data.loadingtext}>
        </quark-pull-refresh>`
    );
    expect(el.loadingtext).to.equal(data.loadingtext);
  });

  it("loosingtext attribute", async () => {
    el = await fixture(
      `<quark-pull-refresh loosingtext=${data.loosingtext}>
        </quark-pull-refresh>`
    );
    expect(el.loosingtext).to.equal(data.loosingtext);
  });

  it("textcolor attribute", async () => {
    el = await fixture(
      `<quark-pull-refresh textcolor=${data.textcolor}>
        </quark-pull-refresh>`
    );
    expect(el.textcolor).to.equal(data.textcolor);
  });

  it("content slot ", async () => {
    const contentSlot = `<span slot="content">content</span>`;
    el = await fixture(
      `<quark-pull-refresh>
         ${contentSlot}
        </quark-pull-refresh>`
    );
    const contentNode = el.shadowRoot.querySelector("slot[name='content']");
    const slotResult = contentNode.assignedNodes()[0];
    expect(slotResult.outerHTML).to.equal(contentSlot);
  });
});
