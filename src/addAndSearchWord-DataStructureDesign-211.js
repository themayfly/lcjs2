/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
  this.list = []
};

/**
* Adds a word into the data structure.
* @param {string} word
* @return {void}
*/
WordDictionary.prototype.addWord = function(word) {
  if (this.list.indexOf(word) === -1) {
      this.list.push(word)
  }
};

/**
* Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
* @param {string} word
* @return {boolean}
*/
WordDictionary.prototype.search = function(word) {
  if (this.list.indexOf(word) > -1) {
      return true;
  }
  return this.list.some(el => allLetterMatched(el, word));
};

var allLetterMatched = function(a, b) {
  let letterMatched = true;
  for (let i = 0; i < Math.min(a.length, b.length); i++) {
      if (a[i] !== b[i] && b[i] !== '.') {
          letterMatched = false;
      }
  }
  return letterMatched;
}

/**
* Your WordDictionary object will be instantiated and called as such:
* var obj = new WordDictionary()
* obj.addWord(word)
* var param_2 = obj.search(word)
*/

var list = ['bad','dad','mad']
console.log('#### allLetterMatched - ', allLetterMatched('bad','b..'))


["WordDictionary","addWord","addWord","search","search","search","search","search","search"]
[[],["a"],["a"],["."],["a"],["aa"],["a"],[".a"],["a."]]
