import { expect, fixture } from '@open-wc/testing';
import sinon from 'sinon';
import 'quarkd/lib/radio';
const data = {
  disabled: true,
  shape: "square",
  size: "big",
};
let el;
describe("quark-radio base attribute", async () => {
  before(async () => {
    el = await fixture(
      `<quark-radio 
      disabled=${data.disabled} 
      shape=${data.shape} 
      size=${data.size}
    >
    </quark-radio>`
    );
  });

  it("radio exist", async () => {
    const radio = el.shadowRoot.querySelector(".quark-radio");
    expect(radio).to.exist;
  });

  it("disabled attribute", () => {
    expect(el.disabled).to.equal(data.disabled);
  });

  it("shape attribute", () => {
    expect(el.shape).to.equal(data.shape);
  });

  it("size attribute", () => {
    expect(el.size).to.equal(data.size);
  });

  it("click Event", async () => {
    const node = await fixture(
      `<quark-radio :checked="false">
      </quark-radio>`
    );
    const eventspy = sinon.spy();
    node.addEventListener("change", eventspy);
    const radio = node.shadowRoot.querySelector(".quark-radio");
    radio.dispatchEvent(new Event("click"));
    expect(eventspy.called).to.equal(true);
  });
});
