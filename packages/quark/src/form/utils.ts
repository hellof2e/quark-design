import { IRuleItem } from './type';

const isEmpty = (value: string | undefined) => Boolean(value);

export default (rules: IRuleItem[]) => (callBack: any) => {
  try {
    for (let i = 0; i < rules.length; i += 1) {
      let validateStatus = true;
      const { validator, value, required } = rules[i];
      // 自定义校验函数
      if (validator) {
        validateStatus = validator(value);
      } else if (required) {
        console.log(123, value);
        validateStatus = isEmpty(value);
      }
      rules[i].validateStatus = validateStatus;
      if (typeof callBack === 'function' && !validateStatus) callBack(rules[i]);
    }
  } catch (error) {
    console.error(error);
    console.warn(`
     所属值类型------
     value：所需校验值
     message: 错误信息,
     required: 是否必填,
   `);
  }
  return rules.filter((i) => !i.validateStatus).length === 0;
};

const arrayEmpty = (arr: any[]) => {
  if (!Array.isArray(arr)) return true;
  return arr.length !== 0;
};

export const filterSymbol = (data: any) =>
  Object.keys(data)
    .filter((key) => typeof data[key] !== 'symbol' && arrayEmpty(data[key]))
    .reduce((acc, key) => ({ ...acc, [key]: data[key] }), {});

export const booleanTagNames = [
  'QUARK-CHECKBOX',
  'QUARK-SWITCH',
  'QUARK-RADIO'
];
export const radio = 'QUARK-RADIO';

export const radioGroup = 'QUARK-RADIO-GROUP';
