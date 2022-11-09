import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import 'quarkd/lib/checkbox';
const data = {
  disabled: 'true',
  shape: 'square',
  size : 'big',
  checked: true,
}
let el;
describe('quark-checkbox', async () => {
  before(async () => {
    el = await fixture(
    `<quark-checkbox 
      disabled=${data.disabled} 
      shape=${data.shape} 
      size=${data.size}
      checked=${data.checked}
    >
    </quark-checkbox>`);
  });

  it('checkbox exist', async () => {
    const badge = el.shadowRoot.querySelector('.quark-checkbox-wrapper');
    expect(badge).to.exist;
  });

  it('disabled attribute', () => {
    expect(el.type).to.equal(data.type);
  });

  it('shape attribute', () => {
    expect(el.content).to.equal(data.content);
  });

  it('size attribute', () => {
    expect(el.size).to.equal(data.size);
  });

  it('checked attribute', () => {
    expect(el.checked).to.equal(data.checked);
  });

  it('click Event', async() => {
    const node = await fixture(
      `<quark-checkbox :checked="false">方形</quark-checkbox>`
    );
    const eventspy = sinon.spy();
    node.addEventListener('change', eventspy);
    const checkbox = node.shadowRoot.querySelector('.quark-checkbox-wrapper');
    checkbox.dispatchEvent(new Event('click'));
    expect(eventspy.called).to.equal(true); 
  });
});
