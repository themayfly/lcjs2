var WordDictionary = function() {
    this.map = {};
  };
  
  /**
   * Adds a word into the data structure. 
   * @param {string} word
   * @return {void}
   */
  WordDictionary.prototype.addWord = function(word) {
    if (!word) {
      return;
    }
    let len = word.length;
    this.map[len] = this.map[len] || {};
    this.map[len][word] = word;
  };
  
  /**
   * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
   * @param {string} word
   * @return {boolean}
   */
  WordDictionary.prototype.search = function(word) {
    if (!word) {
      return false;
    }
    if (this.map[word.length] && this.map[word.length][word]) {
      return true;
    }
    let matched = false;
    if (word.match(/\./)) { // check if with dot
      for (let wKey in this.map[word.length]) {
        // if (wKey.match(new RegExp(word))) {
        //   return true;
        // }
        let matchingChCount = 0;
        for (let i = 0; i<word.length; i++) {
          if (word[i] === '.' || word[i] === wKey[i]) {
            matchingChCount++;
          }
        }
        if (matchingChCount === word.length) {
          matched = true;
        }
      }
    }
    return matched;
  };
  
  