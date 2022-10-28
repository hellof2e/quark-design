import BScroll from '@better-scroll/core';
import Slide from '@better-scroll/slide';
import QuarkElement, {
  Fragment,
  createRef,
  customElement,
  state,
  property
} from '@quarkd/core';
import '../popup';

import style from './style.css';
BScroll.use(Slide);

@customElement({
  tag: 'quark-image-preview',
  style,
})
class QuarkImagePreview extends QuarkElement {
  public onClose: null | ((index: number) => void) = null;
  public onChange: null | ((index: number) => void) = null;
  constructor() {
    super();
  }
  @property({
    type: Boolean
  })
  open: boolean = false;

  @state()
  slide: any = null;

  @state()
  images: string[] = [];

  @state()
  index: number = 0;

  startX: number = 0;

  startY: number = 0;

  endX: number | undefined = 0;

  endY: number | undefined = 0;

  isFn: boolean = false;


  wrapRef = createRef() as any;
  init = async (open) => {
    if (!this.images.length) return;
    if (this.slide) return
    const index = this.index > this.images.length ? 0 : this.index;
    try {
      await this.initSlide(index)
    } catch (error) {
      console.log(error, 'error')
    }
    this.eventBind()
   if(this.isFn) this.open = true
  };
  initSlide(index) {
    return new Promise((resolve) => {
      setTimeout(() => { 
        this.slide = new BScroll(this.wrapRef.current, {
          scrollX: true,
          scrollY: false,
          autoplay: false,
          loop: false,
          momentum: false,
          bounce: false,
          tap: 'tap',
          click: true,
          preventDefaultException: {
            className:  /(^|\s)quark-img(\s|$)/
          },
          slide: {
            loop: true,
            threshold: 100,
            autoplay: false
          }
        });
        this.slide.on('slideWillChange', (page: any) => {
          if(!page) return
          this.index = page.pageX;
          if (this.onChange) this.onChange(page.pageX);
          this.$emit('change', page.pageX);
        });
        this.slide.goToPage(index, 0);
        resolve(true)
      }, 100)
    })
  }
  componentWillUnmount(): void {
    if (this.slide) this.slide.destroy();
    this.slide = null;
  }
  // componentDidUpdate(propName: string, oldValue: string, newValue: string): void {
  //   if (propName === 'open') {
  //     if (!newValue) {
  //         // if (this.slide) this.slide.destroy();
  //         // this.slide = null;
  //     }
  //   }
  // }
  setData = ({
    images,
    startPosition,
    close,
    change,
    open
  }: {
    images: string[];
    startPosition: number;
    close: () => void | null;
    change: (index: number) => void | null;
    open?: boolean
  }) => {
    this.images = images;
    this.index = startPosition || 0;
    this.onClose = close;
    this.onChange = change;
    if (this.wrapRef && this.wrapRef.current) this.init(open);
  };

  myClose = () => {
    if (this.onClose) this.onClose(this.index);
    this.open = false;
  };
  eventBind() {
    this.removeEvent();
    this.addEventListener('touchstart', this.handleTouchStart);
    this.addEventListener('touchmove', this.handleTouchMove);
    this.addEventListener('touchend', this.handleTouchEnd);
  }
  removeEvent = () => {
    this.removeEventListener('touchstart', this.handleTouchStart);
    this.removeEventListener('touchmove', this.handleTouchMove);
    this.removeEventListener('touchend', this.handleTouchEnd);
  };
  handleTouchStart = (e: any) => {
    this.startX = e.changedTouches[0].clientX;
    this.startY = e.changedTouches[0].clientY;
    this.endX = undefined;
    this.endY = undefined;
  };

  handleTouchMove = (e: any) => {
    this.endX = e.changedTouches[0].clientX;
    this.endY = e.changedTouches[0].clientY;
  };

  handleTouchEnd = () => {
    const angle = this.angle(
      { X: this.startX, Y: this.startY },
      // @ts-ignore
      { X: this.endX, Y: this.endY }
    );
    if (this.endX === undefined || this.endY === undefined) {
      this.myClose()
      return;
    }
    if (Math.abs(angle) > 30) {
      this.myClose()
      return;
    }
    if (this.endX > this.startX) {
      // 右滑
    //  console.log('右滑')
      
    } else {
      // 左滑
    // console.log('左滑')
    }
  };
  angle(start: { X: number; Y: number }, end: { X: number; Y: number }) {
    const X = end.X - start.X;
    const Y = end.Y - start.Y;
    // 返回角度 /Math.atan()返回数字的反正切值
    return (360 * Math.atan(Y / X)) / (2 * Math.PI);
  }
  close() {
    this.open = false
  }
  render() {
    const showIndex = `${this.index + 1}`;
    return (
      <Fragment>
        <slot
          name="indicator"
          class="quark-imagepreview-indicator"
          style={{ display: this.open ? 'inline-block' : 'none' }}
        >
          <p>
            {showIndex}/{this.images.length}
          </p>
        </slot>

        <quark-popup position="center" open={this.open} onclosed={this.myClose}>
          <div class="quark-imagepreview-slide">
            <div class="quark-imagepreview-slide-wrapper" ref={this.wrapRef}>
              <div class="quark-imagepreview-slide-content">
                {this.images.map((item, index) => (
                  <div key={index} class="quark-imagepreview-item">
                    <img src={item} class='quark-img' onClick={this.myClose} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </quark-popup>
      </Fragment>
    );
  }
}

interface IImagePreview {
  images: string[];
  startPosition?: number;
  open?: boolean;
  close?: () => void;
  change?: (index: number) => void;
}
// 函数调用
export default function imagePreview(params: IImagePreview): QuarkImagePreview{
  const preview = document.createElement(
    'quark-image-preview'
  ) as QuarkImagePreview;
  console.log(preview, 'PRE0')
  document.body.appendChild(preview);
  console.log(preview, 'PRE1')
  const { images = [], startPosition, close, change, } = params;
  preview.isFn = true;
  preview.setData({ images, startPosition, close, change, open: true });
  return preview;
}

export { QuarkImagePreview };
