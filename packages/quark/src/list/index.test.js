// import { expect, fixture } from '@open-wc/testing';
// import 'quarkd/lib/list';

// const data = {
//   error: false,
//   finished: false,
//   loading: false,
//   offset: 300,
//   errortext: "错误提示",
//   loadingtext: "加载中",
//   finishedtext: "加载完成",
//   textcolor: "提示文字颜色",
// };
// let el;

// describe("<quark-list>", async () => {
//   it("element exist", async () => {
//     el = await fixture(
//       `<quark-list >
//         </quark-list>`
//     );
//     const list = el.shadowRoot.querySelector(".list");
//     expect(list).to.exist;
//   });

//   it("error attribute", async () => {
//     el = await fixture(
//       `<quark-list error=${data.error}>
//         </quark-list>`
//     );
//     expect(el.error).to.equal(data.error);
//   });

//   it("finished attribute", async () => {
//     el = await fixture(
//       `<quark-list finished=${data.finished}>
//         </quark-list>`
//     );
//     expect(el.finished).to.equal(data.finished);
//   });

//   it("loading attribute", async () => {
//     el = await fixture(
//       `<quark-list loading=${data.loading}>
//         </quark-list>`
//     );
//     expect(el.loading).to.equal(data.loading);
//   });

//   it("offset attribute", async () => {
//     el = await fixture(
//       `<quark-list offset=${data.offset}>
//         </quark-list>`
//     );
//     expect(el.offset).to.equal(data.offset);
//   });

//   it("errortext attribute", async () => {
//     el = await fixture(
//       `<quark-list errortext=${data.errortext}>
//         </quark-list>`
//     );
//     expect(el.errortext).to.equal(data.errortext);
//   });

//   it("loadingtext attribute", async () => {
//     el = await fixture(
//       `<quark-list loadingtext=${data.loadingtext}>
//         </quark-list>`
//     );
//     expect(el.loadingtext).to.equal(data.loadingtext);
//   });

//   it("finishedtext attribute", async () => {
//     el = await fixture(
//       `<quark-list finishedtext=${data.finishedtext}>
//         </quark-list>`
//     );
//     expect(el.finishedtext).to.equal(data.finishedtext);
//   });

//   it("textcolor attribute", async () => {
//     el = await fixture(
//       `<quark-list textcolor=${data.textcolor}>
//         </quark-list>`
//     );
//     expect(el.textcolor).to.equal(data.textcolor);
//   });

//   it("content slot ", async () => {
//     const contentSlot = `<span slot="content">content</span>`;
//     el = await fixture(
//       `<quark-list>
//          ${contentSlot}
//         </quark-list>`
//     );
//     const contentNode = el.shadowRoot.querySelector("slot[name='content']");
//     const slotResult = contentNode.assignedNodes()[0];
//     expect(slotResult.outerHTML).to.equal(contentSlot);
//   });

//   it("finished slot ", async () => {
//     const finishedSlot = `<span slot="finished">finished</span>`;
//     el = await fixture(
//       `<quark-list finished="true">
//          ${finishedSlot}
//         </quark-list>`
//     );
//     const finishedNode = el.shadowRoot.querySelector("slot[name='finished']");
//     const slotResult = finishedNode.assignedNodes()[0];
//     expect(slotResult.outerHTML).to.equal(finishedSlot);
//   });

//   it("error slot ", async () => {
//     const errorSlot = `<span slot="error">error</span>`;
//     el = await fixture(
//       `<quark-list error="true">
//          ${errorSlot}
//         </quark-list>`
//     );
//     const node = el.shadowRoot.querySelector("slot[name='error']");
//     const slotResult = node.assignedNodes()[0];
//     expect(slotResult.outerHTML).to.equal(errorSlot);
//   });

//   it("loading slot ", async () => {
//     const slot = `<span slot="loading">loading</span>`;
//     el = await fixture(
//       `<quark-list loading="true">
//          ${slot}
//         </quark-list>`
//     );
//     const node = el.shadowRoot.querySelector("slot[name='loading']");
//     const slotResult = node.assignedNodes()[0];
//     expect(slotResult.outerHTML).to.equal(slot);
//   });
// });
