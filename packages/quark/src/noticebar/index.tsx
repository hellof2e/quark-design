import QuarkElement, {
  property,
  createRef,
  customElement
} from '@quarkd/core';
import '@quarkd/icons/lib/notify';
import '@quarkd/icons/lib/arrow-right';
import style from './style.css';

@customElement({
  tag: 'quark-noticebar',
  style
})
class QuarkNoticebar extends QuarkElement {
  @property()
  text: string = '';

  @property()
  bgcolor: string = '';

  @property()
  color: string = '';

  @property({ type: Boolean })
  lefthide: boolean = false;

  @property({ type: Boolean })
  righthide: boolean = false;

  @property()
  multiple: number = 1;

  rightSlotRef = createRef();

  handleRightClick = () => {
    this.$emit('rightclick');
  };

  handleRightSlotChange = () => {
    const { current } = this.rightSlotRef;
    if (current) {
      const hasChild = current.assignedNodes().length;
      current.style.paddingRight = hasChild ? '0px' : '11px';
    }
  };

  render() {
    return (
      <div style={{backgroundColor: this.bgcolor, color: this.color}}>
        <slot name="left" class="quark-noticebar-left">
          {!this.lefthide && <quark-icon-notify size="15" />}
        </slot>
        <slot name="text">
          <span class="quark-noticebar-text" style={{ WebkitLineClamp: this.multiple }}>{this.text}</span>
        </slot>
        <slot
          name="right"
          class="quark-noticebar-right"
          ref={this.rightSlotRef}
          onslotchange={this.handleRightSlotChange}
        >
          {!this.righthide && (
            <quark-icon-arrow-right
              size="15"
              onClick={this.handleRightClick}
            />
          )}
        </slot>
      </div>
    );
  }
}

export default QuarkNoticebar;
