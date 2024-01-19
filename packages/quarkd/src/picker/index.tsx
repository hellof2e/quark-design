import BScroll from "@better-scroll/core";
import Wheel from "@better-scroll/wheel";
import {
  property,
  createRef,
  customElement,
  state,
  QuarkElement,
} from "quarkc";
import "../popup";
import "../button";
import "@quarkd/icons/lib/close";
import style from "./style.css";
import Locale from "../locale";
export interface PickerColumn {
  values: string[];
  defaultIndex: number;
}
export interface SelectColumn {
  value: string;
  index: number;
}
export interface Props {
  open: boolean;
  title?: string;
  confirmtext?: string;
  bottomhidden?: boolean;
  forbidmaskclick?: boolean;
}
export interface CustomEvent {
  close: () => void;
  confirm: (e: {
    detail: { value: { value: string; index: number }[] };
  }) => void;
  change?: (e: {
    detail: { value: { value: string; index: number }[] };
  }) => void;
}

BScroll.use(Wheel);
@customElement({
  tag: "quark-picker",
  style,
})
class QuarkPicker extends QuarkElement {
  @property({ type: Boolean })
  open = false;

  @property({ type: Boolean })
  forbidmaskclick = false;

  @property()
  name = "";

  @property()
  title = "";

  @property()
  confirmtext = "";

  @property({ type: Boolean })
  bottomhidden = false;

  @state()
  columns: PickerColumn[] = [];

  wheels: any[] = [];

  values: any[] = [];

  wheelWrapper: any = createRef();

  setColumns(columns: PickerColumn[]) {
    this.columns = columns;
    const { current } = this.wheelWrapper;
    if (!current) {
      console.warn("dom not find");
      return;
    }
    for (let i = 0; i < this.columns.length; i += 1) {
      this.createWheel(current, i);
    }
  }

  getValues(needRestore = true) {
    if (needRestore) {
      this.restorePosition();
    }

    const currentSelectedIndexPair = this.wheels.map((wheel) => {
      return wheel.getSelectedIndex();
    });
    const selectValues = this.columns.map((column, i) => {
      const index = currentSelectedIndexPair[i];
      return {
        value: column.values[index],
        index: index,
      };
    });

    return selectValues;
  }

  restorePosition() {
    this.wheels.forEach((wheel) => {
      wheel.restorePosition();
    });
  }

  confirm = () => {
    const selectValues = this.getValues();
    this.values = selectValues;
    this.$emit("confirm", { detail: { value: selectValues } });
  };

  debounce(fn, wait) {
    let timer: ReturnType<typeof setTimeout> | null = null;
    return function () {
      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(fn, wait);
    };
  }

  createWheel = (wheelWrapper: any, i: number) => {
    if (!this.wheels[i]) {
      const column = this.columns[i];
      this.wheels[i] = new BScroll(wheelWrapper.children[i], {
        wheel: {
          selectedIndex: column.defaultIndex || 0,
          wheelWrapperClass: "quark-picker-wheel-scroll",
          wheelItemClass: "quark-picker-wheel-item",
          // rotate: 0,
        },
      });
      this.wheels[i].on(
        "scrollEnd",
        this.debounce(() => {
          const selectValues = this.getValues(false);
          this.$emit("change", { detail: { value: selectValues } });
        }, 30)
      );
    } else {
      this.wheels[i].refresh();
      this.wheels[i].wheelTo(this.columns[i].defaultIndex, 10);
    }
    return this.wheels[i];
  };

  componentDidMount = () => {};

  renderWheel = () => {
    if (!this.columns) {
      return null;
    }
    const wheels = this.columns.map((column) => {
      return (
        <div class="quark-picker-wheel">
          <ul class="quark-picker-wheel-scroll">
            {column.values.map((item: string) => {
              return <li class="quark-picker-wheel-item">{item}</li>;
            })}
          </ul>
        </div>
      );
    });
    return wheels;
  };
  popupClose = () => {
    this.restorePosition();
    this.$emit("close");
  };

  // popupClosed = () => {
  //   this.restorePosition();
  //   this.$emit("closed");
  // };

  render() {
    return (
      <quark-popup
        open={this.open}
        position="bottom"
        safearea
        round
        forbidmaskclick={this.forbidmaskclick}
        onclose={this.popupClose}
        // onclosed={this.popupClosed}
      >
        <div class="quark-picker-container">
          <div class="quark-picker-header">
            <slot name="header">
              <span class="quark-picker-title">{this.title}</span>
              <div class="quark-picker-header-close-btn">
                <quark-icon-close size="24" onclick={this.popupClose} />
              </div>
            </slot>
          </div>
          <div class="quark-picker-content">
            <div class="quark-picker-mask-top"></div>
            <div class="quark-picker-mask-bottom"></div>
            <div class="quark-picker-current">
              <div class="quark-picker-current-mask"></div>
            </div>
            <div class="quark-picker-wheel-wrapper" ref={this.wheelWrapper}>
              {this.renderWheel()}
            </div>
          </div>
          {!this.bottomhidden && (
            <div class="quark-picker-bottom">
              <quark-button type="primary" size="big" onclick={this.confirm}>
                {this.confirmtext || Locale.current.confirm}
              </quark-button>
            </div>
          )}
        </div>
      </quark-popup>
    );
  }
}

export default QuarkPicker;
