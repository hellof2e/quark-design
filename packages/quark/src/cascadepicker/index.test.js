import { expect, fixture } from '@open-wc/testing';
import '../../../lib/cascade-picker';

const data = {
  title: '请选择时间',
  open: true,
  bottomhidden : true,
}
let el;

describe('<quark-cascade-picker>', async () => {

    it('element exist', async () => {
      el = await fixture(
        `<quark-cascade-picker 
        title=${data.title}
        open=${data.open}
        >
        </quark-cascade-picker>`);
      const container = el.shadowRoot.querySelector('.picker-container');
      const header = el.shadowRoot.querySelector('.picker-header');
      const headerTitle = el.shadowRoot.querySelector('.header-title');
      const content = el.shadowRoot.querySelector('.picker-content');
      const bottom = el.shadowRoot.querySelector('.picker-bottom');
      expect(container).to.exist;
      expect(header).to.exist;
      expect(headerTitle).to.exist;
      expect(content).to.exist;
      expect(bottom).to.exist;
  });

  it('header slot', async () => {
    const slot = `<div slot="header">
    <span class="cancel">取消</span>
    <span class="picker-title">请选择城市</span>
    <span class="ensure">确定</span>
  </div>`
    el = await fixture(
       `<quark-cascade-picker>${slot}</quark-cascade-picker>`);
        const descE = el.shadowRoot.querySelector("slot[name='header']");
        const slotResult = descE.assignedNodes()[0];
        expect(slotResult.outerHTML).to.equal(slot);
  });
});
