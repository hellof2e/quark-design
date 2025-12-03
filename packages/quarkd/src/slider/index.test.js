import { expect, fixture } from "@open-wc/testing";
import "quarkd/lib/slider";
import sinon from "sinon";

let el;

const data = {
  value: 50,
  min: 0,
  max: 100,
  step: 1,
  range: false,
  reverse: false,
  disabled: false,
  readonly: false,
  vertical: false,
  barHeight: 2,
  buttonSize: 24,
  activeColor: "#1989fa",
  inactiveColor: "#e5e5e5",
};

describe("quark-slider base attribute", async () => {
  before(async () => {
    el = await fixture(
      `<quark-slider
         value=${data.value}
         min=${data.min}
         max=${data.max}
         step=${data.step}
         barheight=${data.barHeight}
         buttonsize=${data.buttonSize}
         activecolor="${data.activeColor}"
         inactivecolor="${data.inactiveColor}"
      >
      </quark-slider>`
    );
  });

  it("quark-slider min attribute", async () => {
    expect(el.min).to.equal(data.min);
  });

  it("quark-slider max attribute", async () => {
    expect(el.max).to.equal(data.max);
  });

  it("quark-slider step attribute", async () => {
    expect(el.step).to.equal(data.step);
  });

  it("quark-slider barHeight attribute", async () => {
    expect(el.barHeight).to.equal(data.barHeight);
  });

  it("quark-slider buttonSize attribute", async () => {
    expect(el.buttonSize).to.equal(data.buttonSize);
  });

  it("quark-slider activeColor attribute", async () => {
    expect(el.activeColor).to.equal(data.activeColor);
  });

  it("quark-slider inactiveColor attribute", async () => {
    expect(el.inactiveColor).to.equal(data.inactiveColor);
  });
});

describe("quark-slider boolean attributes", async () => {
  it("quark-slider disabled attribute", async () => {
    const node = await fixture(`<quark-slider disabled />`);
    expect(node.disabled).to.equal(true);
  });

  it("quark-slider readonly attribute", async () => {
    const node = await fixture(`<quark-slider readonly />`);
    expect(node.readonly).to.equal(true);
  });

  it("quark-slider vertical attribute", async () => {
    const node = await fixture(`<quark-slider vertical />`);
    expect(node.vertical).to.equal(true);
  });

  it("quark-slider range attribute", async () => {
    const node = await fixture(`<quark-slider range />`);
    expect(node.range).to.equal(true);
  });

  it("quark-slider reverse attribute", async () => {
    const node = await fixture(`<quark-slider reverse />`);
    expect(node.reverse).to.equal(true);
  });
});

describe("quark-slider methods", async () => {
  it("quark-slider setValue and getValue", async () => {
    const node = await fixture(`<quark-slider />`);
    node.setValue(75);
    expect(node.getValue()).to.equal(75);
  });

  it("quark-slider setValue with range mode", async () => {
    const node = await fixture(`<quark-slider range />`);
    node.setValue([20, 80]);
    const value = node.getValue();
    expect(Array.isArray(value)).to.equal(true);
    expect(value[0]).to.equal(20);
    expect(value[1]).to.equal(80);
  });

  it("quark-slider setValue respects min and max", async () => {
    const node = await fixture(`<quark-slider min="10" max="90" />`);
    node.setValue(5);
    expect(node.getValue()).to.equal(10); // Should be clamped to min

    node.setValue(100);
    expect(node.getValue()).to.equal(90); // Should be clamped to max
  });

  it("quark-slider setValue respects step", async () => {
    const node = await fixture(`<quark-slider step="10" />`);
    node.setValue(23);
    expect(node.getValue()).to.equal(20); // Should be rounded to nearest step
  });
});

describe("quark-slider DOM structure", async () => {
  it("quark-slider has correct class when disabled", async () => {
    const node = await fixture(`<quark-slider disabled />`);
    const slider = node.shadowRoot.querySelector(".quark-slider");
    expect(slider.classList.contains("quark-slider-disabled")).to.equal(true);
  });

  it("quark-slider has correct class when vertical", async () => {
    const node = await fixture(`<quark-slider vertical />`);
    const slider = node.shadowRoot.querySelector(".quark-slider");
    expect(slider.classList.contains("quark-slider-vertical")).to.equal(true);
  });

  it("quark-slider has one button wrapper in normal mode", async () => {
    const node = await fixture(`<quark-slider />`);
    const buttons = node.shadowRoot.querySelectorAll(
      ".quark-slider-button-wrapper"
    );
    expect(buttons.length).to.equal(1);
  });

  it("quark-slider has two button wrappers in range mode", async () => {
    const node = await fixture(`<quark-slider range />`);
    const buttons = node.shadowRoot.querySelectorAll(
      ".quark-slider-button-wrapper"
    );
    expect(buttons.length).to.equal(2);
  });

  it("quark-slider has bar element", async () => {
    const node = await fixture(`<quark-slider />`);
    const bar = node.shadowRoot.querySelector(".quark-slider-bar");
    expect(bar).to.not.equal(null);
  });
});

describe("quark-slider events", async () => {
  it("quark-slider change event is not triggered when disabled", async () => {
    const node = await fixture(`<quark-slider disabled />`);
    const slider = node.shadowRoot.querySelector(".quark-slider");
    const eventspy = sinon.spy();
    node.addEventListener("change", eventspy);
    slider.dispatchEvent(new Event("click"));
    expect(eventspy.called).to.equal(false);
  });

  it("quark-slider change event is not triggered when readonly", async () => {
    const node = await fixture(`<quark-slider readonly />`);
    const slider = node.shadowRoot.querySelector(".quark-slider");
    const eventspy = sinon.spy();
    node.addEventListener("change", eventspy);
    slider.dispatchEvent(new Event("click"));
    expect(eventspy.called).to.equal(false);
  });
});

describe("quark-slider value parsing", async () => {
  it("quark-slider parses number value", async () => {
    const node = await fixture(`<quark-slider value="50" />`);
    expect(node.getValue()).to.equal(50);
  });

  it("quark-slider parses array value in range mode", async () => {
    const node = await fixture(`<quark-slider value="[20, 60]" range />`);
    const value = node.getValue();
    expect(Array.isArray(value)).to.equal(true);
    expect(value[0]).to.equal(20);
    expect(value[1]).to.equal(60);
  });
});

describe("quark-slider custom style", async () => {
  it("quark-slider applies custom activeColor", async () => {
    const node = await fixture(
      `<quark-slider activecolor="#ee0a24" value="50" />`
    );
    expect(node.activeColor).to.equal("#ee0a24");
  });

  it("quark-slider applies custom inactiveColor", async () => {
    const node = await fixture(
      `<quark-slider inactivecolor="#ddd" value="50" />`
    );
    expect(node.inactiveColor).to.equal("#ddd");
  });
});
