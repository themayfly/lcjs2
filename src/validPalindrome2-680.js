/**
 * @param {string} s
 * @return {boolean}
 */
/**
 * @param {string} s
 * @return {boolean}
 */
function validPalindrome(s) {
    if (!s) {
        return true;
    }
    function isPalindromeRange(input, left, right) {
        while (left < right) {
            if (input[left] !== input[right]) {
                return false;
            }
            left++, right--;
        }
        return true;
    }

    let left = 0,
        right = s.length - 1;
    while (left <= right) {
        if (s[left] === s[right]) {
            left++, right--;
            continue;
        } else {
            return isPalindromeRange(s, left+1, right) || isPalindromeRange(s, left, right-1);
        }
    }
    return true;  
}
  


const validPalindrome = (s) => {
  if (isPalindrome(s)) {
      return true;
  }
  for (let i = 0; i < s.length / 2; i++) {
      let j = s.length - i - 1
      if (s[i] !== s[j]) {
          return isPalindrome(omit(s, i)) || isPalindrome(omit(s, j));
      }
  }
  return true
};

const omit = (s, i) => s.substr(0, i) + s.substr(i + 1);
const isPalindrome = (s) => {
    for (let i = 0; i < Math.floor(s.length/2); i++) {
        if (s[i] !== s[s.length - i - 1]) {
            return false;
        }
    }
    return true;
}

// const isPalindrome = s => {
//     let left = 0,
//         right = s.length - 1;
//     while (left < Math.floor(s.length/2)) {
//       if (s[left] !== s[right]) {
//         return false;
//       }
//       left++;
//       right--;
//     }
//     return true;  
//   }

console.log('#### validPalindrome("abca") ', validPalindromeWhile("abca"))
console.log('#### validPalindrome("abc") ', validPalindromeWhile("abc"))
console.log('#### validPalindrome("deeee") ', validPalindromeWhile("deeee"))
