import { Icon } from "./icon";
import style from "../style.css";
import { getFontSize } from "../../../utils/index";

export default class QuarkIconLocation extends HTMLElement {
  icon: any;
  static get observedAttributes() {
    return ["size", "color"];
  }

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.innerHTML = `
            <style>
                ${style}
            </style>
            <svg class="icon" id="icon" aria-hidden="true" viewBox="0 0 1024 1024">
                ${Icon}
            </svg>
        `;
    // @ts-ignore
    this.icon = this.shadowRoot.getElementById("icon");
  }

  connectedCallback() {
    this.upgradeProperty();
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === "color") {
      this.icon.style.color = newValue;
    } else if (name === "size") {
      const fontSize = this.getFontSize();
      this.icon.style.fontSize = `${fontSize}`;
    }
  }

  upgradeProperty() {
    this.size = this.size;
    this.color = this.color;
  }

  getFontSize() {
    return getFontSize(this.size);
  }

  get size() {
    return this.getAttribute("size");
  }

  get color() {
    return this.getAttribute("color");
  }

  set size(value) {
    // @ts-ignore
    this.setAttribute("size", value);
  }

  set color(value) {
    // @ts-ignore
    this.setAttribute("color", value);
  }
}

if (!customElements.get("quark-icon-location")) {
  customElements.define("quark-icon-location", QuarkIconLocation);
}
