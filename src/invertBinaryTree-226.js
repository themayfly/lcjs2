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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (!root) {
    return root;
  }
  let left = invertTree(root.left);
  let right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
}

var invertTreeBFS = function(root) {
    // flip swap left and right value
    function bfs(node) {
      let queue = [node];
      let result = [];
      while (queue.length) {
        let cur = queue.shift();
        if (!cur) {
          continue;
        }
        result.push(cur);
        let temp = cur.left;
        cur.left = cur.right;
        cur.right = temp;
        if (cur.left) { queue.push(cur.left); }
        if (cur.right) {  queue.push(cur.right); }
      }
      return result;
    }
    let result = bfs(root) || [];
    return result.length ? result[0] : root;
};