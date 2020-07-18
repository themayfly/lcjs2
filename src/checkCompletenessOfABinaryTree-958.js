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
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    let queue = [root]
    let level = 0
    let isBottom = false
    while (queue.length) {
      let cur = queue.shift()
      if (!cur) {
        isBottom = true
      } else {
        // it's a bottom but it has more
        if (isBottom)  {
          return false
        }
        queue.push(cur.left)
        queue.push(cur.right)      
      }
      level++;
    }
    return true
  };