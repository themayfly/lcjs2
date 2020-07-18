// "lee(t(c)o)de)"
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  // basic edge case
  if (!s || !s.match(/\(|\)/)) {
    return s;
  }
  s = [...s]; // string into array ( 'abc' => ['a','b','c'])
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else if (s[i] === ')') { 
      if (stack.length > 0) { // pairing with previously pushed to stack
        stack.pop();
      } else {
        s[i] = ''; // left over which has no pair
      }
    }
  }
  for(let i of stack) {
    s[i] = "";
  }
  return s.join('');
};

