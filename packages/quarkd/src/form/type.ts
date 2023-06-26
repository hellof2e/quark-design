export interface IRuleItem {
  el: any;
  name: string;
  value?: string;
  message?: string;
  required?: boolean;
  validator?: (value: any) => boolean;
  validateStatus?: boolean;
  pattern?: RegExp;
}

export interface IFormItem {
  value?: string;
  checked?: boolean;
  values?: any[]; // 兼容 picker uploader
  name: string;
  tagName: string;
  parentNode: Element;
}
