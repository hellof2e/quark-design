import QuarkElement, {
  property,
  customElement,
  createRef,
  Fragment,
  state
} from '@quarkd/core';
import "../loading";
import style from './style.css';

@customElement({
  tag: 'quark-countdown',
  style,
})
class QuarkButton extends QuarkElement {
  constructor() {
    super();
  }

  @property()
  time: string = '0'

  @property()
  format: string = 'hh:mm:ss'

  @state()
  totalTime: number = 0;

  timeCounter: any = null;

  setUnit = (val) => {
    return val < 10 ? `0${val}` : val
  }
  start = () => {
    this.totalTime = Number(this.time)
    const interval = 1000;
    let count = 0
    const startTime = new Date().getTime()
    const countDownStart = () => {
      count += 1
      // 防止误差
      const offset = new Date().getTime() - (startTime + count * interval)
      let nextTime = interval - offset
      if (nextTime < 0) {
        nextTime = 0
      }
      this.totalTime = this.totalTime - interval

      if (this.totalTime === 0) {
        this.$emit('end');
      }
     
      if (this.totalTime <= 0) {
        clearTimeout(this.timeCounter)
      } else {
       this.timeCounter = setTimeout(countDownStart, nextTime)
      }
    }
    if (this.totalTime >= 0) {
      this.timeCounter = setTimeout(countDownStart, interval)
    }
  }
  calculateShow = (value) => {
    const dot = this.format.slice(2, 3)
    const { format = '' } = this
    const arr = format.split(dot).map(i => i.toLocaleLowerCase())
    return arr.find(i => i === value)
  }
  componentDidUpdate(propName: string, oldValue: string, newValue: string) {
    if (propName === 'time' && newValue !== oldValue) {
      if (newValue && Number(newValue) > 0) { 
        this.start()
      }
    }
  }
  render() {
    const { totalTime } = this
    const hours = parseInt(`${totalTime / 1000 / 60 / 60 % 24}`, 10)
    const minutes = parseInt(`${totalTime / 1000 / 60 % 60}`, 10)
    const seconds = parseInt(`${totalTime / 1000 % 60}`, 10)
    const countdownSecond = this.setUnit(seconds)
    const countdownMin = this.setUnit(minutes)
    const countdownHour = this.setUnit(hours)
    const dot = this.format.slice(2, 3)
    return (
      <Fragment>
        {this.calculateShow('hh') && <Fragment>
          <span class='num'>
            {countdownHour}
          </span>
          <span class='dot'>{dot}</span>
          </Fragment>}
        {this.calculateShow('mm') && <Fragment>
          <span class='num'>
          {countdownMin}
          </span>
          <span class='dot'>{dot}</span>
          </Fragment>}
        {this.calculateShow('ss') &&<span class='num'>
          {countdownSecond}
        </span>}
      </Fragment>
    );
  }
}

export default QuarkButton;
