// 用于组件源码demo语言包
import ZhCNLang from './lang/zh-CN';
import EnUSLang from './lang/en-US';

export const isObject = (val: unknown): val is Record<any, any> => val !== null && typeof val === 'object';

export const deepMerge = (target: any, newObj: any) => {
  Object.keys(newObj).forEach((key) => {
    let targetValue = target[key];
    let newObjValue = newObj[key];
    if (isObject(targetValue) && isObject(newObjValue)) {
      deepMerge(targetValue, newObjValue);
    } else {
      target[key] = newObjValue;
    }
  });
  return target;
};

// 组件默认语言设置
export type Lang = Record<string, any>;
const langs: Lang = {
  'zh-CN': new ZhCNLang(),
  'en-US': new EnUSLang()
};
export class Locale {
  static currentLang = 'zh-CN';
  static languages(): Lang {
    return langs[this.currentLang];
  }
  static use(lang: string, newLanguages?: any) {
    if (newLanguages) {
      langs[lang] = new newLanguages();
    }
    this.currentLang = lang;
  }
  static merge(lang: string, newLanguages: any) {
    if (newLanguages) {
      if (langs[lang]) {
        deepMerge(langs[lang], newLanguages);
      } else {
        this.use(lang, newLanguages);
      }
    }
  }
}
export default Locale;
