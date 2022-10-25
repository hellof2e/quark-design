import { expect, fixture } from '@open-wc/testing';
import '../../../lib/skeleton';

let el;

describe('<quark-skeleton>', async () => {
  it('element exist', async () => {
    el = await fixture(
      `<quark-skeleton
      ></quark-skeleton>`
    );
    const container = el.shadowRoot.querySelector('skeleton-container');
    expect(container).to.exist;
  });
});
