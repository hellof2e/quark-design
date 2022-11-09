<<<<<<< HEAD
import { expect, fixture } from '@open-wc/testing';
import 'quarkd/lib/steps';
=======
import { expect, fixture } from "@open-wc/testing";
import "../../../lib/steps";
>>>>>>> 6531b81639467a96c76b639475a9e07f71ddf373
// slot 内容无法被探测，因此只能测试 quark-steps
const data = {
  direction: "vertical",
};
let el;

describe("<quark-step>", async () => {
  // it('element exist', async () => {
  //     el = await fixture(
  //         `<quark-steps>
  //             <quark-step status="done" title="步骤一">1</quark-step>
  //             <quark-step status="doing" title="步骤二">2</quark-step>
  //             <quark-step status="todo" title="步骤三">3</quark-step>
  //         </quark-steps>`);
  //     const step = el.shadowRoot.querySelector('.quark-steps-horizontal');
  //     expect(step).to.exist;
  // });
  // it('direction attribute', async () => {
  //     el = await fixture(
  //         `<quark-steps direction=${data.direction}>
  //             <quark-step status="done" title="步骤一">1</quark-step>
  //             <quark-step status="doing" title="步骤二">2</quark-step>
  //             <quark-step status="todo" title="步骤三">3</quark-step>
  //         </quark-steps>`);
  //     const step = el.shadowRoot.querySelector('.quark-steps');
  //     expect(step).to.exist;
  //     expect(el.direction).to.equal(data.direction);
  // });
});
