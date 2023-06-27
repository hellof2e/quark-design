import { property, customElement, Fragment, state, QuarkElement } from "quarkc";
import style from "./style.css";
export interface Props {
  type?: "circular" | "spinner";
  color?: string;
  size?: string | number;
  vertical?: boolean;
}
@customElement({
  tag: "quark-loading",
  style,
})
class QuarkLoading extends QuarkElement {
  constructor() {
    super();
  }

  @property()
  type: "spinner" | "circular" | "pullrefresh" = "spinner";

  @property({
    type: Boolean,
  })
  vertical = false;

  @property()
  color?: string = "#879099";

  @property()
  size: string = undefined;

  @state()
  rotate = 0;

  getFontSize() {
    let fontSize = "30px";
    if (this.size && /\d(px|rem|em|vh|vw)$/.test(this.size)) {
      fontSize = this.size;
    } else {
      fontSize = `${this.size}px`;
    }
    return fontSize;
  }

  iconRotate() {
    requestAnimationFrame(() => {
      if (this.rotate > 360) {
        this.rotate = this.rotate - 360;
      }
      this.rotate += 4.3; // 折算1.4s转一圈
      this.iconRotate();
    });
  }

  renderLoadingSvg = () => {
    const fontSize = this.getFontSize();
    const transform = `rotate(${this.rotate}deg)`;
    if (this.type === "circular") {
      return (
        <svg
          style={{ fontSize, transform }}
          class="quark-loading-spinner"
          t="1680062076772"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3938"
          width="200"
          height="200"
        >
          <path
            d="M512 25.6a486.4 486.4 0 1 0 0 972.8 486.4 486.4 0 0 0 0-972.8zM512 102.4a409.6 409.6 0 1 1 0 819.2 409.6 409.6 0 0 1 0-819.2z"
            fill={this.color}
            fill-opacity=".2"
            p-id="3939"
          ></path>
          <path
            d="M298.9056 949.3504a38.4 38.4 0 0 1 33.6896-69.0176A409.6 409.6 0 1 0 512 102.4a38.4 38.4 0 0 1 0-76.8 486.4 486.4 0 1 1-213.0944 923.7504zM512 25.6A38.4 38.4 0 1 1 512 102.4a408.6784 408.6784 0 0 0-319.1296 152.832 38.4 38.4 0 1 1-59.8528-48.128A485.4784 485.4784 0 0 1 512 25.6z"
            fill={this.color}
            p-id="3940"
          ></path>
        </svg>
      );
    }

    if (this.type === "pullrefresh") {
      // 专门给下拉刷新使用的loading
      return (
        <svg
          style={{ fontSize, transform }}
          class="quark-loading-spinner"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g stroke={this.color} stroke-width="1.91304348">
              <g transform="translate(1.000000, 1.000000)">
                <rect
                  id="Base"
                  stroke-opacity="0.2"
                  x="0"
                  y="0"
                  width="22"
                  height="22"
                  rx="11"
                ></rect>
                <path
                  d="M11,0 C17.0751322,-1.11598369e-15 22,4.92486775 22,11 C22,17.0751322 17.0751322,22 11,22 C4.92486775,22 7.43989126e-16,17.0751322 0,11 C-7.43989126e-16,4.92486775 4.92486775,1.11598369e-15 11,0 Z"
                  stroke-linecap="round"
                  stroke-dasharray="39.85507368004841,19.9275368400242"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      );
    }

    return (
      <svg
        t="1680072702745"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="3310"
        width="200"
        height="200"
        style={{ fontSize, transform }}
        class="quark-loading-spinner"
      >
        <path
          d="M1023.99296 511.99648a50.559652 50.559652 0 0 1-50.239655 50.239655h-155.51893A50.559652 50.559652 0 0 1 767.99472 511.99648a50.559652 50.559652 0 0 1 50.239655-50.239655h155.51893A50.559652 50.559652 0 0 1 1023.99296 511.99648z"
          fill={this.color || "#BCC4CC"}
          fill-opacity=".751"
          p-id="3311"
        ></path>
        <path
          d="M948.153481 778.426648a51.839644 51.839644 0 0 1-69.247523 18.94387l-134.591075-77.759465a51.839644 51.839644 0 0 1-19.007869-69.183525 51.839644 51.839644 0 0 1 69.247523-18.943869l134.655075 77.695465a51.007649 51.007649 0 0 1 18.943869 69.247524z"
          fill={this.color || "#BCC4CC"}
          fill-opacity=".834"
          p-id="3312"
        ></path>

        <path
          d="M763.258753 946.233495a50.431653 50.431653 0 0 1-69.247524-18.94387L616.315763 793.594544a50.431653 50.431653 0 0 1 18.94387-69.183524 50.431653 50.431653 0 0 1 69.183524 18.943869l77.759465 134.655075a51.007649 51.007649 0 0 1-18.943869 68.223531z"
          fill={this.color || "#BCC4CC"}
          fill-opacity=".917"
          p-id="3313"
        ></path>
        <path
          d="M521.468415 1023.99296a50.559652 50.559652 0 0 1-50.239655-50.239655v-155.51893A50.559652 50.559652 0 0 1 521.468415 767.99472a50.559652 50.559652 0 0 1 50.239655 50.239655v155.51893a49.40766 49.40766 0 0 1-50.239655 50.239655z"
          fill={this.color || "#BCC4CC"}
          p-id="3314"
        ></path>
        <path
          d="M260.734207 946.233495a51.839644 51.839644 0 0 1-18.943869-69.183525L319.549803 742.394896a51.839644 51.839644 0 0 1 69.183524-18.94387 51.839644 51.839644 0 0 1 18.94387 69.183525L329.981731 927.353624a50.175655 50.175655 0 0 1-69.247524 18.94387z"
          fill={this.color || "#BCC4CC"}
          fill-opacity=".087"
          p-id="3315"
        ></path>
        <path
          d="M56.895609 778.426648a50.431653 50.431653 0 0 1 18.94387-69.247524L210.558552 631.483659a50.431653 50.431653 0 0 1 69.183525 18.943869c14.271902 23.679837 5.75996 55.039622-18.94387 69.183525l-135.551068 76.799472a49.599659 49.599659 0 0 1-68.287531-17.983877z"
          fill={this.color || "#BCC4CC"}
          fill-opacity=".17"
          p-id="3316"
        ></path>
        <path
          d="M0 511.99648a50.559652 50.559652 0 0 1 50.239655-50.239655h155.51893A50.559652 50.559652 0 0 1 255.99824 511.99648a50.559652 50.559652 0 0 1-50.239655 50.239655H50.239655A50.559652 50.559652 0 0 1 0 511.99648z"
          fill={this.color || "#BCC4CC"}
          fill-opacity=".253"
          p-id="3317"
        ></path>
        <path
          d="M56.895609 245.566312a51.839644 51.839644 0 0 1 69.183524-18.94387l134.655074 77.759465a51.839644 51.839644 0 0 1 18.94387 69.183525 51.839644 51.839644 0 0 1-69.183524 18.943869L75.839479 314.877835A50.175655 50.175655 0 0 1 56.959608 245.566312z"
          fill={this.color || "#BCC4CC"}
          fill-opacity=".336"
          p-id="3318"
        ></path>
        <path
          d="M260.734207 57.855602a50.431653 50.431653 0 0 1 69.247524 18.94387L407.677197 210.494553c14.271902 23.679837 5.75996 55.039622-18.94387 69.183524a50.431653 50.431653 0 0 1-69.183524-18.94387L241.790338 126.079133A50.751651 50.751651 0 0 1 260.734207 57.855602z"
          fill={this.color || "#BCC4CC"}
          fill-opacity=".419"
          p-id="3319"
        ></path>
        <path
          d="M521.468415 0a50.559652 50.559652 0 0 1 50.239655 50.239655v155.51893A50.559652 50.559652 0 0 1 521.468415 255.99824a50.559652 50.559652 0 0 1-50.239655-50.239655V50.239655A50.559652 50.559652 0 0 1 521.468415 0z"
          fill={this.color || "#BCC4CC"}
          fill-opacity=".502"
          p-id="3320"
        ></path>
        <path
          d="M763.258753 57.855602a51.839644 51.839644 0 0 1 18.943869 69.183525L704.443157 261.7582a51.839644 51.839644 0 0 1-69.183524 18.94387 51.839644 51.839644 0 0 1-18.94387-69.183524l77.695466-135.615068a50.751651 50.751651 0 0 1 69.247524-17.983876z"
          fill={this.color || "#BCC4CC"}
          fill-opacity=".585"
          p-id="3321"
        ></path>
        <path
          d="M948.153481 245.566312c14.207902 23.679837 5.695961 55.039622-18.943869 69.247524l-134.655075 77.695465a50.431653 50.431653 0 0 1-69.247523-18.943869 50.431653 50.431653 0 0 1 19.007869-69.183525l134.591075-76.799472a50.94365 50.94365 0 0 1 69.247523 17.983877z"
          fill={this.color || "#BCC4CC"}
          fill-opacity=".668"
          p-id="3322"
        ></path>
      </svg>
    );
  };

  componentDidMount() {
    this.iconRotate();
  }

  render() {
    return (
      <Fragment>
        {this.renderLoadingSvg()}
        <span class="quark-loading-text">
          <slot></slot>
        </span>
      </Fragment>
    );
  }
}

export default QuarkLoading;
