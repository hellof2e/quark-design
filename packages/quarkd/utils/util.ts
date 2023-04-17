export const objectToString = Object.prototype.toString;
export const toTypeString = (value: unknown): string =>
  objectToString.call(value);

export const toRawType = (value: unknown): string => {
  // extract "RawType" from strings like "[object RawType]"
  return toTypeString(value).slice(8, -1);
};
export const isArray = Array.isArray;
export const isMap = (val: unknown): val is Map<any, any> =>
  toTypeString(val) === "[object Map]";
export const isSet = (val: unknown): val is Set<any> =>
  toTypeString(val) === "[object Set]";

export const isDate = (val: unknown): val is Date => val instanceof Date;
export const isFunction = (val: unknown): val is Function =>
  typeof val === "function";
export const isString = (val: unknown): val is string =>
  typeof val === "string";
export const isSymbol = (val: unknown): val is symbol =>
  typeof val === "symbol";
export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === "object";

export const isPromise = <T = any>(val: unknown): val is Promise<T> => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
};

export const getPropByPath = (obj: any, keyPath: string) => {
  try {
    return keyPath.split(".").reduce((prev, curr) => prev[curr], obj);
  } catch (error) {
    return "";
  }
};

export const deepMerge = (target: any, newObj: any) => {
  Object.keys(newObj).forEach((key) => {
    const targetValue = target[key];
    const newObjValue = newObj[key];
    if (isObject(targetValue) && isObject(newObjValue)) {
      deepMerge(targetValue, newObjValue);
    } else {
      target[key] = newObjValue;
    }
  });
  return target;
};

/**
 * 判断输入字符串是否为数字或者像素单位
 * @param value 输入值
 * @returns true表示输入值为数字或像素单位，false表示不是
 */
export const isNumericOrPx = (value: string | number): boolean => {
  if (!value) return true;
  return /^\d+$|^\d+px$/.test(`${value}`);
};

/**
 * 将像素单位转换成 vw 单位
 * @param value 像素值
 * @param viewportWidth 设计稿宽度，默认为 375
 * @returns 转换后的值
 * @throws {Error} 当输入值包含非法单位时抛出异常
 */
export const pxToVw = (
  value: string | number,
  { viewportWidth = 375 }: { viewportWidth?: number } = {}
): string | number => {
  const pxNum = parseFloat(value.toString());
  if (!Number.isNaN(pxNum)) {
    const vwNum = (pxNum / viewportWidth) * 100;
    const result = vwNum.toFixed(5) + "vw";
    return result;
  }
  return value;
};
