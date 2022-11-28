import { expect, fixture } from '@open-wc/testing';
import sinon from 'sinon';
import 'quarkd/lib/popupextra';

const data = {
  title: "主标题",
  subtitle: "副标题",
  round: false,
  open: true,
};
let el;

describe("<quark-popupextra>", async () => {
//   it("round attribute", async () => {
//     el = await fixture(
//       `<quark-popupextra 
//             round=${data.round}
//           >
//           </quark-popupextra>`
//     );
//     expect(el.round).to.equal(false);
//   });

  it("open attribute", async () => {
    el = await fixture(
      `<quark-popupextra 
            open=${data.open}
          >
          </quark-popupextra>`
    );
    expect(el.open).to.equal(data.open);
  });

  it("title attribute", async () => {
    el = await fixture(
      `<quark-popupextra 
            title=${data.title}
          >
          </quark-popupextra>`
    );
    expect(el.title).to.equal(data.title);
  });

  it("subtitle attribute", async () => {
    el = await fixture(
      `<quark-popupextra 
            subtitle=${data.subtitle}
          >
          </quark-popupextra>`
    );
    expect(el.subtitle).to.equal(data.subtitle);
  });

  it("onClose event", async () => {
    el = await fixture(
      `<quark-popupextra>
          </quark-popupextra>`
    );
    const eventspy = sinon.spy();
    el.addEventListener("closed", eventspy);
    const maskRef = el.shadowRoot.querySelector(".quark-popup-extra-mask");
    maskRef.dispatchEvent(new Event("click"));
    expect(eventspy.called).to.equal(true);
  });

  it("slot", async () => {
    const slot = `<div slot="title"> <span>我是正文</span> </div>`;
    el = await fixture(`<quark-popupextra>${slot}</quark-popupextra>`);
    const descE = el.shadowRoot.querySelector("slot");
    const slotResult = descE.assignedNodes()[0];
    expect(slotResult.outerHTML).to.equal(slot);
  });
});
