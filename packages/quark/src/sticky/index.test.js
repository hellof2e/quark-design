<<<<<<< HEAD
import { expect, fixture } from '@open-wc/testing';
import 'quarkd/lib/sticky/index';
=======
import { expect, fixture } from "@open-wc/testing";
import "../../../lib/sticky/index";
>>>>>>> 6531b81639467a96c76b639475a9e07f71ddf373
const data = {
  offsettop: "17vw",
};
let el;
describe("<quark-sticky>", async () => {
  before(async () => {
    el = await fixture(
      `<quark-sticky offsettop=${data.offsettop}>
      <div>基础用法</div>
    </quark-badge>`
    );
  });

  it("sticky exist", async () => {
    const sticky = el.shadowRoot.querySelector("#container");
    expect(sticky).to.exist;
  });

  it("offsettop attribute", () => {
    expect(el.offsettop).to.equal(data.offsettop);
  });
});
