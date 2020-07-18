/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 
Example 1:

Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
Output: 32
Example 2:

Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
Output: 23

 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
  // do dfs
  let list = [];
  let stack = [root];
  while (stack.length) {
    let cursor = stack.pop();
    list.push(cursor.val);
    if (cursor.left) {
      stack.push(cursor.left);
    }
    if (cursor.right) {
      stack.push(cursor.right);
    }
  }
  return list.reduce((acc, cur) => {
      if (L <= cur && cur <= R) {
        return acc + cur;
      } else {
        return acc;
      }
  }, 0);
};