import { property, customElement, QuarkElement, state } from "quarkc";
import style from "./style.css";
import { isObject } from "../../utils/util";

type StrokeLinecap = "round" | "square" | "butt";
type CircleStartPosition = "left" | "right" | "top" | "bottom";

const ROTATE_ANGLE_MAP: Record<CircleStartPosition, number> = {
  right: 0,
  bottom: 90,
  left: 180,
  top: 270,
};

export interface Props {
  rate: number;
  strokewidth: number;
  size: number;
  color: string;
  layercolor: string;
  fill: string;
  strokelinecap: StrokeLinecap;
  anticlockwise: boolean;
}
let uid = 0;

@customElement({
  tag: "quark-circle",
  style,
})
class QuarkCircle extends QuarkElement {
  @property({ type: Number })
  rate = 0;

  @property({ type: Number })
  strokewidth = 2;

  @property({ type: Number })
  size = 100;

  @property()
  color = "#08f";

  @property()
  layercolor = "#fff";

  @property()
  fill = "none";

  @property()
  strokelinecap: StrokeLinecap = "round";

  @property({ type: Boolean })
  anticlockwise = false;

  @property()
  startposition: CircleStartPosition = "top";

  stokeId = "";

  @state()
  gradientColor: Record<string, string> | null = null;

  componentDidMount(): void {
    this.stokeId = `quark-circle-${uid++}`;
  }

  renderLayer() {
    const PERIMETER = (314 * this.size) / 100;
    const layerStyle = {
      fill: "none",
      stroke: this.layercolor,
      strokeWidth: this.strokewidth,
      strokeDasharray: PERIMETER,
      strokeDashoffset: 0,
    };

    const coordinates = this.size / 2;
    const r = (this.size - this.strokewidth) / 2;
    return (
      <circle
        class="circle-wrapper-layer"
        cx={coordinates}
        cy={coordinates}
        r={r}
        style={layerStyle}
      />
    );
  }

  renderHover() {
    const PERIMETER = (314 * this.size) / 100;
    const rate = Math.min(100, Math.max(0, +this.rate));
    const color = isObject(this.gradientColor)
      ? `url(#${this.stokeId})`
      : this.color;

    const hoverStyle = {
      fill: this.fill,
      stroke: color,
      strokeWidth: this.strokewidth,
      strokeDasharray: PERIMETER,
      strokeDashoffset:
        PERIMETER - (PERIMETER * (!this.anticlockwise ? rate : -rate)) / 100,
      strokeLinecap: this.strokelinecap,
    };
    const coordinates = this.size / 2;
    const r = (this.size - this.strokewidth) / 2;

    return (
      <circle
        class="circle-wrapper-hover"
        cx={coordinates}
        cy={coordinates}
        r={r}
        style={hoverStyle}
      />
    );
  }

  renderGradient() {
    const color = this.gradientColor;
    if (!isObject(color)) return;

    const Stops = Object.keys(color)
      .sort((a, b) => parseFloat(a) - parseFloat(b))
      .map((key, index) => (
        <stop key={index} offset={key} stop-color={color[key]} />
      ));

    return (
      <defs>
        <linearGradient id={this.stokeId} x1="100%" y1="0%" x2="0%" y2="0%">
          {Stops}
        </linearGradient>
      </defs>
    );
  }

  setGradient(color: Record<string, string>) {
    this.gradientColor = color;
  }

  render() {
    const getSizeStyle = {
      width: this.size + "px",
      height: this.size + "px",
    };
    const svgStyle = {
      width: this.size + "px",
      height: this.size + "px",
      transform: `rotate(${ROTATE_ANGLE_MAP[this.startposition]}deg)`,
    };
    return (
      <div class="circle-wrapper" style={getSizeStyle}>
        <svg style={svgStyle}>
          {this.renderGradient()}
          {this.renderLayer()}
          {this.renderHover()}
        </svg>
        <div class="circle-wrapper-content">
          <slot />
        </div>
      </div>
    );
  }
}

export default QuarkCircle;
