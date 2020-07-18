/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---

 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
let t5 = new TreeNode(5);
let t4 = new TreeNode(4);
let t2 = new TreeNode(2, null, t5);
let t3 = new TreeNode(3, null, t4);
let t1 = new TreeNode(1, t2, t3);

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var rightSideView = function(root) {
  let result = [];
  // if root is empty
  if (!root) {
    return [];
  }
  // bfs traverse
  let queue = [root];
  while (queue.length) {
    // get # of element in same level
    let qLen = queue.length;
    for (i = 0; i < qLen; i++) {
      let cursor = queue.shift();
      if (i === (qLen-1)) {
        result.push(cursor.val);
      }
      if (cursor.left) {
        queue.push(cursor.left);
      }
      if (cursor.right) {
        queue.push(cursor.right);
      }
    }
  }
  return result;
};
console.log(rightSideView(t1))