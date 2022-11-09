import { expect, fixture } from '@open-wc/testing';
import 'quarkd/lib/tabbar';

const data = {
  fixed: false,
  inactivecolor: '#879099',
  activecolor: '#0088FF',
  value: '0'
}
let el;

describe('<quark-tabbar>', async () => {
  it('element exist', async () => {
    el = await fixture(
        `<quark-tabbar>
        </quark-tabbar>`);
    const list  = el.shadowRoot.querySelector('.tabbar');
    expect(list).to.exist;
  });

  it('fixed attribute', async () => {
    el = await fixture(
        `<quark-tabbar fixed=${data.fixed}>
        </quark-tabbar>`);
    expect(el.fixed).to.equal(data.fixed);
  });

  it('inactivecolor attribute', async () => {
    el = await fixture(
        `<quark-tabbar inactivecolor=${data.inactivecolor}>
        </quark-tabbar>`);
    expect(el.inactivecolor).to.equal(data.inactivecolor);
  });

  it('activecolor attribute', async () => {
    el = await fixture(
        `<quark-tabbar activecolor=${data.activecolor}>
        </quark-tabbar>`);
    expect(el.activecolor).to.equal(data.activecolor);
  });

  it('value attribute', async () => {
    el = await fixture(
        `<quark-tabbar value=${data.value}>
        </quark-tabbar>`);
    expect(el.value).to.equal(data.value);
  });
});
