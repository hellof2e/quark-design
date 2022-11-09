<<<<<<< HEAD
import { expect, fixture } from '@open-wc/testing';
import 'quarkd/lib/datetimepicker';
=======
import { expect, fixture } from "@open-wc/testing";
import "../../../lib/datetime-picker";
>>>>>>> 6531b81639467a96c76b639475a9e07f71ddf373

const data = {
  title: "请选择时间",
  open: true,
  bottomhidden: true,
};
let el;

describe("<quark-datetime-picker>", async () => {
  it("element exist", async () => {
    el = await fixture(
      `<quark-datetime-picker
          title=${data.title}
          open=${data.open}
        >
        </quark-datetime-picker>`
    );
    const container = el.shadowRoot.querySelector(".picker-container");
    const header = el.shadowRoot.querySelector(".picker-header");
    const headerTitle = el.shadowRoot.querySelector(".header-title");
    const content = el.shadowRoot.querySelector(".picker-content");
    const bottom = el.shadowRoot.querySelector(".picker-bottom");
    expect(container).to.exist;
    expect(header).to.exist;
    expect(headerTitle).to.exist;
    expect(content).to.exist;
    expect(bottom).to.exist;
  });
});
