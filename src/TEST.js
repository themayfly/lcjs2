function toEng3(n, unit) { // unit Billion Million Thousand
  let list = [];
  if (n === 0) {
    return list;
  }
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
}

let u100s = {
  'Ninety': 90, 'Eighty':80, 'Seventy': 70, 'Sixty':60, 'Fifty':50,
  'Fourty': 40, 'Thirty': 30, 'Twenty': 20
}

let u20s = {
 20: 'Twenty', 19: 'Nineteen', 18: 'Eighteen', 17: 'Seventeen', 
 16: 'Sixteen', 15: 'Fifteen', 14: 'Fourteen', 13: 'Thirteen', 
 12: 'Twelve', 11: 'Eleven', 10: 'Ten', 9: 'Nine', 8: 'Eight', 
 7: 'Seven', 6: 'Six', 5: 'Five', 4: 'Four', 3: 'Three', 2: 'Two', 1: 'One'
};
console.log(toEng3(345, 'Million'))