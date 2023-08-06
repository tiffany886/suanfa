/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  if (A == null || B == null) return false
  if (A.val == B.val && recur(A, B)) {
    return true
  }
  return bianli(A.left, B) || bianli(A.right, B)
}

let recur = function (A, B) {
  if (B == null) {
    return true
  }
  if (A == null || A.val != B.val) {
    return false
    }
    console.log(A.left)
  return recur(A.left, B.left) && recur(A.right && B.right)
}


var isSubStructure = function (A, B) {
  if (!A || !B) return false
  var dfs = function (A, B) {
    if (!B) return true
    if (!A) return false
    return A.val === B.val && dfs(A.left, B.left) && dfs(A.right, B.right)
  }
  return dfs(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B)
}
console.log(isSubStructure([-2, 1], [-2, 1, -2]))