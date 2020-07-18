/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  let incCount = 0;
  let decCount = 0;
  let flatCount = 0;
  
  for (let i = 1; i < A.length; i++) {
    let prev = A[i-1]
    let cur = A[i]
    if (prev < cur) {
      incCount++;
    } else if (prev > cur) {
      decCount++;
    }
    if (incCount > 0 && decCount > 0) {
      return false;
    }
  }
  return true;
};