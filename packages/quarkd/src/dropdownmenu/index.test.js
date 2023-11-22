import { expect, fixture } from "@open-wc/testing";
import "quarkd/lib/dropdownmenu";
import "quarkd/lib/dropdownitem";

let dropdownMenu;

describe("<quark-dropdown-menu>", async () => {
  before(async () => {
    dropdownMenu = await fixture(`<quark-dropdown-menu></quark-dropdown-menu>`);
  });

  it("quark-dropdown-menu exist", async () => {
    const element = dropdownMenu.shadowRoot.querySelector(
      ".quark-dropdown-menu"
    );
    expect(element).to.exist;
  });
});

let dropdownItem;
describe("<quark-dropdown-item>", async () => {
  before(async () => {
    dropdownItem = await fixture(`<quark-dropdown-item></quark-dropdown-item>`);
  });

  it("quark-dropdown-item exist", async () => {
    const element = dropdownItem.shadowRoot.querySelector(
      ".quark-dropdown-item"
    );
    expect(element).to.exist;
  });
});
