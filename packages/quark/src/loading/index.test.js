<<<<<<< HEAD
import { expect, fixture } from '@open-wc/testing';
import 'quarkd/lib/loading';
=======
import { expect, fixture } from "@open-wc/testing";
import "../../../lib/loading";
>>>>>>> 6531b81639467a96c76b639475a9e07f71ddf373
let el;
const data = {
  color: "red",
  size: 40,
};
describe("quark-loading", async () => {
  before(async () => {
    el = await fixture(
      `<quark-loading color=${data.color} size=${data.size}>
       
      </quark-loading>`
    );
  });
  it("quark-loading exist", async () => {
    const loading = el.shadowRoot.querySelector(".spinner-loading");
    expect(loading).to.exist;
  });

  // it(' base attribute', async () => {
  //   expect(el.color).to.equal(data.color);
  //   expect(el.size).to.equal(data.size);
  // });
});
