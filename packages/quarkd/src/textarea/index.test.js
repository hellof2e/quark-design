/**
 * eslint-disable
 */
import { expect, fixture } from "@open-wc/testing";
import "quarkd/lib/textarea";

const data = {
  value: "内容",
  placeholder: "请输入内容",
  rows: 5,
  maxlength: 100,
  showCount: true,
  autoComplete: true,
  disabled: false,
  readOnly: false,
  id: "text",
};

let el;

describe("<quark-textarea>", async () => {
  it("element exist", async () => {
    el = await fixture(
      `<quark-textarea
      ></quark-textarea>`
    );
    const textarea = el.shadowRoot.querySelector(".quark-textarea");
    expect(textarea).to.exist;
  });

  it("element attribute exist", async () => {
    el = await fixture(
      `<quark-textarea
      value=${data.value}
      placeholder=${data.placeholder}
      rows=${data.rows}
      maxlength=${data.maxlength}
      showcount=${data.showCount}
      autoComplete=${data.autoComplete}
      disabled=${data.disabled}
      id=${data.id}
      ></quark-textarea>`
    );
    const textarea = el.shadowRoot.querySelector(".quark-text-area");
    // expect(textarea.value).to.equal(data.value);
    expect(textarea.placeholder).to.equal(data.placeholder);
    expect(textarea.rows).to.equal(data.rows);
    expect(textarea.disabled).to.equal(data.disabled);
    expect(textarea.readOnly).to.equal(data.readOnly);
    expect(el.maxlength).to.equal(data.maxlength.toString());
    expect(el.showcount).to.equal(data.showCount);
    expect(el.autocomplete).to.equal(data.autoComplete.toString());
  });
});
