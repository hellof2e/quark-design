<<<<<<< HEAD
import { expect, fixture } from '@open-wc/testing';
import 'quarkd/lib/icon';
=======
import { expect, fixture } from "@open-wc/testing";
import "../../../lib/icon";
>>>>>>> 6531b81639467a96c76b639475a9e07f71ddf373

const data = {
  name: "user",
  size: "26",
  color: "#666",
};
let el;

describe("<quark-icon>", async () => {
  it("icon exist", async () => {
    el = await fixture(
      `<quark-icon 
            name=${data.name}
        >
        </quark-icon>`
    );
    const icon = el.shadowRoot.querySelector(".icon");
    expect(icon).to.exist;
  });

  it("size attribute", async () => {
    el = await fixture(
      `<quark-icon size=${data.size}>
        </quark-icon>`
    );
    expect(el.size).to.equal(data.size);
  });

  it("color attribute", async () => {
    el = await fixture(
      `<quark-icon color=${data.color}>
        </quark-icon>`
    );
    expect(el.color).to.equal(data.color);
  });
});
