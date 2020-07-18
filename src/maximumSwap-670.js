/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  if (num < 10) return num;
  let digits = (num+'').split('');
  let map = {};
  digits.forEach((v, i) => map[v] = i);
  for (let i=0;i<digits.length;i++) {
    let num = digits[i]*1;
    for (let r = 9; r > num; r--) {
      // bigger number's position is on right hand side -> should swap
      let cursorIdx = map[r];
      if (cursorIdx && (cursorIdx > i)) { 
        // swap 
        [digits[i], digits[cursorIdx]] = [digits[cursorIdx], digits[i]];
        return digits.join("");
      }
    }
  }
  return num;
};