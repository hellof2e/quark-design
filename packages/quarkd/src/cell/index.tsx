import QuarkElement, { property, customElement } from "quarkc";
import "@quarkd/icons/lib/arrow-right";
import cellStyle from "./cellStyle.css";
import cellGroupCss from "./cellGroupStyle.css";
export interface Props {
  title: string;
  desc?: string;
  to?: string;
  islink?: boolean;
  icon?: string;
}
@customElement({
  tag: "quark-cell",
  style: cellStyle,
})
class QuarkCell extends QuarkElement {
  @property()
  title = "";

  @property()
  icon = "";

  @property()
  desc = "";

  @property()
  to = "";

  @property({
    type: Boolean,
  })
  islink = false;

  handleNavigation = () => {
    if (this.to) {
      window.location.href = this.to;
    }
  };

  renderIcon = () => {
    if (this.icon && this.icon.includes("http")) {
      return (
        <img
          src={this.icon}
          class="quark-cell-icon"
          style={{ marginRight: 4 }}
        />
      );
    }
    return null;
  };

  render() {
    return (
      <div class="quark-cell" onClick={this.handleNavigation}>
        <slot name="icon">{this.renderIcon()}</slot>
        <div class="quark-cell-title" id="title">
          <slot name="title">{this.title}</slot>
        </div>

        <slot>
          {this.desc && (
            <div class="quark-cell-desc" id="desc">
              {this.desc}
            </div>
          )}
          {this.islink && <quark-icon-arrow-right id="arrow" />}
        </slot>
      </div>
    );
  }
}

export default QuarkCell;

@customElement({
  tag: "quark-cell-group",
  style: cellGroupCss,
})
class QuarkCellGroup extends QuarkElement {
  render() {
    return <slot></slot>;
  }
}
export { QuarkCellGroup };
