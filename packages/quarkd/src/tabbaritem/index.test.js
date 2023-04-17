import { expect, fixture } from "@open-wc/testing";
import "quarkd/lib/tabbaritem";

const data = {
  label: "home",
  icon: "home",
  iconsize: "20",
  name: "home",
  badgecontent: "20",
};
let el;

describe("<quark-tabbar-item>", async () => {
  it("element exist", async () => {
    el = await fixture(
      `<quark-tabbar-item>
        </quark-tabbar-item>`
    );
    const item = el.shadowRoot.querySelector(".quark-tabbar-item");
    expect(item).to.exist;
  });

  it("icon attribute", async () => {
    el = await fixture(
      `<quark-tabbar-item icon=${data.icon}>
        </quark-tabbar-item>`
    );
    expect(el.icon).to.equal(data.icon);
  });

  it("iconsize attribute", async () => {
    el = await fixture(
      `<quark-tabbar-item iconsize=${data.iconsize}>
        </quark-tabbar-item>`
    );
    expect(el.iconsize).to.equal(data.iconsize);
  });

  it("name attribute", async () => {
    el = await fixture(
      `<quark-tabbar-item name=${data.name}>
        </quark-tabbar-item>`
    );
    expect(el.name).to.equal(data.name);
  });

  it("badgecontent attribute", async () => {
    el = await fixture(
      `<quark-tabbar-item badgecontent=${data.badgecontent}>
        </quark-tabbar-item>`
    );
    expect(el.badgecontent).to.equal(data.badgecontent);
  });

  it("icon slot ", async () => {
    const slot = `<span slot="icon">icon</span>`;
    el = await fixture(
      `<quark-tabbar-item>
         ${slot}
        </quark-tabbar-item>`
    );
    const node = el.shadowRoot.querySelector("slot[name='icon']");
    const slotResult = node.assignedNodes()[0];
    expect(slotResult.outerHTML).to.equal(slot);
  });
});
