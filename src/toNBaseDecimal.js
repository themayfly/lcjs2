// 405. To hexa decimal

let DIGITS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const _toNBase = (num, n) => {
  return parseInt(num, 10).toString(n);
};

const toNBase = (num, n) => {
  num = parseInt(num, 10);
  let result = "";
  if (num === 0) {
    return "0";
  }
  if (num < 0) {
    num = 2 ** 32 + num;
  }
  while (num > 0) {
    let mod = num % n;
    console.log("#### mod = ", mod);
    result = DIGITS[mod] + result;
    num = Math.floor(num / n);
  }
  return result;
};

console.log("#### toNBase ", _toNBase("20000", 16), toNBase("20000", 16));
