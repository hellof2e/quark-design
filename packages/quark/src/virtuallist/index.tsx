import QuarkElement, {
  property,
  state,
  createRef,
  customElement,
} from "@quarkd/core";
import "../loading";
import style from "./style.css";

export interface Props {
  itemheight: number;
  containerheight: number;
}
@customElement({
  tag: "quark-virtuallist",
  style,
})
class QuarkVirtualList extends QuarkElement {
  @property({
    type: Number,
  })
  itemheight = 50;

  @property({
    type: Number,
  })
  containerheight =
    document.documentElement.clientHeight || document.body.clientHeight || 667;

  @state()
  listData: any[] = [];

  @state()
  visibleData: any[] = [];

  @state()
  renderItem: (item: any) => Element = () => null;

  @state()
  startOffset = 0;

  prevStart = 0;

  prevEnd = 0;

  virtualListRef: any = createRef();
  containerRef: any = createRef();

  setListData(listData: any[]) {
    this.listData = listData;
    this.updateVisibleData();
  }

  setRenderItem(renderItem: (item: any) => Element) {
    this.renderItem = renderItem;
  }

  updateVisibleData = (scrollTop = 0) => {
    const start = Math.floor(scrollTop / this.itemheight);
    const visibleItemCnt = Math.ceil(this.containerheight / this.itemheight);
    const end = Math.min(start + visibleItemCnt, this.listData.length) + 1;
    if (this.prevStart !== start || this.prevEnd !== end) {
      this.visibleData = this.listData.slice(start, end);
      this.prevStart = start;
      this.prevEnd = end;
      this.startOffset = start * this.itemheight;
    }
    if (start + visibleItemCnt >= this.listData.length) {
      this.$emit("load");
    }
  };

  handleListScroll = () => {
    const { current } = this.virtualListRef;
    if (!current) {
      console.warn("virtualListRef not find");
      return;
    }
    const scrollTop = current.scrollTop;
    this.updateVisibleData(scrollTop);
  };

  componentDidMount = () => {
    this.updateVisibleData();
  };

  renderList = () => {
    const list = this.visibleData.map((item) => this.renderItem(item));
    if (this.containerRef.current) {
      this.containerRef.current.innerHTML = list.join("\n");
    }
  };

  render() {
    return (
      <div
        ref={this.virtualListRef}
        class="quark-virtual-list"
        style={{ height: this.containerheight }}
        onScroll={this.handleListScroll}
      >
        <div
          class="quark-virtual-list-phantom"
          style={{ height: this.listData.length * this.itemheight }}
        ></div>
        <div
          ref={this.containerRef}
          class="quark-virtual-list-container"
          style={{ transform: `translate3d(0, ${this.startOffset}px, 0)` }}
        >
          {this.renderList()}
        </div>
      </div>
    );
  }
}

export default QuarkVirtualList;
