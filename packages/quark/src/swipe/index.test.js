import { expect, fixture } from "@open-wc/testing";
import sinon from "sinon";
import "../../../lib/swipe";

const data = {
  type: "round",
  duration: 500,
  interval: 3000,
  defaultindex: 1,
  autoplay: true,
  activecolor: "red",
  inactivecolor: "#999",
};
let el;

describe("<quark-swipe>", async () => {
  it("element exist", async () => {
    el = await fixture(
      `<quark-swipe 
        >
          <quark-swipe-item>
            <div class="one">1</div>
          </quark-swipe-item>
          <quark-swipe-item>
            <div class="two">2</div>
          </quark-swipe-item>
          <quark-swipe-item>
            <div class="one">3</div>
          </quark-swipe-item>
          <quark-swipe-item>
            <div class="two">4</div>
          </quark-swipe-item>
        </quark-swipe>`
    );
    const swipteItemContainer = el.shadowRoot.querySelector(".container");
    const indicatorsContainer = el.shadowRoot.querySelector(".indicators");
    expect(swipteItemContainer).to.exist;
    expect(indicatorsContainer).to.exist;
  });

  it("swipe base attribute ", async () => {
    el = await fixture(
      `<quark-swipe 
        type=${data.type}
        duration=${data.duration}
        interval=${data.interval}
        defaultindex=${data.defaultindex}
        autoplay=${data.autoplay}
        activecolor=${data.activecolor}
        inactivecolor=${data.inactivecolor}
      >
        <quark-swipe-item>
          <div class="one">1</div>
        </quark-swipe-item>
        <quark-swipe-item>
          <div class="two">2</div>
        </quark-swipe-item>
        <quark-swipe-item>
          <div class="one">3</div>
        </quark-swipe-item>
        <quark-swipe-item>
          <div class="two">4</div>
        </quark-swipe-item>
      </quark-swipe>`
    );
    expect(el.duration).to.equal(data.duration);
    expect(el.interval).to.equal(data.interval);
    expect(el.defaultindex).to.equal(data.defaultindex);
    expect(el.autoplay).to.equal(data.autoplay);
    expect(el.activecolor).to.equal(data.activecolor);
    expect(el.inactivecolor).to.equal(data.inactivecolor);
  });

  it("change event", async () => {
    el = await fixture(
      `<quark-swipe 
      >
        <quark-swipe-item>
          <div class="one">1</div>
        </quark-swipe-item>
        <quark-swipe-item>
          <div class="two">2</div>
        </quark-swipe-item>
        <quark-swipe-item>
          <div class="one">3</div>
        </quark-swipe-item>
        <quark-swipe-item>
          <div class="two">4</div>
        </quark-swipe-item>
      </quark-swipe>`
    );
    const eventspy = sinon.spy();
    el.addEventListener("change", eventspy);
    el.dispatchChanage();
    expect(eventspy.called).to.equal(true);
  });
});
