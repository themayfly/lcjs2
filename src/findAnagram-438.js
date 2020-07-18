/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

//s: "bbaebabacd" p: "abb"

var findAnagrams = function(s, p) {
  // char frequency should be equal
  let freqA = new Array(26).fill(0);
  let freqB = new Array(26).fill(0);
  
  function isAnagram(a, b) {
    if (!a || !b || (a.length !== b.length)) {
      return false;
    }
    freqA.fill(0), freqB.fill(0); // reset 
    for (let i = 0; i < a.length; i++) {
      freqA[a[i].charCodeAt() - 'a'.charCodeAt()]++;
    }
    for (let i = 0; i < b.length; i++) {
      freqB[b[i].charCodeAt() - 'a'.charCodeAt()]++;
    }
    return freqA.join('') === freqB.join('');
  }
  
  let result = [];
  // sliding window
  for (let i = 0; i <= s.length-p.length; i++) {
    let sub = s.slice(i, i+p.length)
    if (isAnagram(sub, p)) {
      result.push(i);
    }
  }
  return result;
};


