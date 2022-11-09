import { expect, fixture } from '@open-wc/testing';
import 'quarkd/lib/loading';
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
    const loading = el.shadowRoot.querySelector(".quark-loading-spinner");
    expect(loading).to.exist;
  });

  // it(' base attribute', async () => {
  //   expect(el.color).to.equal(data.color);
  //   expect(el.size).to.equal(data.size);
  // });
});
