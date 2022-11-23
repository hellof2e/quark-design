import zhCN from "./lang/zh-CN";
import zhTW from "./lang/zh-TW";
import enUS from "./lang/en-US";
import idID from "./lang/id-ID";
import thTH from "./lang/th-TH";
import assign from "lodash.assign";
export { zhCN, zhTW, enUS, idID, thTH };
type Lange = Record<string, unknown>;

export class Local {
  static current: Lange = zhCN;
  static use(newLang: Lange) {
    this.current = newLang;
  }
  static add(messgae: Lange) {
    const tempCurrent = assign({}, this.current, messgae);
    this.current = tempCurrent;
  }
}

export default Local;
