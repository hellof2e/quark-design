const getMonthEndDay = (year, month) => 32 - new Date(year, month - 1, 32).getDate();

const padZero = (num, targetLength = 2)  => {
  let str = num + "";
  while (str.length < targetLength) {
    str = "0" + str;
  }
  return str;
}
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const times = (n, iteratee) =>  {
  if (n < 0) {
    return [];
  }
  const result = Array(n);
  let index = -1;
  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}
const isDate = (val) => Object.prototype.toString.call(val) === "[object Date]" && !Number.isNaN(val.getTime());

function getTrueValue(value) {
  if (!value) {
    return 0;
  }
  while (Number.isNaN(parseInt(value, 10))) {
    if (value.length > 1) {
      value = value.slice(1);
    } else {
      return 0;
    }
  }
  return parseInt(value, 10);
}

export {
  getMonthEndDay,
  padZero,
  times,
  isDate,
  clamp,
  getTrueValue
}