import zhCN from "./lang/zh-CN";
import zhTW from "./lang/zh-TW";
import enUS from "./lang/en-US";
import idID from "./lang/id-ID";
import thTH from "./lang/th-TH";
import jaJP from "./lang/ja-JP";
import frFR from "./lang/fr-FR";
import assign from "lodash.assign";

export { zhCN, zhTW, enUS, idID, thTH, jaJP, frFR };

type Lange<T> = { [E in keyof T]: T[E] };

export class Local {
  static current: Lange<typeof zhCN> = zhCN;
  static use(newLang) {
    this.current = newLang;
  }
  static add(message) {
    const tempCurrent = assign({}, this.current, message);
    this.current = tempCurrent;
  }
}

export default Local;
