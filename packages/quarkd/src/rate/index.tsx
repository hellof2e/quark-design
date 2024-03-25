import { Fragment, property, customElement, state, QuarkElement } from "quarkc";
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
  imgicon = "";

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
    const { id } = i;
    this.stars = this.stars.map((item) => {
      item.color = item.id <= id ? this.activecolor : "inherit";
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
    if (this.imgicon) {
      return (
        <img
          style={{
            width: `${this.size}px`,
            height: "auto",
            paddingRight: "4px",
            filter:
              i.color && i.color !== "inherit" ? "initial" : "grayscale(100%)",
          }}
          src={this.imgicon}
          key={i.id}
          onClick={() => this.handleChange(i)}
          part="icon"
        />
      );
    }

    return (
      <quark-icon-star-fill
        part="icon"
        key={i.id}
        id={i.id}
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
