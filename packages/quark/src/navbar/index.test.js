import { expect, fixture } from '@open-wc/testing';
import sinon from 'sinon';
import '../../../lib/navbar/index';
const data = {
  'lefthide': true,
  'right': 'right',
  title: '测试'
};
let el;
describe('quark-navbar base attribute', async () => {
  before(async () => {
    el = await fixture(
      `<quark-navbar
        lefthide=${data['lefthide']}
        right=${data['right']}
        title=${data.title}
    >
    </quark-navbar>`
    );
  });
  it('quark-navbar exist', async () => {
    const navbar = el.shadowRoot.querySelector('.title');
    expect(navbar).to.exist;
  });

  it('lefthide attribute', () => {
    expect(el.lefthide).to.exist;
  });

  it('right attribute', () => {
    expect(el.right).to.equal(data['right']);
  });

  it('title attribute', () => {
    expect(el['title']).to.equal(data['title']);
  });
});

describe('quark-navbar Dom attribute', async () => {

  it('lefthide attribute hide', async () => {
    const node = await fixture(
      `<quark-navbar
         lefthide=${true}
      >
        </quark-navbar>`
    );
    const leftWrap = node.shadowRoot.querySelector('.navbar-left');
    expect(leftWrap).to.equal(null)
  });

  it('rightBtn attribute show', async() => {
    const node = await fixture(
      `<quark-navbar
         right=${data['right']}
      >
        </quark-navbar>`
    );
    const rightBtn = node.shadowRoot.querySelector('#right');
    expect(rightBtn).to.exist;
  });

  it('rightBtn attribute hide', async() => {
    const node = await fixture(
      `<quark-navbar
      >
        </quark-navbar>`
    );
    const rightBtn = node.shadowRoot.querySelector('#right');
    const { innerHTML } = rightBtn
    expect(innerHTML).to.equal('');
  });

  it('left-btn Event', async() => {
    const node = await fixture(
      `<quark-navbar
      >
      </quark-navbar>`
    );
    const eventspy = sinon.spy()  
    node.addEventListener('leftclick', eventspy);
    const leftBtn = node.shadowRoot.getElementById('left');
    leftBtn.dispatchEvent(new Event('click'));
    expect(eventspy.called).to.equal(true); 
  });

  it('right-btn Event', async() => {
    const node = await fixture(
      `<quark-navbar
        right=${data['right']}
      >
      </quark-navbar>`
    );
    const eventspy = sinon.spy()  
    node.addEventListener('rightclick', eventspy);
    const leftBtn = node.shadowRoot.getElementById('right');
    leftBtn.dispatchEvent(new Event('click'));
    expect(eventspy.called).to.equal(true); 
  });

  it('left slot', async () => {
    const slot = `<span slot="left">我是左标题</span>`
    el = await fixture(
       `<quark-navbar>${slot}</quark-navbar>`);
        const descE = el.shadowRoot.querySelector("slot[name='left']");
        const slotResult = descE.assignedNodes()[0];
        expect(slotResult.outerHTML).to.equal(slot);
  });

  it('right slot', async () => {
    const slot = `<span slot="right">我是右标题</span>`
    el = await fixture(
       `<quark-navbar>${slot}</quark-navbar>`);
        const descE = el.shadowRoot.querySelector("slot[name='right']");
        const slotResult = descE.assignedNodes()[0];
        expect(slotResult.outerHTML).to.equal(slot);
  });
})
