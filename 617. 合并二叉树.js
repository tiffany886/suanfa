const create = require('./binaryTree/createTree')
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    if (!root1 || !root2) return !root1 ? root1 : root2;
    return dfs(root1, root2);
    function dfs (root1, root2) {
        if (!root1 || !root2) return !root1 ? root2 : root1;
        root1.val += root2.val;
        root1.left = dfs(root1.left, root2.left);
        root1.right = dfs(root1.right, root2.right);
        return root1;
    }
};

console.log(mergeTrees(
  create.createBinaryTree([1, 3, 2, 5]),
  create.createBinaryTree([2, 1, 3, null, 4, null, 7])
))