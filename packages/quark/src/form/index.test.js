import { expect, fixture } from '@open-wc/testing';
import '../../../lib/form';

let el;

describe('<quark-progress>', async () => {
  before(async () => {
    el = await fixture(
      `<quark-form
      >
      </quark-form>`);
  });

  it('quark-form exist', async () => {
    const form = el.shadowRoot.querySelector('form');
    expect(form).to.exist;
  });
  
  it('slot ', async () => {
    const slot = `<quark-field name="age"></quark-field>`
    el = await fixture(
       `<quark-form>${slot}</quark-form>`);
        const descE = el.shadowRoot.querySelector("slot");
        const slotResult = descE.assignedNodes()[0];
        expect(slotResult.outerHTML).to.equal(slot);
  });
});
