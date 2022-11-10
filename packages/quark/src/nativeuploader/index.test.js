import { expect, fixture } from '@open-wc/testing';
import sinon from 'sinon';
import 'quarkd/lib/nativeuploader';

const data = {
  name: "uploader",
  accept: "*",
  multiple: true,
  disabled: true,
  preview: true,
  capture: true,
  maxcount: "2",
  maxsize: "1024",
};
let el;

describe("<quark-native-uploader>", async () => {
  before(async () => {
    el = await fixture(
      `<quark-uploader
        name=${data.name}
        disabled=${data.disabled}
        maxcount=${data.maxcount}
      >
      </quark-uploader>`
    );
  });

  it("element exist", async () => {
    const uploader = el.shadowRoot.querySelector(".quark-uploader");
    expect(uploader).to.exist;
  });
});
