/**
 * @param {string} s
 * @return {string[]}
 */

 /*
  Example 1:
  Input: "()())()"
  Output: ["()()()", "(())()"]

  Example 2:
  Input: "(a)())()"
  Output: ["(a)()()", "(a())()"]

  Example 3:
  Input: ")("
  Output: [""]
 */
var removeInvalidParentheses = function(s) {
  let result = [];
  let queue = [s];

  // 

};

var isValid = function(str) {
  let countOpen = 0;
  let countClose = 0;
  for (let s of str) {
    if (s === '(') {
      countOpen++;
    } else if (s === ')') {
      if (countOpen === 0) {
        return false;
      }
      countClose++;
    }
  }
  return countOpen === countClose;
};