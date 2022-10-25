import { expect, fixture } from '@open-wc/testing';
import '../../../lib/stepper';
import sinon from 'sinon';

let el;

const data = {
  value: 2,
  min: 2,
  max: 100,
  interger: true,
  disabled: true,
  decimallength: '2',
  steps: 1,
  name: 'stepper'
}

describe('quark-stepper base attribute', async() => {
  before(async() => {
    el = await fixture(
      `<quark-stepper
         value=${data.value}
         name=${data.name}
         min=${data.min}
         max=${data.max}
         interger=${data.interger}
         disabled=${data.disabled}
         decimallength=${data.decimallength}
         steps=${data.steps}
      >
      </quark-stepper>`
    )
  })


  it('quark-stepper value attribute', async () => {
    expect(el.value).to.equal(data.value);
  });
  it('quark-stepper name attribute', async () => {
    expect(el.name).to.equal(data.name)
  });
  it('quark-stepper min attribute', async () => {
    expect(el.min).to.equal(data.min)
  });
  it('quark-stepper max attribute', async () => {
    expect(el.max).to.equal(data.max)
  });
  it('quark-stepper interger attribute', async () => {
    expect(el.interger).to.equal(data.interger)
  });
  it('quark-stepper disabled attribute', async () => {
    expect(el.disabled).to.equal(data.disabled)
  });
  it('quark-stepper steps attribute', async () => {
    expect(el.steps).to.equal(data.steps)
  });
})

describe('quark-stepper dom attribute', async () => {
  it('change event', async() => {
    const node = await fixture(
      `<quark-stepper />`
    );
    const rate = node.shadowRoot.querySelector('#stepper');
    const eventspy = sinon.spy()  
    node.addEventListener('change', eventspy);
    rate.dispatchEvent(new Event('click'));
    expect(eventspy.called).to.equal(false); 
  });
})
