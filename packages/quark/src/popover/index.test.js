import { expect, fixture } from '@open-wc/testing';
import 'quarkd/lib/tooltip';

const data = {
  slotText: "tips 宿主",
  tips: "内容",
  placement: "top",
  color: "red",
};
let el;

describe("<quark-tooltip>", async () => {
  before(async () => {
    el = await fixture(
      `<quark-tooltip 
      tips=${data.tips}
      placement=${data.placement}
      color=${data.color}
    >
      ${data.slotText}
    </quark-tooltip>`
    );
  });

  it("tips attribute", async () => {
    el = await fixture(
      `<quark-tooltip tips=${data.tips}>
        </quark-tooltip>`
    );
    expect(el.tips).to.exist;
  });

  it("placement attribute", async () => {
    el = await fixture(
      `<quark-tooltip placement=${data.placement}>
        </quark-tooltip>`
    );
    expect(el.placement).to.equal(data.placement);
  });
});
