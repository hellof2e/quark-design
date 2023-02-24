import QuarkElement, { Fragment, property, customElement } from "quarkc";

import "@quarkd/icons/lib/arrow-left";
import "@quarkd/icons/lib/close";
import style from "./style.css";
export interface Props {
  title: string;
  lefthide?: boolean;
  closehide?: boolean;
  righttext?: string;
  safearea?: boolean;
  iconsize?: string;
}
export interface CustomEvent {
  leftclick?: () => void;
  rightclick?: () => void;
  close?: () => void;
}
@customElement({
  tag: "quark-navbar",
  style,
})
class QuarkNavbar extends QuarkElement {
  @property()
  title = "";

  @property()
  righttext = "";

  @property()
  iconsize = "24";

  @property({ type: Boolean })
  lefthide = false;

  @property({ type: Boolean })
  closehide = false;

  leftClick = () => {
    this.$emit("leftclick");
  };

  rightClick = () => {
    this.$emit("rightclick");
  };

  closeClick = () => {
    this.$emit("close");
  };

  render() {
    return (
      <Fragment>
        {!this.lefthide && (
          <slot name="left" class="quark-navbar-left">
            <quark-icon-arrow-left
              id="left"
              size={this.iconsize}
              onClick={this.leftClick}
              class="back"
            />
            {!this.closehide && (
              <quark-icon-close
                id="left"
                size={this.iconsize}
                onClick={this.closeClick}
                class="close"
              />
            )}
          </slot>
        )}
        <div class="quark-navbar-title">
          <div>{this.title}</div>
        </div>
        <slot name="right" class="quark-navbar-right icon">
          <span id="right" onClick={this.rightClick}>
            {this.righttext}
          </span>
        </slot>
      </Fragment>
    );
  }
}

export default QuarkNavbar;
