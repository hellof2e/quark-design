import { customElement, property, Fragment, QuarkElement } from "quarkc";
import style from "./style.css";
export interface Props {
  avatar?: boolean;
  avatarshape?: "round" | "square";
  title?: boolean;
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

  @property({ type: Boolean, attribute: "title" })
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore ,由于原生title 为 string类型，因此有冲突，所以此处使用了ignore
  showTitle = false;

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
          <div class="skeleton-container" part="root">
            {this.avatar && <div class="skeleton-avatar" part="avatar"></div>}
            <div class="skeleton-content" part="content">
              {this.showTitle && <h3 class="skeleton-title" part="title"></h3>}
              {new Array(+this.row).fill(1).map((_, index) => {
                const rowWidth = this.getRowWidth(index);

                return (
                  <div
                    class="skeleton-row"
                    part="row"
                    style={{
                      width: rowWidth,
                      marginTop:
                        index === 0 && !this.showTitle ? "0px" : undefined,
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
