import QuarkElement, { customElement, property, Fragment } from "quarkc";
import style from "./style.css";
export interface Props {
  avatar?: boolean;
  avatarshape?: "round" | "square";
  titel?: boolean;
  row: number;
  rowwidths?: string;
  hide?: boolean;
}
@customElement({
  tag: "quark-skeleton",
  style,
})
class Skeleton extends QuarkElement {
  @property({ type: Number })
  row = 1;

  @property()
  rowwidths = "";

  @property({ type: Boolean })
  avatar = false;

  @property()
  avatarshape = "round";

  @property({ type: Boolean })
  hide = false;

  @property({ type: Boolean })
  titel = false;

  componentDidMount(): void {}

  getRowWidth = (index: number) => {
    let rowWidth = "100%";
    if (index === this.row - 1) {
      rowWidth = "60%";
    }

    if (this.rowwidths) {
      const splitWidths = this.rowwidths.split(",");
      if (splitWidths[index]) {
        rowWidth = splitWidths[index];
      }
    }
    return rowWidth;
  };

  render() {
    return (
      <Fragment>
        {!this.hide ? (
          <div class="skeleton-container">
            {this.avatar && <div class="skeleton-avatar"></div>}
            <div class="skeleton-content">
              {this.titel && <h3 class="skeleton-title"></h3>}
              {new Array(+this.row).fill(1).map((_, index) => {
                const rowWidth = this.getRowWidth(index);
                return (
                  <div
                    class="sketleton-row"
                    style={{
                      width: rowWidth,
                      marginTop: index === 0 && !this.titel ? "0px" : undefined,
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
        ) : (
          <slot></slot>
        )}
      </Fragment>
    );
  }
}

export default Skeleton;
