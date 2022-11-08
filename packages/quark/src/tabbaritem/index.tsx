import QuarkElement, { property, customElement } from "@quarkd/core";
import style from "./style.css";
export interface Props {
  label: string;
  badgecontent?: string;
  name: string;
}
@customElement({ tag: "quark-tabbar-item", style })
class QuarkTabbarItem extends QuarkElement {
  @property({
    type: Boolean,
  })
  active = false;

  @property()
  icon = "";

  @property()
  iconsize = "20";

  @property()
  name = "";

  @property()
  badgetype: string;

  @property()
  badgecontent: string;

  @property()
  inactivecolor: string;

  @property()
  activecolor: string;

  @property()
  label = "";

  renderIcon = () => {
    if (this.querySelector("[slot='icon']")) {
      return <slot name="icon"></slot>;
    }
    return null;
  };

  render() {
    return (
      <div class="quark-tabbar-item">
        <quark-badge
          type={this.badgetype ? this.badgetype : "round"}
          content={this.badgecontent}
        >
          <div
            class="quark-tabbar-slot"
            style={{
              color: this.active ? this.activecolor : this.inactivecolor,
            }}
          >
            <div class="quark-tabbar-icon">
              <slot name="icon"></slot>
            </div>
            <span class="quark-tabbar-text">{this.label}</span>
          </div>
        </quark-badge>
      </div>
    );
  }
}

export default QuarkTabbarItem;
