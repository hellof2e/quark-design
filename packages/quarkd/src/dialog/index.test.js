import { expect, fixture } from "@open-wc/testing";
import sinon from "sinon";
import "quarkd/lib/dialog/index";
const data = {
  title: "我是标题",
  oktext: "确定",
  canceltext: "取消",
  content: "弹窗的内容",
};
let el;
describe("quark-dialog base attribute", async () => {
  before(async () => {
    el = await fixture(
      `<quark-dialog
        title=${data["title"]}
        oktext=${data["oktext"]}
        canceltext=${data["canceltext"]}
        content=${data["content"]}
        
    >
    </quark-dialog>`
    );
  });
  it("quark-dialog exist", async () => {
    const dialog = el.shadowRoot.querySelector(".quark-dialog");
    expect(dialog).to.exist;
  });

  it("title attribute", () => {
    expect(el.title).to.equal(data["title"]);
  });

  it("content attribute", () => {
    expect(el.content).to.equal(data["content"]);
  });

  it("oktext attribute", () => {
    expect(el["oktext"]).to.equal(data["oktext"]);
  });

  it("canceltext attribute", () => {
    expect(el["canceltext"]).to.equal(data["canceltext"]);
  });

  it("close slot ", async () => {
    const closeSlot = `<span slot="close">关闭</span>`;
    el = await fixture(`<quark-dialog>${closeSlot}</quark-dialog>`);
    const closeNode = el.shadowRoot.querySelector("slot[name='close']");
    const slotResult = closeNode.assignedNodes()[0];
    expect(slotResult.outerHTML).to.equal(closeSlot);
  });

  it("footer slot ", async () => {
    const footerSlot = `<span slot="footer">窗脚</span>`;
    el = await fixture(`<quark-dialog>${footerSlot}</quark-dialog>`);
    const footerNode = el.shadowRoot.querySelector("slot[name='footer']");
    const slotResult = footerNode.assignedNodes()[0];
    expect(slotResult.outerHTML).to.equal(footerSlot);
  });
});

describe("quark-dialog Dom attribute", async () => {
  it("cancelBtn event", async () => {
    const node = await fixture(
      `<quark-dialog
      >
        </quark-dialog>`
    );
    const cancelBtn = node.shadowRoot.querySelector(".quark-dialog-cancel-btn");
    const eventspy = sinon.spy();
    node.addEventListener("cancel", eventspy);
    cancelBtn.dispatchEvent(new Event("click"));
    expect(eventspy.called).to.equal(true);
  });

  it("okBtn event", async () => {
    const node = await fixture(
      `<quark-dialog
      >
        </quark-dialog>`
    );
    const okBtn = node.shadowRoot.querySelector(".quark-dialog-confirm-btn");
    const eventspy = sinon.spy();
    node.addEventListener("confirm", eventspy);
    okBtn.dispatchEvent(new Event("click"));
    expect(eventspy.called).to.equal(true);
  });
});
