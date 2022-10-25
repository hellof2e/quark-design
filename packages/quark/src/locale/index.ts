import zhCN from "./lang/zh-CN";
import assign from "lodash.assign";
type Lange = Record<string,any>;

export class Local {
    static current: Lange = zhCN;
    static use(newLang: Lange) {
        this.current = newLang;
    }
    static add(messgae: Lange) {
        const tempCurrent = assign({}, this.current, messgae)
        this.current = tempCurrent;
    }
}

export default Local;