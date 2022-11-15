import QuarkElement, {
  Fragment,
  property,
  customElement,
  state,
} from "@quarkd/core";
import "@quarkd/icons/lib/star-fill";
import style from "./style.css";
export interface Props {
  defaultvalue?: number;
  value?: number;
  size?: number;
  disabled?: boolean;
  readonly?: boolean;
  activecolor?: string;
}
export interface CustomEvent {
  change: (e: { detail: { value: string } }) => void;
}
@customElement({
  tag: "quark-rate",
  style,
})
class QuarkRate extends QuarkElement {
  @property()
  value = "";

  @property()
  name = "";

  @property()
  defaultValue = "";

  @property()
  size = "25";

  @property()
  icon = "";

  @property()
  activecolor = "#ee0a24";

  @property({ type: Boolean })
  disabled = false;

  @property({ type: Boolean })
  readonly = false;

  @state()
  stars: any[] = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

  activeIndex = -1;

  componentDidMount(): void {
    if (this.defaultValue) this.initSelect(Number(this.defaultValue));
  }

  shouldComponentUpdate(
    propName: string,
    oldValue: string | boolean,
    newValue: string | boolean
  ): boolean {
    if (propName === "value" || propName === "defaultValue") {
      if (newValue) this.initSelect(Number(newValue));
    }
    return true;
  }

  handleChange(i: { id: number; color: string }) {
    if (!this.shadowRoot || this.disabled) return;
    const { id, color } = i;
    this.stars = this.stars.map((item) => {
      item.color = "inherit";
      if (color === this.activecolor) {
        item.color = "inherit";
      }
      if (item.id <= id) item.color = this.activecolor;
      return item;
    });
    const value = this.stars.filter((i) => i.color === this.activecolor).length;
    this.value = `${value}`;
    this.$emit("change", { detail: { value } });
  }

  initSelect = (value: number) => {
    this.stars = this.stars.map((item) => {
      if (item.id <= value) item.color = this.activecolor;
      return item;
    });
  };

  renderIcon = (i: { id: number; color: string }) => {
    if (this.icon && this.icon.includes("http")) {
      return (
        <img
          style={{ width: `${this.size}px`, height: "auto" }}
          src={this.icon}
          key={i.id}
        />
      );
    }
    console.log(i, 11);

    return (
      <quark-icon-star-fill
        key={i.id}
        id={i.id}
        name={this.icon}
        size={this.size}
        color={i.color || "inherit"}
        onClick={() => this.handleChange(i)}
      />
    );
  };

  render() {
    return (
      <Fragment>
        {this.stars.map((i) => {
          return this.renderIcon(i);
        })}
      </Fragment>
    );
  }
}

export default QuarkRate;
