import {
  property,
  customElement,
  createRef,
  QuarkElement,
  state,
} from "quarkc";
import "../loading";
import style from "./style.css";

export interface Props {
  width?: number | string;
  height?: number | string;
  rotate?: number;
  zIndex?: number;
  image?: string;
  fontSize?: number | string;
  fontColor?: string;
  text?: string;
  gapx?: number;
  gapy?: number;
}

@customElement({
  tag: "quark-watermark",
  style,
})
class QuarkWaterMark extends QuarkElement {
  @property({
    type: Number,
  })
  width? = 120;

  @property({
    type: Number,
  })
  height? = 64;

  @property({
    type: Number,
  })
  rotate = -22;

  @property({
    type: Number,
  })
  fontSize? = 14;

  @property()
  fontColor?: string = "rgba(0, 0, 0, .15)";

  @property()
  image?: string;

  @property()
  text: string;

  @property({
    type: Number,
  })
  gapx? = 24;

  @property({
    type: Number,
  })
  gapy? = 48;

  @state()
  content: string | string[];

  init = false;

  waterMarkRef: any = createRef();

  paint() {
    if (!this.waterMarkRef || !this.waterMarkRef.current) return;
    const { current } = this.waterMarkRef;
    const canvas = document.createElement("canvas");
    const ratio = window.devicePixelRatio;
    const ctx = canvas.getContext("2d");
    const fontSize = this.fontSize * ratio;

    const canvasWidth = `${(this.gapx + this.width) * ratio}px`;
    const canvasHeight = `${(this.gapy + this.height) * ratio}px`;

    const markWidth = this.width * ratio;
    const markHeight = this.height * ratio;
    canvas.setAttribute("width", canvasWidth);
    canvas.setAttribute("height", canvasHeight);

    if (ctx) {
      if (this.image) {
        ctx.translate(markWidth / 2, markHeight / 2);
        ctx.rotate((Math.PI / 180) * this.rotate);
        const img = new Image();
        img.alt = "";
        img.crossOrigin = "anonymous";
        img.referrerPolicy = "no-referrer";
        img.onload = () => {
          ctx.drawImage(
            img,
            (-this.width * ratio) / 2,
            (-this.height * ratio) / 2,
            this.width * ratio,
            this.height * ratio
          );
          ctx.restore();
          current.style.backgroundSize = `${this.gapx + this.width}px`;
          current.style.backgroundImage = `url('${canvas.toDataURL()}')`;
        };
        img.src = this.image;
      } else if (this.content) {
        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        // 文字绕中间旋转
        ctx.translate(markWidth / 2, markHeight / 2);
        ctx.rotate((Math.PI / 180) * this.rotate);
        ctx.font = `${fontSize}px normal normal`;
        ctx.fillStyle = this.fontColor;
        if (Array.isArray(this.content)) {
          this.content.forEach((item, index) =>
            ctx.fillText(item, 0, index * fontSize)
          );
        } else {
          ctx.fillText(this.content, 0, 0);
        }
        current.style.backgroundSize = `${this.gapx + this.width}px`;
        current.style.backgroundImage = `url('${canvas.toDataURL()}')`;
      }
    } else {
      throw new Error("Canvas is not supported in the current environment");
    }
  }

  setText(content: string | string[]) {
    this.content = content;
    this.image = null;

    this.paint();
  }

  componentDidMount(): void {
    this.paint();

    this.init = true;
  }

  shouldComponentUpdate(propName, oldValue, newValue): boolean {
    if (propName === "text" && oldValue !== newValue) {
      this.content = newValue;
    }
    if (this.init) {
      this.paint();
    }
    return true;
  }

  render() {
    return <div ref={this.waterMarkRef} class="quark-watermark"></div>;
  }
}

export default QuarkWaterMark;
