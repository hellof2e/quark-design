<<<<<<< HEAD
import { expect, fixture } from '@open-wc/testing';
import 'quarkd/lib/skeleton';
=======
import { expect, fixture } from "@open-wc/testing";
import "../../../lib/skeleton";
>>>>>>> 6531b81639467a96c76b639475a9e07f71ddf373

let el;

describe("<quark-skeleton>", async () => {
  it("element exist", async () => {
    el = await fixture(
      `<quark-skeleton
      ></quark-skeleton>`
    );
    const container = el.shadowRoot.querySelector("skeleton-container");
    expect(container).to.exist;
  });
});
