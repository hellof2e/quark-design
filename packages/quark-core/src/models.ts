import QuarkElement from "./index";

type TypeHint = typeof Boolean | typeof Number | typeof String;
export type converterFunction = (val: any, type?: TypeHint) => any;

// export interface Converter<Type = unknown, TypeHint = unknown> {
//   /**
//    * getAttribute
//    */
//   from: converterFunction<Type, TypeHint>;
//   /**
//    * setAttribute
//    */
//   to: converterFunction<Type, TypeHint>;
// }

export interface PropertyDeclaration {
  /**
   * 是否响应式属性，接收外部的参数变化，会自动加入observedAttributes数组中
   */
  readonly observed?: boolean | string;
  /**
   * 属性类型，会针对类型做不同的特殊处理。
   * Boolean, Number, String
   */
  readonly type?: TypeHint;
  /**
   * 从外部获取属性时的值转换方法
   */
  readonly converter?: converterFunction;
}
