
import { expect, fixture } from '@open-wc/testing';
import 'quarkd/lib/button';

const data = {
  slotText: '主要按钮',
  disabled : false,
  type : 'primary',
  icon : 'user',
  loading: true,
  shape: 'round',
}
let el;

describe('<quark-button>', async () => {

    it('icon exist', async () => {
    el = await fixture(
        `<quark-button 
          icon=${data.user}
        >
          ${data.slotText}
        </quark-button>`);
    const icon = el.shadowRoot.querySelector('.icon');
    expect(icon).to.exist;
  });


  it('disabled attribute', async () => {
    el = await fixture(
        `<quark-button disabled=${data.disabled}>
          ${data.slotText}
        </quark-button>`);
    expect(el.disabled).to.equal(data.disabled);
  });

  it('type attribute', async () => {
    el = await fixture(
        `<quark-button type=${data.type}>
          ${data.slotText}
        </quark-button>`);
    expect(el.type).to.equal(data.type);
  });

  it('loading attribute', async () => {
    el = await fixture(
        `<quark-button loading=${data.loading}>
          ${data.slotText}
        </quark-button>`);
    expect(el.loading).to.equal(data.loading);
  });

  it('shape attribute', async () => {
    el = await fixture(
        `<quark-button shape=${data.shape}>
          ${data.slotText}
        </quark-button>`);
    expect(el.shape).to.equal(data.shape);
  });

  it('slot attribute', async () => {
    el = await fixture(
      `<quark-button shape=${data.shape}>${data.slotText}</quark-button>`);
    const slot = el.textContent;
    expect(data.slotText).to.equal(slot);
  });
});
