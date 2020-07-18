/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
  let diff = 0;
  let result = [];
  let stack = [root];
  // dfs
  while (stack.length) {
    let cursor = stack.pop();
    result.push(cursor.val);
    if (cursor.left) {
      stack.push(cursor.left);
    }
    if (cursor.right) {
      stack.push(cursor.right);
    }
  }

  if (result.indexOf(target) > -1) {
    return target;
  }
  let diffs = [];
  for (let i = 0; i < result.length; i++) {
    diffs.push(Math.abs(target - result[i]));
  }
  let min = Number.MAX_VALUE;
  let minIdx = -1;
  diffs.forEach((v, i) => {
    if (min > v) {
      min = v;
      minIdx = i;
    }
  });
  return result[minIdx];
};