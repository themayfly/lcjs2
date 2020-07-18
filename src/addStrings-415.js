/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let result = []
  let arr1 = [...num1]
  let arr2 = [...num2]
  let carryup = 0;
  while (arr1.length || arr2.length) {
    let val1 = arr1.length ? arr1.pop()*1 : 0
    let val2 = arr2.length ? arr2.pop()*1 : 0
    let sum = val1 + val2 + carryup
    carryup = Math.floor(sum / 10)
    result.push(sum % 10)
  }
  if (carryup > 0) {
    result.push(carryup)
  }
  return result.reverse().join('')
};

console.log('#### addStrings = ', addStrings('213', '100'))
