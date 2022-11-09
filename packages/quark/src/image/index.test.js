import { expect, fixture } from '@open-wc/testing';
import 'quarkd/lib/image';

const data = {
  src: 'https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg',
  alt: '哈士奇',
  width: '100px',
  height: '100px',
  lazy: false,
  round: false,
  raidus: '50px',
  fit: 'scale-down'
};

let el;

describe('<quark-image>', async () => {
  // it('element exist', async () => {
  //   el = await fixture(
  //     `<quark-image
  //     ></quark-image>`
  //   );
  //   const img = el.shadowRoot.querySelector('img');
  //   expect(img).to.exist;
  // });

  // it('element attribute exist', async () => {
  //   el = await fixture(
  //     `<quark-image
  //     src=${data.src}
  //     width=${data.width}
  //     height=${data.height}
  //     fit=${data.fit}
  //     lazy=${data.lazy}
  //     round=${data.round}
  //     ></quark-image>`
  //   );
  //   const img = el.shadowRoot.querySelector('img');
  //   expect(el.lazy).to.equal(data.lazy);
  //   expect(el.round).to.equal(data.round);
  //   expect(img.src).to.equal(data.src);
  //   expect(img.width).to.exist;
  //   expect(img.height).to.exist;
  //   // expect(img['object-fit']).to.equal(data.fit);
  // });
});
