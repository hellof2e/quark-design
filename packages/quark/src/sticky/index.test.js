import { expect, fixture } from '@open-wc/testing';
import '../../../lib/sticky/index';
const data = {
  'offsettop': '17vw'
}
let el;
describe('<quark-sticky>', async () => {
  before(async () => {
    el = await fixture(
    `<quark-sticky offsettop=${data.offsettop}>
      <div>基础用法</div>
    </quark-badge>`);
  });

  it('sticky exist', async () => {
    const sticky = el.shadowRoot.querySelector('#container');
    expect(sticky).to.exist;
  });

  it('offsettop attribute', () => {
    expect(el.offsettop).to.equal(data.offsettop);
  });
});
