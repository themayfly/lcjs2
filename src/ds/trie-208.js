/**
 * Initialize your data structure here.
 */
var Node = function(value) {
  this.value = value;
  this.children = {};
  this.isBottom = false;
};

var Trie = function() {
  this.root = new Node();
};

/**
* Inserts a word into the trie.
* @param {string} word
* @return {void}
                      root
                  c
              a
          n   r   t

can

root
c
a
n

*/
Trie.prototype.insert = function(word) {
  let cursor = this.root;
  for (let char of word) {
      if (!cursor.children[char]) {
          cursor.children[char] = new Node(char);
      }
      cursor = cursor.children[char];
  }
  cursor.isBottom = true;
};

/**
* Returns if the word is in the trie.
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  let cursor = this.root;
  for (let char of word) {
      if (!cursor.children[char]) {
          return false;
      }
      cursor = cursor.children[char];
  }
  return cursor.isBottom;
};

/**
* Returns if there is any word in the trie that starts with the given prefix.
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(word) {
  let cursor = this.root;
  for (let char of word) {
      if (!cursor.children[char]) {
          return false;
      }
      cursor = cursor.children[char];
  }
  return true;
};

/**
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/
