export const noop = (...agrs) => {};

export function getPropByPath(obj, path, strict) {
  let tempObj = obj;
  path = path.replace(/\[(\w+)\]/g, ".$1");
  path = path.replace(/^\./, "");

  const keyArr = path.split(".");
  let i = 0;
  for (let len = keyArr.length; i < len - 1; ++i) {
    if (!tempObj && !strict) break;
    const key = keyArr[i];
    if (key in tempObj) {
      tempObj = tempObj[key];
    } else {
      if (strict) {
        throw new Error("please transfer a valid prop path to form item!");
      }
      break;
    }
  }
  return {
    o: tempObj,
    k: keyArr[i],
    v: tempObj ? tempObj[keyArr[i]] : null,
  };
}

export const radio = "QUARK-RADIO";
export const radioGroup = "QUARK-RADIO-GROUP";
export const field = "QUARK-FIELD";
export const checkbox = "QUARK-CHECKBOX";
export const checkboxGroup = "QUARK-CHECKBOX-GROUP";
export const swicth = "QUARK-SWITCH";
export const rate = "QUARK-RATE";
export const stepper = "QUARK-STEPPER";
export const textarea = "QUARK-TEXTAREA";
export const uploader = "QUARK-UPLOADER";

export const formTagNamesMap = {
  [checkboxGroup]: checkboxGroup,
  [checkbox]: checkbox,
  [radioGroup]: radioGroup,
  [radio]: radio,
  [field]: field,
  [swicth]: swicth,
  [rate]: rate,
  [stepper]: stepper,
  [textarea]: textarea,
  [uploader]: uploader,
};
