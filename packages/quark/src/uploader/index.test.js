import { expect, fixture } from '@open-wc/testing';
import sinon from 'sinon';
import 'quarkd/lib/uploader';

const data = {
  name:'uploader',
  accept: '*',
  multiple: true,
  disabled: true,
  preview: true,
  capture: true,
  maxcount: '2',
  maxsize: '1024'
}
let el;

describe('<quark-uploader>', async () => {

  before(async () => {
    el = await fixture(
      `<quark-uploader
        name=${data.name}
        accept=${data.accept}
        disabled=${data.disabled}
        multiple=${data.multiple}
        capture=${data.capture}
        maxcount=${data.maxcount}
        maxsize=${data.maxsize}
      >
      </quark-uploader>`);
  });

  it('element exist', async () => {
    const uploader  = el.shadowRoot.querySelector('.wrap');
    expect(uploader).to.exist;
  });
  
  it('name attribute', async () => {
    expect(el.name).to.equal(data.name);
  });
  
  it('accept attribute', async () => {
    expect(el.accept).to.equal(data.accept);
  });

  it('disabled attribute', async () => {
    expect(el.disabled).to.equal(data.disabled);
  });

  it('multiple attribute', async () => {
    expect(el.multiple).to.equal(data.multiple);
  });

  it('capture attribute', async () => {
    expect(el.capture).to.equal(data.capture);
  })

  it('maxcount attribute', async () => {
    expect(el.maxcount).to.equal(data.maxcount);
  })

  it('maxsize attribute', async () => {
    expect(el.maxsize).to.equal(data.maxsize);
  })

  it('uploader slot ', async () => {
    const titleSlot =  `<span slot="uploader">自定义上传</span>`
    el = await fixture(
        `<quark-uploader>
         ${titleSlot}
        </quark-uploader>`);
    const titleNode = el.shadowRoot.querySelector("slot[name='uploader']");
    const slotResult = titleNode.assignedNodes()[0];
    expect(slotResult.outerHTML).to.equal(titleSlot);
  });

  // it('afterread Event', async() => {
  //   const node = await fixture(
  //     '<quark-uploader/>'
  //   );
  //   const eventspy = sinon.spy()  
  //   node.addEventListener('afterread', eventspy);
  //   const leftBtn = node.shadowRoot;
  //   leftBtn.dispatchEvent(new Event('change'));
  //   console.log(eventspy)
  //   expect(eventspy.called).to.equal(true); 
  // });
});
