<<<<<<< HEAD
import { expect, fixture } from '@open-wc/testing';
import sinon from 'sinon';
import 'quarkd/lib/switch';
=======
import { expect, fixture } from "@open-wc/testing";
import sinon from "sinon";
import "../../../lib/switch";
>>>>>>> 6531b81639467a96c76b639475a9e07f71ddf373

let el;
// color size 无法测试
describe("quark-switch base attribute", async () => {
  before(async () => {
    el = await fixture(
      `<quark-switch
         checked
         disabled
      >
      </quark-switch>`
    );
  });

  it("quark-switch exist", async () => {
    const switchNode = el.shadowRoot.querySelector("#switch");
    expect(switchNode).to.exist;
  });

  it("quark-switch checked attribute", async () => {
    expect(el.checked).to.equal(true);
  });

  it("quark-switch disabled attribute", async () => {
    expect(el.disabled).to.equal(true);
  });

  it("change event", async () => {
    const eventspy = sinon.spy();
    el.addEventListener("change", eventspy);
    const switchNode = el.shadowRoot.querySelector("#switch");
    if (!switchNode) return;
    switchNode.dispatchEvent(new Event("change"));
    expect(eventspy.called).to.equal(false);
  });
});
