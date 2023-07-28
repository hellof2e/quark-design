import { expect, fixture } from "@open-wc/testing";
import "quarkd/lib/button";
import sinon from "sinon";

const data = {
  slotText: "主要按钮",
  disabled: false,
  type: "primary",
  icon: "https://m.hellobike.com/resource/helloyun/16682/Agnve_tel%20(1).png",
  loading: true,
  shape: "round",
};
let el;

describe("<quark-button>", async () => {
  it("icon exist", async () => {
    el = await fixture(
      `<quark-button 
          icon=${data.icon}
        >
          ${data.slotText}
        </quark-button>`
    );
    const icon = el.shadowRoot.querySelector(".quark-button-icon");
    expect(icon).to.exist;
  });

  it("disabled attribute", async () => {
    el = await fixture(
      `<quark-button disabled=${data.disabled}>
          ${data.slotText}
        </quark-button>`
    );
    expect(el.disabled).to.equal(data.disabled);
  });

  it("type attribute", async () => {
    el = await fixture(
      `<quark-button type=${data.type}>
          ${data.slotText}
        </quark-button>`
    );
    expect(el.type).to.equal(data.type);
  });

  it("loading attribute", async () => {
    el = await fixture(
      `<quark-button loading=${data.loading}>
          ${data.slotText}
        </quark-button>`
    );
    expect(el.loading).to.equal(data.loading);
  });

  it("shape attribute", async () => {
    el = await fixture(
      `<quark-button shape=${data.shape}>
          ${data.slotText}
        </quark-button>`
    );
    expect(el.shape).to.equal(data.shape);
  });

  it("slot attribute", async () => {
    el = await fixture(
      `<quark-button shape=${data.shape}>${data.slotText}</quark-button>`
    );
    const slot = el.textContent;
    expect(data.slotText).to.equal(slot);
  });

  it("plain attribute", async () => {
    el = await fixture(`<quark-button>${data.slotText}</quark-button>`);
    expect(el.plain).to.equal(false);
  });

  it("loading attribute default type", async () => {
    el = await fixture(`<quark-button loading>${data.slotText}</quark-button>`);
    const loading = el.shadowRoot.querySelector(".quark-button-load");
    expect(loading.color).to.equal("#fff");
    expect(loading.type).to.equal("spinner");
    expect(loading.size).to.equal("20");
  });

  it("loading attribute customize type", async () => {
    el = await fixture(
      `<quark-button loading loadtype="circular" loadingcolor="red" loadingsize="30">${data.slotText}</quark-button>`
    );
    const loading = el.shadowRoot.querySelector(".quark-button-load");
    expect(loading.color).to.equal("red");
    expect(loading.type).to.equal("circular");
    expect(loading.size).to.equal("30");
  });

  it("should change loading state instantly by default", async () => {
    el = await fixture(
      `<quark-button loading="false" id="btn">${data.slotText}</quark-button>`
    );
    el.addEventListener("click", function handleClick() {
      el.loading = true;
    });
    el.dispatchEvent(new Event("click"));
    expect(el.loading).to.equal(true);
  });

  it("should not clickable when button is loading", async () => {
    const eventspy = sinon.spy();
    el = await fixture(
      `<quark-button loading="true">${data.slotText}</quark-button>`
    );
    el.dispatchEvent(new Event("click"));
    expect(eventspy.called).to.equal(false);
  });
});
