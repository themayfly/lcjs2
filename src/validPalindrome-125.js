var isPalindrome = function(s) {
  if (!s) {
    return true;
  }
  s = s.replace(/[^a-z0-9]/ig, '').toLowerCase();
  return s === s.split("").reverse().join("")
  // for (let i = 0; i < Math.floor(s.length / 2); i++) {
  //     let start = i;
  //     let end = s.length - i - 1;
  //     console.log(s[start], s[end]);
  //     if (s[start] !== s[end]) {
  //         return false;
  //     }
  // }
  // return true;  
}
