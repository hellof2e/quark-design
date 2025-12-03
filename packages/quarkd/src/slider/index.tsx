import { classNames, clamp } from "../../utils/index";
import {
  property,
  customElement,
  createRef,
  state,
  QuarkElement,
} from "quarkc";
import style from "./style.css";

// 获取元素的 DOMRect
const getRect = (el: HTMLElement): DOMRect => {
  return el.getBoundingClientRect();
};

type NumberRange = [number, number];
type SliderValue = number | NumberRange;

export interface Props {
  value?: SliderValue;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  readonly?: boolean;
  vertical?: boolean;
  range?: boolean;
  barHeight?: number;
  buttonSize?: number;
  activeColor?: string;
  inactiveColor?: string;
  reverse?: boolean;
}

export interface CustomEvent {
  change?: (e: { detail: { value: SliderValue } }) => void;
  dragstart?: (e: { detail: { event: TouchEvent | MouseEvent } }) => void;
  dragend?: (e: {
    detail: { value: SliderValue; event: TouchEvent | MouseEvent };
  }) => void;
}

@customElement({ tag: "quark-slider", style })
class QuarkSlider extends QuarkElement {
  @property({
    type: Number,
  })
  min = 0;

  @property({
    type: Number,
  })
  max = 100;

  @property({
    type: Number,
  })
  step = 1;

  @property({
    type: Boolean,
  })
  range = false;

  @property({
    type: Boolean,
  })
  reverse = false;

  @property({
    type: Boolean,
  })
  disabled = false;

  @property({
    type: Boolean,
  })
  readonly = false;

  @property({
    type: Boolean,
  })
  vertical = false;

  @property({
    type: Number,
  })
  barHeight = 2;

  @property({
    type: Number,
  })
  buttonSize = 24;

  @property({
    type: String,
  })
  activeColor = "#1989fa";

  @property({
    type: String,
  })
  inactiveColor = "#e5e5e5";

  @property()
  value: SliderValue = 0;

  @state()
  innerValue: SliderValue = 0;

  @state()
  dragStatus: "start" | "dragging" | "" = "";

  // 当前按钮索引（range 模式下）
  buttonIndex: 0 | 1 = 0;
  // 拖拽过程中的当前值
  current: SliderValue = 0;
  // 拖拽开始时的值
  startValue: SliderValue = 0;
  // 触摸起始坐标
  startX = 0;
  startY = 0;
  // 触摸偏移量
  deltaX = 0;
  deltaY = 0;

  rootRef: any = createRef();
  button0Ref: any = createRef();
  button1Ref: any = createRef();

  // 值范围
  get scope() {
    return Number(this.max) - Number(this.min);
  }

  // 判断是否为 range 模式
  isRange(val: unknown): val is NumberRange {
    return this.range && Array.isArray(val);
  }

  // 计算选中条的长度百分比
  calcMainAxis() {
    const value = this.innerValue;
    const min = Number(this.min);
    if (this.isRange(value)) {
      return `${((value[1] - value[0]) * 100) / this.scope}%`;
    }
    return `${((Number(value) - min) * 100) / this.scope}%`;
  }

  // 计算选中条的开始位置的偏移量
  calcOffset() {
    const value = this.innerValue;
    const min = Number(this.min);
    if (this.isRange(value)) {
      return `${((value[0] - min) * 100) / this.scope}%`;
    }
    return "0%";
  }

  // 格式化值（确保在范围内且符合步长）
  format(value: number) {
    const min = Number(this.min);
    const max = Number(this.max);
    const step = Number(this.step);
    value = clamp(value, min, max);
    const diff = Math.round((value - min) / step) * step;
    return Math.round((min + diff) * 1000) / 1000; // 避免浮点数精度问题
  }

  // 更新开始值
  updateStartValue() {
    const current = this.innerValue;
    if (this.isRange(current)) {
      this.startValue = current.map((v) => this.format(v)) as NumberRange;
    } else {
      this.startValue = this.format(Number(current));
    }
  }

  // 处理范围值（确保左值小于右值）
  handleRangeValue(value: NumberRange): NumberRange {
    const left = value[0] ?? Number(this.min);
    const right = value[1] ?? Number(this.max);
    return left > right ? [right, left] : [left, right];
  }

  // 判断值是否相等
  isSameValue(newValue: SliderValue, oldValue: SliderValue): boolean {
    if (Array.isArray(newValue) && Array.isArray(oldValue)) {
      return newValue[0] === oldValue[0] && newValue[1] === oldValue[1];
    }
    return newValue === oldValue;
  }

  // 更新值
  updateValue(value: SliderValue, end?: boolean) {
    if (this.isRange(value)) {
      value = this.handleRangeValue(value).map((v) =>
        this.format(v)
      ) as NumberRange;
    } else {
      value = this.format(Number(value));
    }

    if (!this.isSameValue(value, this.innerValue)) {
      this.innerValue = value;
      this.$emit("change", { detail: { value } });
    }

    if (end && !this.isSameValue(value, this.startValue)) {
      this.$emit("change", { detail: { value } });
    }
  }

  // 设置值（外部调用）
  setValue(value: SliderValue) {
    if (this.isRange(value)) {
      this.innerValue = this.handleRangeValue(value as NumberRange).map((v) =>
        this.format(v)
      ) as NumberRange;
    } else {
      this.innerValue = this.format(Number(value));
    }
  }

  // 获取当前值
  getValue(): SliderValue {
    return this.innerValue;
  }

  componentDidMount() {
    // 初始化值
    this.initValue();

    // 绑定 document 级别的鼠标事件
    document.addEventListener("mousemove", this.handleMouseMove);
    document.addEventListener("mouseup", this.handleMouseUp);
  }

  // 解析传入的 value
  parseValue(val: any): SliderValue | null {
    if (val === undefined || val === null) {
      return null;
    }

    // 已经是数组
    if (Array.isArray(val)) {
      if (val.length >= 2) {
        return [Number(val[0]), Number(val[1])];
      }
      return null;
    }

    // 是数字
    if (typeof val === "number") {
      return val;
    }

    // 是字符串，尝试解析
    if (typeof val === "string") {
      // 尝试解析 JSON 数组格式 "[20, 60]"
      if (val.startsWith("[")) {
        try {
          const parsed = JSON.parse(val);
          if (Array.isArray(parsed) && parsed.length >= 2) {
            return [Number(parsed[0]), Number(parsed[1])];
          }
        } catch {
          // 解析失败
        }
      }
      // 尝试解析逗号分隔格式 "20,60"
      if (val.includes(",")) {
        const parts = val.split(",").map((s) => Number(s.trim()));
        if (parts.length >= 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
          return [parts[0], parts[1]];
        }
      }
      // 尝试解析单个数字
      const num = Number(val);
      if (!isNaN(num)) {
        return num;
      }
    }

    return null;
  }

  // 初始化值
  initValue() {
    const parsedValue = this.parseValue(this.value);

    if (this.range) {
      // range 模式
      if (Array.isArray(parsedValue)) {
        this.innerValue = this.handleRangeValue(parsedValue as NumberRange).map(
          (v) => this.format(v)
        ) as NumberRange;
      } else {
        // 没有传入有效的数组值，使用默认值
        this.innerValue = [Number(this.min), Number(this.min)];
      }
    } else {
      // 单滑块模式
      if (typeof parsedValue === "number") {
        this.innerValue = this.format(parsedValue);
      } else if (Array.isArray(parsedValue)) {
        // 传入了数组但不是 range 模式，取第一个值
        this.innerValue = this.format(parsedValue[0]);
      } else {
        this.innerValue = Number(this.min);
      }
    }
  }

  componentWillUnmount() {
    // 移除 document 级别的鼠标事件
    document.removeEventListener("mousemove", this.handleMouseMove);
    document.removeEventListener("mouseup", this.handleMouseUp);
  }

  // 点击轨道
  handleClick = (event: MouseEvent) => {
    event.stopPropagation();
    if (this.disabled || this.readonly) {
      return;
    }

    this.updateStartValue();
    const rect = getRect(this.rootRef.current);

    const getDelta = () => {
      if (this.vertical) {
        if (this.reverse) {
          return rect.bottom - event.clientY;
        }
        return event.clientY - rect.top;
      }
      if (this.reverse) {
        return rect.right - event.clientX;
      }
      return event.clientX - rect.left;
    };

    const total = this.vertical ? rect.height : rect.width;
    const value = Number(this.min) + (getDelta() / total) * this.scope;

    if (this.isRange(this.innerValue)) {
      const [left, right] = this.innerValue;
      const middle = (left + right) / 2;
      if (value <= middle) {
        this.updateValue([value, right], true);
      } else {
        this.updateValue([left, value], true);
      }
    } else {
      this.updateValue(value, true);
    }
  };

  // 触摸开始
  handleTouchStart = (event: TouchEvent, index?: 0 | 1) => {
    if (this.disabled || this.readonly) {
      return;
    }

    const touch = event.touches[0];
    this.startX = touch.clientX;
    this.startY = touch.clientY;
    this.deltaX = 0;
    this.deltaY = 0;

    if (typeof index === "number") {
      this.buttonIndex = index;
    }

    this.current = this.innerValue;
    this.updateStartValue();
    this.dragStatus = "start";
  };

  // 触摸移动
  handleTouchMove = (event: TouchEvent) => {
    if (this.disabled || this.readonly) {
      return;
    }

    if (this.dragStatus === "start") {
      this.$emit("dragstart", { detail: { event } });
    }

    event.preventDefault();
    event.stopPropagation();

    const touch = event.touches[0];
    this.deltaX = touch.clientX - this.startX;
    this.deltaY = touch.clientY - this.startY;

    this.dragStatus = "dragging";

    const rect = getRect(this.rootRef.current);
    const delta = this.vertical ? this.deltaY : this.deltaX;
    const total = this.vertical ? rect.height : rect.width;
    let diff = (delta / total) * this.scope;

    if (this.reverse) {
      diff = -diff;
    }

    if (this.isRange(this.startValue)) {
      const index = this.reverse
        ? ((1 - this.buttonIndex) as 0 | 1)
        : this.buttonIndex;
      (this.current as NumberRange)[index] =
        (this.startValue as NumberRange)[index] + diff;
    } else {
      this.current = (this.startValue as number) + diff;
    }

    this.updateValue(this.current);
  };

  // 触摸结束
  handleTouchEnd = (event: TouchEvent) => {
    if (this.disabled || this.readonly) {
      return;
    }

    if (this.dragStatus === "dragging") {
      this.updateValue(this.current, true);
      this.$emit("dragend", { detail: { value: this.innerValue, event } });
    }

    this.dragStatus = "";
  };

  // 鼠标按下
  handleMouseDown = (event: MouseEvent, index?: 0 | 1) => {
    if (this.disabled || this.readonly) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();

    this.startX = event.clientX;
    this.startY = event.clientY;
    this.deltaX = 0;
    this.deltaY = 0;

    if (typeof index === "number") {
      this.buttonIndex = index;
    }

    this.current = this.innerValue;
    this.updateStartValue();
    this.dragStatus = "start";
  };

  // 鼠标移动
  handleMouseMove = (event: MouseEvent) => {
    if (this.disabled || this.readonly || !this.dragStatus) {
      return;
    }

    if (this.dragStatus === "start") {
      this.$emit("dragstart", { detail: { event } });
    }

    event.preventDefault();

    this.deltaX = event.clientX - this.startX;
    this.deltaY = event.clientY - this.startY;

    this.dragStatus = "dragging";

    const rect = getRect(this.rootRef.current);
    const delta = this.vertical ? this.deltaY : this.deltaX;
    const total = this.vertical ? rect.height : rect.width;
    let diff = (delta / total) * this.scope;

    if (this.reverse) {
      diff = -diff;
    }

    if (this.isRange(this.startValue)) {
      const index = this.reverse
        ? ((1 - this.buttonIndex) as 0 | 1)
        : this.buttonIndex;
      (this.current as NumberRange)[index] =
        (this.startValue as NumberRange)[index] + diff;
    } else {
      this.current = (this.startValue as number) + diff;
    }

    this.updateValue(this.current);
  };

  // 鼠标释放
  handleMouseUp = (event: MouseEvent) => {
    if (this.disabled || this.readonly) {
      return;
    }

    if (this.dragStatus === "dragging") {
      this.updateValue(this.current, true);
      this.$emit("dragend", { detail: { value: this.innerValue, event } });
    }

    this.dragStatus = "";
  };

  // 获取轨道样式
  getWrapperStyle() {
    const styles: string[] = [];

    // 使用 CSS 变量覆盖
    if (this.inactiveColor !== "#e5e5e5") {
      styles.push(`--quark-slider-inactive-background: ${this.inactiveColor}`);
    }
    if (this.barHeight !== 2) {
      styles.push(`--quark-slider-bar-height: ${this.barHeight}px`);
    }

    return styles.join("; ");
  }

  // 获取选中条样式
  getBarStyle() {
    const mainAxis = this.vertical ? "height" : "width";
    const styles: string[] = [`${mainAxis}: ${this.calcMainAxis()}`];

    // 自定义激活颜色
    if (this.activeColor !== "#1989fa") {
      styles.push(`background: ${this.activeColor}`);
    }

    // 拖拽时禁用过渡动画
    if (this.dragStatus) {
      styles.push("transition: none");
    }

    // 定位
    const positionKey = this.vertical
      ? this.reverse
        ? "bottom"
        : "top"
      : this.reverse
      ? "right"
      : "left";

    styles.push(`${positionKey}: ${this.calcOffset()}`);

    return styles.join("; ");
  }

  // 获取按钮样式
  getButtonStyle() {
    const styles: string[] = [];

    // 自定义按钮尺寸
    if (this.buttonSize !== 24) {
      styles.push(`width: ${this.buttonSize}px`);
      styles.push(`height: ${this.buttonSize}px`);
    }

    return styles.join("; ");
  }

  // 获取按钮位置类名
  getButtonClassName(index?: 0 | 1) {
    if (typeof index === "number") {
      const position = ["left", "right"];
      return classNames("quark-slider-button-wrapper", {
        [`quark-slider-button-wrapper-${position[index]}`]: true,
      });
    }
    return classNames("quark-slider-button-wrapper", {
      "quark-slider-button-wrapper-left": this.reverse,
      "quark-slider-button-wrapper-right": !this.reverse,
    });
  }

  // 渲染按钮
  renderButton(index?: 0 | 1) {
    const current =
      typeof index === "number"
        ? (this.innerValue as NumberRange)[index]
        : (this.innerValue as number);

    return (
      <div
        ref={index === 0 ? this.button0Ref : this.button1Ref}
        role="slider"
        class={this.getButtonClassName(index)}
        tabindex={this.disabled ? undefined : 0}
        aria-valuemin={this.min}
        aria-valuenow={current}
        aria-valuemax={this.max}
        aria-disabled={this.disabled || undefined}
        aria-readonly={this.readonly || undefined}
        aria-orientation={this.vertical ? "vertical" : "horizontal"}
        onTouchstart={(event: TouchEvent) => {
          this.handleTouchStart(event, index);
        }}
        onTouchmove={this.handleTouchMove}
        onTouchend={this.handleTouchEnd}
        onTouchcancel={this.handleTouchEnd}
        onMousedown={(event: MouseEvent) => {
          this.handleMouseDown(event, index);
        }}
        onClick={(e: MouseEvent) => e.stopPropagation()}
      >
        <slot
          name={
            index === 0
              ? "left-button"
              : index === 1
              ? "right-button"
              : "button"
          }
        >
          <div class="quark-slider-button" style={this.getButtonStyle()}></div>
        </slot>
      </div>
    );
  }

  render() {
    const wrapperClassName = classNames("quark-slider", {
      "quark-slider-vertical": this.vertical,
      "quark-slider-disabled": this.disabled,
    });

    return (
      <div
        ref={this.rootRef}
        class={wrapperClassName}
        style={this.getWrapperStyle()}
        {...{ part: "root" }}
        onClick={this.handleClick}
      >
        <div class="quark-slider-bar" style={this.getBarStyle()}>
          {this.range
            ? [this.renderButton(0), this.renderButton(1)]
            : this.renderButton()}
        </div>
      </div>
    );
  }
}

export default QuarkSlider;
