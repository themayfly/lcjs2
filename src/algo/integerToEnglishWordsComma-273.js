/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
  if (num === 0) return 'Zero';
  let u100s = {
    'Ninety': 90, 'Eighty':80, 'Seventy': 70, 'Sixty':60, 'Fifty':50,
    'Forty': 40, 'Thirty': 30, 'Twenty': 20
  };
  let u20s = {
   20: 'Twenty', 19: 'Nineteen', 18: 'Eighteen', 17: 'Seventeen', 
   16: 'Sixteen', 15: 'Fifteen', 14: 'Fourteen', 13: 'Thirteen', 
   12: 'Twelve', 11: 'Eleven', 10: 'Ten', 9: 'Nine', 8: 'Eight', 
   7: 'Seven', 6: 'Six', 5: 'Five', 4: 'Four', 3: 'Three', 2: 'Two', 1: 'One'
  };
  function toEng3(n, unit) { // unit Billion Million Thousand
    let list = [];
    if (n === 0) return list;
    if (n >= 100) {
      list.push(`${u20s[Math.floor(n / 100)]} Hundred`);
    }
    let under100 = n % 100;
    if (under100 > 20) {
      for (let key in u100s) {
        if (u100s[key] <= under100) {
          list.push(key);
          if (under100 % 10 > 0) {
            list.push(u20s[under100 % 10]);
          }
          break;
        }
      }
    } else if (under100 > 0) {
      list.push(u20s[under100]);
    }
    list.push(unit);
    return list;
  };
  // 2,942,345,678 -> 2B, 9H 42M, 3H 45T, 6H 78
  let s = [], target;
  if (num >= 10**9) { // Billion
    target = Math.floor(num / 10**9);
    if (target > 0) s.push(...toEng3(target, 'Billion'));
  }
  if (num >= 10**6) { // Million
    target = Math.floor((num % 10**9) / 10**6);
    if (target > 0) s.push(...toEng3(target, 'Million'));
  }
  if (num >= 10**3) {
    target = Math.floor((num % 10**6) / 10**3);
    if (target > 0) s.push(...toEng3(target, 'Thousand'));
  }
  if (num > 0) {
    target = Math.floor((num % 10**3));
    if (target > 0) s.push(...toEng3(target, ''));
  } 
  return s.join(' ').trim()
}  
console.log(numberToWords(1000010))
