import { expect, fixture, html } from '@open-wc/testing';
import sinon from 'sinon';
import 'quarkd/lib/tab';
const data = {
  activekey: "1",
};
let el;
describe("quark-tabs base attribute", async () => {
  before(async () => {
    el = await fixture(
    `<quark-tabs
      activekey=${data.activekey}
    >
      <quark-tab-content label="tab1">
        tab1 content
      </quark-tab-content>
      <quark-tab-content label="tab2">
        tab2 content
      </quark-tab-content>
    </quark-tabs>`);
  });
  it('tabs exist', async () => {
    const tabs = el.shadowRoot.querySelector('.quark-tab-nav');
    expect(tabs).to.exist;
  });
  it('activekey attribute', () => {
    expect(el.activekey).to.equal(data.activekey);
  });
  it('change Event', async() => {
    const node = await fixture(
      `<quark-tabs activekey=${data.activekey}>
        <quark-tab-content label="tab1">
          tab1 content
        </quark-tab-content>
        <quark-tab-content label="tab22">
          tab2 content
        </quark-tab-content>
      </quark-tabs>`
    );
    const eventspy = sinon.spy() 
    const nav = node.shadowRoot.querySelector('.quark-tab-nav');
    nav.addEventListener('click', eventspy);
    nav.dispatchEvent(new Event('click'));
    expect(eventspy.called).to.equal(true);
  });
});
