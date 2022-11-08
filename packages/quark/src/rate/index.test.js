import { expect, fixture } from "@open-wc/testing";
import sinon from "sinon";
import "../../../lib/rate/index";
let el;
const data = {
  value: "2",
  size: "25",
  icon: "star",
  activeColor: "red",
};
// color size 无法测试
describe("quark-rate base attribute", async () => {
  before(async () => {
    el = await fixture(
      `<quark-rate
        value=${data.value}
        size=${data.size}
        icon=${data.icon}
        activeColor='${data["activeColor"]}'
      >
      </quark-rate>`
    );
  });

  it("quark-rate exist", async () => {
    const rate = el.shadowRoot.querySelector("quark-icon");
    expect(rate).to.exist;
  });

  it("quark-rate value attribute ", async () => {
    expect(el.value).to.equal(data.value);
  });

  it("quark-rate size attribute ", async () => {
    expect(el.size).to.equal(data.size);
  });

  it("quark-rate icon attribute ", async () => {
    expect(el.icon).to.equal(data.icon);
  });
});
describe("quark-rate Dom attribute", async () => {
  it("change event", async () => {
    const node = await fixture(
      `<quark-rate
      >
        </quark-rate>`
    );
    const rate = node.shadowRoot.querySelector("quark-icon");
    const eventspy = sinon.spy();
    node.addEventListener("change", eventspy);
    rate.dispatchEvent(new Event("click"));
    expect(eventspy.called).to.equal(true);
  });
});
