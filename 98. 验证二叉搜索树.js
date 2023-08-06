const create = require('./binaryTree/createTree')
// console.log(create.createBinaryTree())

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
var isValidBST = function (root) {
    function dfs (left, right, root) {
        if (root === null) return true;
        if (root.val <= left || root.val >= right) return false;
        return dfs(left,root.val, root.left) && dfs(root.val,right, root.right);
    }

    // console.log(root)
    return dfs(-Math.pow(2, 31), Math.pow(2, 31), root)
        // if (root.left) {
        //     if (root.left.val > root.val) {
        //         return false;
        //     }
        //     isValidBST(root.left)
        // }
        // if (root.right) {
        //   if (root.right.val < root.val) {
        //     return false
        //     }
        //     isValidBST(root.right)
        // }
        // return true;
};


console.log(isValidBST(create.createBinaryTree([2, 1, 3])))