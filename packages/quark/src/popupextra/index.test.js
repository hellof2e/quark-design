// import { expect, fixture } from '@open-wc/testing';
// import sinon from 'sinon';
// import 'quarkd/lib/popupextra';

// const data = {
//   title: "主标题",
//   subtitle: "副标题",
//   round: true,
//   open: true,
// };
// let el;

// describe("<quark-popupextra>", async () => {
//   it("round attribute", async () => {
//     el = await fixture(
//       `<quark-popupextra 
//             round=${data.round}
//           >
//           </quark-popupextra>`
//     );
//     expect(el.round).to.exist;
//   });

//   it("open attribute", async () => {
//     el = await fixture(
//       `<quark-popupextra 
//             open=${data.open}
//           >
//           </quark-popupextra>`
//     );
//     expect(el.open).to.exist;
//   });

//   it("title attribute", async () => {
//     el = await fixture(
//       `<quark-popupextra 
//             title=${data.title}
//           >
//           </quark-popupextra>`
//     );
//     expect(el.closeable).to.exist;
//   });

//   it("subtitle attribute", async () => {
//     el = await fixture(
//       `<quark-popupextra 
//             subtitle=${data.subtitle}
//           >
//           </quark-popupextra>`
//     );
//     expect(el.closeable).to.exist;
//   });

//   it("onClose event", async () => {
//     el = await fixture(
//       `<quark-popupextra>
//           </quark-popupextra>`
//     );
//     const eventspy = sinon.spy();
//     el.addEventListener("closed", eventspy);
//     const maskRef = el.shadowRoot.getElementById("mask");
//     maskRef.dispatchEvent(new Event("click"));
//     expect(eventspy.called).to.equal(true);
//   });

//   it("slot", async () => {
//     const slot = `<span>我是正文</span>`;
//     el = await fixture(`<quark-popupextra>${slot}</quark-popupextra>`);
//     const descE = el.shadowRoot.querySelector("slot");
//     const slotResult = descE.assignedNodes()[0];
//     expect(slotResult.outerHTML).to.equal(slot);
//   });
// });
