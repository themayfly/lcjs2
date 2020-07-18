var addBinary = function(a, b) {
  let arrA = [...a], 
      arrB = [...b],
      carry = 0,
      result = [];
  while (arrA.length || arrB.length) {
    let A = (arrA.pop() || '0')*1,
        B = (arrB.pop() || '0')*1,
        sum = A+B+carry;
    carry = Math.floor(sum/2);
    result.push(sum%2);
  }
  if (carry > 0) {
    result.push(carry);
  }
  return result.reverse().join('');
}
  
var addBinaryVerify = function(a, b) {
  let sum = parseInt(a, 2) + parseInt(b, 2);
  return sum.toString(2);
};

const DIGITS = "0123456789abcdefghijklmnopqrstuvwxyz";
const toNBaseDecimal = (inputBase10, n) => {
  // 7, 2 => 111 ( 4=2**2, 2=2**1, 1=2**0 )
  let target = inputBase10;
  let results = [];
  while (target > 0) {
    let div = Math.floor(target / n);
    let mod = target % n;
    if (div > 0) {
      results.push(DIGITS[div]);
    }
    if (div === 0 && mod > 0) {
      results.push(DIGITS[mod]);
    }
    target = div;
  }
  return results.join("");
};

console.log("####toNBaseDecimal = ", toNBaseDecimal(7, 2));


const addBinaryCarry = (a, b) => {

}


/////////////////////////////
var ____addBinary = function(a, b) {
  return dec2Bi(bi2Dec(a) + bi2Dec(b));
};


// "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101"
// "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"


let bi2Dec = (a) => {
  return a.split('').reverse().reduce((acc, cur, idx) => {
      return cur === '1' ? (acc + Math.pow(2, idx)) : acc;
  }, 0);
}

let dec2Bi = (a) => {
  const DIGITS = '01';
  let target = a;
  let result = '';
  if (a === 0) {
      return '0';
  }
  while(target > 0) {
      let mod = target % DIGITS.length;
      let div = Math.floor(target / DIGITS.length);
      result = DIGITS[mod] + '' + result;
      target = div;
  }
  return result || '0';
}
////////////////////////////////////////

console.log(addBinary(
  "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
  "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"));


  // "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
  // "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
