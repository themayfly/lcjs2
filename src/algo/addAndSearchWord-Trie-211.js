


//                             root
                //           c                                   d
                //     a        o                             a    o
                // r      t    a  l                       d           g
                //            t     a (isBottom:true)                    s


// Trie ( prefix tree ), good for dictionary, typeahead
/**
 * Initialize your data structure here.
 */

const COUNT = 26;
var Node = function(value) {
  this.value = value;
  this.children = {}; // Node {}
  this.isBottom = false;
};

var WordDictionary = function() {
  this.root = new Node('IamGroot');
};

/**
* Adds a word into the data structure.
* @param {string} word
* @return {void}
*/
WordDictionary.prototype.addWord = function(word) {
  let current = this.root;
  for (let ch of word) {
    if (!current.children[ch]) { // ith char is not a child
      current.children[ch] = new Node(ch);
    }
    current = current.children[ch];
  }
  current.isBottom = true;
};

/**
* Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
* @param {string} word
* @return {boolean}
*/
WordDictionary.prototype.search = function(word) {

};

var printTrie = node => {
  console.log(node.value);
  for (let key in node.children) {
    let child = node.children[key];
    if (!child.isBottom) {
      printTrie(child);
    } else {
      console.log(child.value+'\n');
    }
  }
}

var wd = new WordDictionary();
wd.addWord("bad")
wd.addWord("dad")
wd.addWord("mad")
wd.addWord("apple")
wd.addWord("apply")

// console.log('#### wd = ', wd);
printTrie(wd.root);
