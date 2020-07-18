var numberToWords = function (num) {
  const map = {
    'Billion': 10 ** 9, 'Million': 10 ** 6, 'Thousand': 1000,
    'Hundred': 100, 'Ninety': 90, 'Eighty': 80, 'Seventy': 70,
    'Sixty': 60, 'Fifty': 50, 'Forty': 40, 'Thirty': 30,
    'Twenty': 20, 'Ten': 10, 'Nine': 9, 'Eight': 8,
    'Seven': 7, 'Six': 6, 'Five': 5, 'Four': 4,
    'Three': 3, 'Two': 2, 'One': 1
  }
  var decimal = {
    19: 'Nineteen', 18: 'Eighteen', 17: 'Seventeen', 16: 'Sixteen',
    15: 'Fifteen', 14: 'Fourteen', 13: 'Thirteen', 12: 'Twelve',
    11: 'Eleven', 10: 'Ten', 9: 'Nine', 8: 'Eight', 7: 'Seven',
    6: 'Six', 5: 'Five', 4: 'Four', 3: 'Three',
    2: 'Two', 1: 'One', 0: 'Zero'
  }
  if (num < 20) {
    return decimal[num];
  }
  let list = [];
  for (let key in map) {
    let value = map[key];
    if (num && decimal[num]) {
      list.push(decimal[num]);
      break; // exact match
    } else if (num >= value) {
      let div = Math.floor(num / value);
      num = num - (div * value);
      if (value >= 100) {
        list.push(decimal[div] || numberToWords(div));
      }
      list.push(key);
    }
  }
  return list.join(' ');
};
console.log(numberToWords(111))
