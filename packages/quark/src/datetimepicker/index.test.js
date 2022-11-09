// import { expect, fixture } from '@open-wc/testing';
// import 'quarkd/lib/datetimepicker';

// const data = {
//   title: "请选择时间",
//   open: true,
//   bottomhidden: true,
//   showtoolbar: true
// };
// let el;

// describe("<quark-datetime-picker>", async () => {
//   it("element exist", async () => {
//     el = await fixture(
//       `<quark-datetime-picker
//           title=${data.title}
//           open=${data.open}
//           showtoolbar=${data.showtoolbar}
//         >
//         </quark-datetime-picker>`
//     );
//     const container = el.shadowRoot.querySelector(".picker-container");
//     const header = el.shadowRoot.querySelector(".quark-date-picker-header");
//     const headerTitle = el.shadowRoot.querySelector(".header-title");
//     const content = el.shadowRoot.querySelector(".picker-content");
//     const bottom = el.shadowRoot.querySelector(".picker-bottom");
//     expect(container).to.exist;
//     expect(header).to.null;
//     expect(headerTitle).to.exist;
//     expect(content).to.exist;
//     expect(bottom).to.exist;
//   });
// });
