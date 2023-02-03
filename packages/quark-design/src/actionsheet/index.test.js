import { expect, fixture } from "@open-wc/testing";
import sinon from "sinon";
import ActionSheet from "quarkd/lib/actionsheet";

const data = {
  title: "我是标题信息",
  titleColor: "red",
  titleFontSize: 20,
  actions: [{ name: "选项一" }, { name: "选项二" }, { name: "选项三" }],
  cancelText: "取消",
  cancelTextColor: "red",
  cancelTextFontSize: 20,
};

describe("<quark-actionsheet>", async () => {
  it("actionsheet attribute", async () => {
    const actionSheet = ActionSheet({
      title: data.title,
      titleColor: data.titleColor,
      titleFontSize: data.titleFontSize,
      actions: data.actions,
      cancelText: data.cancelText,
      cancelTextColor: data.cancelTextColor,
      cancelTextFontSize: data.cancelTextFontSize,
    });
    expect(actionSheet.titl).to.equal(data.title);
    expect(actionSheet.titleColor).to.equal(data.titleColor);
    expect(actionSheet.titleFontSize).to.equal(data.titleFontSize);
    expect(actionSheet.actions).to.equal(data.actions);
    expect(actionSheet.cancelText).to.equal(data.cancelText);
    expect(actionSheet.cancelTextColor).to.equal(data.cancelTextColor);
    expect(actionSheet.cancelTextFontSize).to.equal(data.cancelTextFontSize);
  });

  it("event dispatch", async () => {
    const selecEvent = sinon.spy();
    const cancelEvent = sinon.spy();
    const closeEvent = sinon.spy();
    const actionSheet = ActionSheet({
      actions: data.actions,
      select: selecEvent,
      cancel: cancelEvent,
      close: closeEvent,
    });
    actionSheet.select();
    expect(selecEvent.called).to.equal(true);
    actionSheet.cancel();
    expect(cancelEvent.called).to.equal(true);
    actionSheet.close();
    expect(closeEvent.called).to.equal(true);
  });
});
