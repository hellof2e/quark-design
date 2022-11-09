import { expect, fixture } from '@open-wc/testing';
import 'quarkd/lib/card';

const data = {
  title: '标题',
  content : '内容',
  tips : 'tips',
  desc:'描述'
}
let el;

describe('<quark-card>', async () => {
  it('element exist', async () => {
    el = await fixture(
        `<quark-card >
        </quark-card>`);
    const title = el.shadowRoot.querySelector('.title');
    const content = el.shadowRoot.querySelector('.content');
    const tips = el.shadowRoot.querySelector('.tips');
    const desc = el.shadowRoot.querySelector('.desc');
    expect(title).to.exist;
    expect(content).to.exist;
    expect(tips).to.exist;
    expect(desc).to.exist;
  });

  it('title attribute', async () => {
    el = await fixture(
        `<quark-card title=${data.title}>
        </quark-card>`);
    const titleE = el.shadowRoot.querySelector('.title');
    expect(titleE.innerHTML).to.equal(data.title);
    expect(el.title).to.equal(data.title);
  });

  it('content attribute', async () => {
    el = await fixture(
        `<quark-card content=${data.content}>
        </quark-card>`);
    const contentE = el.shadowRoot.querySelector('.content');
    expect(contentE.innerHTML).to.equal(data.content);
    expect(el.content).to.equal(data.content);
  });

  it('tips attribute', async () => {
    el = await fixture(
        `<quark-card tips=${data.tips}>
        </quark-card>`);
    const tipsE = el.shadowRoot.querySelector('.tips');
    expect(tipsE.innerHTML).to.equal(data.tips);
    expect(el.tips).to.equal(data.tips);
  });

  it('desc attribute', async () => {
    el = await fixture(
        `<quark-card desc=${data.desc}>
        </quark-card>`);
    const descE = el.shadowRoot.querySelector('.desc');
    expect(descE.innerHTML).to.equal(data.desc);
    expect(el.desc).to.equal(data.desc);
  });

});
