/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (!root) {
        return root;
    }
    return findAncestor(root, p, q);
};

var findAncestor = function (node, p, q) {
    if (!node || node.val === p.val || node.val === q.val) {
        return node;
    }
    let leftParent = findAncestor(node.left, p, q);
    let rightParent = findAncestor(node.right, p, q);
    if (leftParent && rightParent) {
        return node;
    } else {
        return leftParent || rightParent;
    }
}