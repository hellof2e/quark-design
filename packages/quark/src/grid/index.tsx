import QuarkElement, {
  customElement,
  property,
  state,
  createRef,
} from '@quarkd/core';
import {slotAssignedElements} from '../../utils/public';
import style from './style.css';
import itemStyle from './itemStyle.css';
export interface Props {
  column?: number
  noborder?: boolean
  square?: boolean
}
export interface ItemProps {
  text?: string
  icon?: string
  iconsize?: string
}
@customElement({
  tag: 'quark-grid-item',
  style: itemStyle,
})
class QuarkGridItem extends QuarkElement {
  @property()
  text: string = '';

  @property()
  icon: string = '';

  @property()
  iconsize: string | undefined = undefined;

  @state() 
  style: any = {}

  setStyle = (style:any) => {
    this.style = style;
  }

  renderIcon = () => {
    if (!this.icon) {
      return null;
    }
    if (this.icon && this.icon.includes('http')) {
      return <img src={this.icon} class="quark-grid-icon" style={{width: this.iconsize}}/>;
    }
    return null;
  }

  render() {
    return (
      <div class="quark-grid-item" style={this.style}>
        <slot>
          { this.renderIcon() }
          <span class="quark-grid-text">{this.text}</span>
        </slot>
      </div>
    );
  }
}
export { QuarkGridItem }

@customElement({
  tag: 'quark-grid',
  style,
})
class QuarkGrid extends QuarkElement {
  @property()
  column: string = '4';

  @property({
    type: Boolean,
  })
  noborder: boolean = false; // 是否显示边框

  @property({
    type: Boolean,
  })
  square: boolean = false; // 是否将格子固定为正方形


  slotRef: any = createRef();

  getNodeStyle = (index: number) => {
    const assignedNodes = this.slotRef.current?.assignedNodes();
    const nodes = slotAssignedElements(assignedNodes);
    const borderWidth = 0.5;
    let borderBottom: string | undefined = `${borderWidth}px solid #dddddd`;
    let borderRight: string | undefined = `${borderWidth}px solid #dddddd`;

    const column = parseInt(this.column);
    const itemWidth = (document.body.clientWidth - (column -  1) * borderWidth) / column;
    if ((index + 1) % column === 0 || (index === nodes.length - 1)) { // 最后一列 或者是最后一个
      borderRight = undefined
    }

    const rows = nodes.length % column > 0 ? (Math.floor(nodes.length / column)) + 1 : nodes.length / column;

    const currentRow = (index + 1) % column > 0 ? ( Math.floor((index + 1) / column )) + 1 : (index + 1) / column;
    if (currentRow === rows) { // 最后一行
      borderBottom = undefined;
    }

    if (this.noborder) {
      borderRight = undefined;
      borderBottom = undefined;
    }
    
    return {
      width: `${itemWidth}px`,
      height: this.square ? `${itemWidth}px` : 'auto',
      borderRight: borderRight,
      borderBottom: borderBottom
    }
  }

  handleSlotChange = () => {
    const {current} = this.slotRef
    if (!current) {
      return;
    }
    
    const nodes = slotAssignedElements(current.assignedNodes());
    nodes.forEach((node: Element, i: number) => {
      const style = this.getNodeStyle(i);
      // @ts-ignore
      node.setStyle(style);
    })
  }

  render() {
    return (
      <div class="quark-grid">
        <slot
            onslotchange={this.handleSlotChange}
            ref={this.slotRef}
          ></slot>
      </div>
    );
  }
}

export default QuarkGrid;