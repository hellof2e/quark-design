import { expect } from "@open-wc/testing";
import Toast from "../../../lib/toast/index";
const data = {
  text: "你好",
};
describe("<quark-toast>", async () => {
  it("quark-toast type text", async () => {
    const toast = Toast.text(data.text);
    expect(toast.content).equal(data.text);
  });

  it("quark-toast type success", async () => {
    const toast = Toast.success(data.text);
    expect(toast.content).equal(data.text);
  });

  it("quark-toast type error", async () => {
    const toast = Toast.error(data.text);
    expect(toast.content).equal(data.text);
  });

  it("quark-toast type warning", async () => {
    const toast = Toast.warning(data.text);
    expect(toast.content).equal(data.text);
  });

  it("quark-toast type loading", async () => {
    const toast = Toast.loading(data.text);
    const loading = toast.shadowRoot.querySelector("quark-loading");
    expect(loading).to.be.exist;
  });
});
