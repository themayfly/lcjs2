// 405. To hexa decimal

const _toHex = num => {
  return parseInt(num, 10).toString(16);
};

const toHex = num => {
  const DIGITS = "0123456789abcdef";
  num = parseInt(num, 10);
  let result = "";
  if (num === 0) {
    return "0";
  }
  if (num < 0) {
    num = 2 ** 32 + num;
  }
  while (num > 0) {
    let mod = num % 16;
    result = DIGITS[mod] + result;
    num = Math.floor(num / 16);
  }
  return result;
};

console.log("#### toHex ", _toHex("31"), toHex("31"));
