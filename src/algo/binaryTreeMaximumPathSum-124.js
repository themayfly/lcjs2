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
 * @return {number}
 */


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// [-10,9,20,null,null,15,7]

/*
                -10 
           9             20
        X     X       15    7

Time O(N)        
Space O(logN)
*/
let t7 = new TreeNode(7)
let t15 = new TreeNode(15)
let t20 = new TreeNode(20, t15, t7)
let t9 = new TreeNode(9)
let t_10 = new TreeNode(-10, t9, t20)

var maxPathSum = function(root) {
    let sum = root.val;
    function dfs(node) {
        if (!node) return 0;
        const left = Math.max(dfs(node.left), 0),
              right = Math.max(dfs(node.right), 0);
        sum = Math.max(left + right + node.val, sum);
        return Math.max(left, right) + node.val;
    }
    dfs(root);
    return sum;
};


console.log(maxPathSum(t_10));