export const checkFalse = (value: any): boolean => {
  const isFalseArray = [null, 'false', false];
  const isFalse = isFalseArray.includes(value);
  return isFalse;
};

export const isNumber = (val: any): boolean => {
  if (val === '' || val === ' ' || val === null || val === undefined) {
    return false;
  }
  if (Number.isNaN(Number(val))) {
    return false;
  }
  return true;
};

export const addUnit = (value?: string | number): string | undefined => {
  if (value !== undefined && value !== null) {
    if (typeof value === 'number' || /^\d+(\.\d+)?$/.test(value)) {
      return `${value}px`;
    }
    return String(value);
  }
  return undefined;
};

export const throttle = (func: Function, delay = 0, atleast = 200) => {
  let timer: any = null;
  let lastRun = 0;
  return (...args: any) => {
    const now = +new Date();
    if (timer) {
      clearTimeout(timer);
    }
    if (now - lastRun > atleast) {
      lastRun = now;
      func.apply(this, args);
    } else {
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    }
  };
};

export const inBrowser = typeof window !== 'undefined';
