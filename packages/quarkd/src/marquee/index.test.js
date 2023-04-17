import { expect, fixture } from "@open-wc/testing";
import "quarkd/lib/marquee/index";
let el;
const data = {
  title:
    "这是一段多行隐藏的新闻3月25日起，湖北境内铁路客运逐步恢复出,请大家提前购买好车票依次上车，不要坐错车",
  speed: "100",
  paused: true,
  reverse: true,
};
// color size 无法测试
describe("quark-marquee base attribute", async () => {
  before(async () => {
    el = await fixture(
      `<quark-marquee
        title=${data.title}
        speed=${data.speed}
        paused=${data.paused}
        reverse=${data.reverse}
      >
      </quark-marquee>`
    );
  });

  it("quark-marquee exist", async () => {
    const marquee = el.shadowRoot.querySelector(".quark-marquee-title");
    expect(marquee).to.exist;
  });

  it("quark-marquee title attribute ", async () => {
    expect(el.title).to.equal(data.title);
  });

  it("quark-marquee speed attribute ", async () => {
    expect(el.speed).to.equal(data.speed);
  });

  it("quark-marquee paused attribute ", async () => {
    expect(el.paused).to.equal(data.paused);
  });

  it("quark-marquee reverse attribute ", async () => {
    expect(el.reverse).to.equal(data.reverse);
  });
});
