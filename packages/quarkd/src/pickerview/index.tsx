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
  tag: "quark-pickerview",
  style,
})
class QuarkPickerView extends QuarkElement {
  @property({ type: Boolean })
  forbidmaskclick = false;

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

  renderWheel = () => {
    if (!this.columns) {
      return null;
    }
    const wheels = this.columns.map((column) => {
      return (
        <div class="quark-picker-wheel" part="wheel">
          <ul class="quark-picker-wheel-scroll" part="wheel-scroll">
            {column.values.map((item: string) => {
              return (
                <li class="quark-picker-wheel-item" part="wheel-item">
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      );
    });
    return wheels;
  };

  render() {
    return (
      <div part="container" class="quark-picker-container">
        <div part="content" class="quark-picker-content">
          <div part="mask-top" class="quark-picker-mask-top"></div>
          <div part="mask-bottom" class="quark-picker-mask-bottom"></div>
          <div part="current" class="quark-picker-current">
            <div part="current-mask" class="quark-picker-current-mask"></div>
          </div>
          <div
            part="wheel-wrapper"
            class="quark-picker-wheel-wrapper"
            ref={this.wheelWrapper}
          >
            {this.renderWheel()}
          </div>
        </div>
      </div>
    );
  }
}

export default QuarkPickerView;
