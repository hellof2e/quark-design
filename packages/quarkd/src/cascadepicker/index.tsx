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
import Locale from "../locale";
import style from "./style.css";

BScroll.use(Wheel);
export interface PickerColumn {
  text: string;
  children: PickerColumn[];
}
export interface SelectedColumn {
  value: string;
  index: number;
}
export interface Props {
  open: boolean;
  name?: string;
  title?: string;
  bottomhidden?: boolean;
  forbidmaskclick?: boolean;
}

export interface CustomEvent {
  close: () => void;
  comfirm: (e: { detail: { value: SelectedColumn[] } }) => void;
  change?: (e: { detail: { value: SelectedColumn[] } }) => void;
}
@customElement({
  tag: "quark-cascade-picker",
  style,
})
class QuarkCascadePicker extends QuarkElement {
  @property({ type: Boolean })
  open = false;

  @property()
  title = "";

  @property()
  name = "";

  @property({ type: Boolean })
  bottomhidden = false;

  @property({ type: Boolean })
  forbidmaskclick = false;

  @state()
  pickerData: string[][] = [];

  columns: PickerColumn[] = [];

  wheels: any[] = [];

  selectedIndexPair: number[] = [];

  depth = 1;

  wheelWrapper: any = createRef();

  setColumns(columns: PickerColumn[]) {
    if (!columns || columns.length < 1) {
      return;
    }
    this.columns = columns;
    const { current } = this.wheelWrapper;
    if (!current) {
      return;
    }

    // 对于级联选择器要求数据嵌套深度保持一致，因此取第一个计算深度
    const firstColumn = this.columns[0];
    this.depth = this.getDepths(firstColumn, 1);
    this.selectedIndexPair = new Array(this.depth).fill(0);
    if (this.depth <= 1) {
      return;
    }

    this.loadInitPickerData();

    for (let i = 0; i < this.depth; i += 1) {
      this.createWheel(current, i);
    }
  }

  loadInitPickerData() {
    let cursor: PickerColumn[] = this.columns;
    const tempPickerData = [...this.pickerData];
    for (let i = 0; i < this.depth; i += 1) {
      const values = cursor.map((item) => item.text);
      tempPickerData.splice(i, 1, values);
      cursor = cursor[0].children;
    }
    this.pickerData = tempPickerData;
  }

  getDepths(column: PickerColumn, depth: number): number {
    if (!column.children || column.children.length <= 0) {
      return depth;
    }
    depth += 1;
    return this.getDepths(column.children[0], depth);
  }

  getValues(needRestore = true) {
    if (needRestore) {
      this.restorePosition();
    }

    const currentSelectedIndexPair = this.wheels.map((wheel) =>
      wheel.getSelectedIndex()
    );
    const selectValues = this.pickerData.map((column, i) => {
      const index = currentSelectedIndexPair[i];
      return {
        value: column[index],
        index,
      };
    });

    this.selectedIndexPair = currentSelectedIndexPair;
    return selectValues;
  }

  restorePosition() {
    this.wheels.forEach((wheel) => {
      wheel.restorePosition();
    });
  }

  changePickerData(newIndexPair: number[], oldIndexPair: number[]) {
    const tempPickerData = [...this.pickerData];
    let cursor: PickerColumn[] = this.columns;
    for (let i = 0; i < this.depth - 1; i += 1) {
      if (newIndexPair[i] !== oldIndexPair[i]) {
        for (let j = 0; j <= i; j += 1) {
          cursor = cursor[newIndexPair[j]].children;
        }

        for (let j = i; j < this.depth - 1; j += 1) {
          const value = cursor.map((item) => item.text);
          tempPickerData.splice(j + 1, 1, value);
          cursor = cursor[0].children;
        }
        // 让后续 wheel 滚动到第一个位置
        // for (let j = i + 1; j < this.depth; j += 1) {
        //   this.wheels[j].wheelTo(0, 10);
        // }
        break;
      }
    }
    this.pickerData = tempPickerData;
    setTimeout(() => {
      for (let i = 0; i < this.depth; i++) {
        this.wheels[i].refresh();
      }
    }, 1);
  }

  popupClose = () => {
    this.restorePosition();
    this.$emit("close");
  };

  confirm = () => {
    const selectValues = this.getValues();
    this.$emit("confirm", { detail: { value: selectValues } });
  };

  createWheel = (wheelWrapper: any, i: number) => {
    if (!this.wheels[i]) {
      this.wheels[i] = new BScroll(wheelWrapper.children[i], {
        wheel: {
          selectedIndex: this.selectedIndexPair[i] || 0,
          wheelWrapperClass: "quark-cascade-picker-wheel-scroll",
          wheelItemClass: "quark-cascade-picker-wheel-item",
        },
      });
      // when any of wheels'scrolling ended , refresh data
      this.wheels[i].on("scrollEnd", () => {
        const currentSelectedIndexPair = this.wheels.map((wheel) =>
          wheel.getSelectedIndex()
        );
        this.changePickerData(currentSelectedIndexPair, this.selectedIndexPair);
        this.selectedIndexPair = currentSelectedIndexPair;
        const selectValues = this.getValues(false);
        this.$emit("change", { detail: { value: selectValues } });
      });
    } else {
      this.wheels[i].refresh();
    }
    return this.wheels[i];
  };

  renderWheel = () => {
    if (!this.pickerData || this.pickerData.length <= 0) {
      return null;
    }
    const wheels = this.pickerData.map((column) => (
      <div class="quark-cascade-picker-wheel" part="picker-wheel">
        <ul
          class="quark-cascade-picker-wheel-scroll"
          part="picker-wheel-scroll"
        >
          {column.map((item: string) => (
            <li
              class="quark-cascade-picker-wheel-item"
              part="picker-wheel-item"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    ));
    return wheels;
  };

  render() {
    return (
      <quark-popup
        open={this.open}
        position="bottom"
        safearea
        round
        forbidmaskclick={this.forbidmaskclick}
        onclose={this.popupClose}
        part="root"
      >
        <div class="quark-cascade-picker" part="picker">
          <div class="quark-cascade-picker-header" part="picker-header">
            <slot name="header">
              <span class="quark-cascade-picker-title" part="picker-title">
                {this.title}
              </span>
              <div
                class="quark-cascade-picker-close-btn"
                part="picker-close-btn"
              >
                <quark-icon-close size="24" onclick={this.popupClose} />
              </div>
            </slot>
          </div>
          <div class="quark-cascade-picker-content" part="picker-content">
            <div
              class="quark-cascade-picker-mask-top"
              part="picker-mask-top"
            ></div>
            <div
              class="quark-cascade-picker-mask-bottom"
              part="picker-mask-bottom"
            ></div>
            <div class="quark-picker-current" part="picker-current">
              <div
                class="quark-picker-current-mask"
                part="picker-current-mask"
              ></div>
            </div>
            <div
              class="quark-cascade-picker-wheel-wrapper"
              part="picker-wheel-wrapper"
              ref={this.wheelWrapper}
            >
              {this.renderWheel()}
            </div>
          </div>
          {!this.bottomhidden && (
            <div class="quark-cascade-picker-bottom" part="picker-bottom">
              <quark-button type="primary" size="big" onclick={this.confirm}>
                {Locale.current.confirm}
              </quark-button>
            </div>
          )}
        </div>
      </quark-popup>
    );
  }
}

export default QuarkCascadePicker;
