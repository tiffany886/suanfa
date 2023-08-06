"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBinaryTree = exports.TreeNode = void 0;
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = val;
        this.left = left !== null && left !== void 0 ? left : null;
        this.right = right !== null && right !== void 0 ? right : null;
    }
    return TreeNode;
}());
exports.TreeNode = TreeNode;
function createBinaryTree(arr) {
    if (arr[0] == null)
        return null;
    var beginPoint = 0;
    function ownershift(arr) {
        return arr[beginPoint++];
    }
    var tree = new TreeNode(arr[0]); //创建根节点
    var queue = [tree];
    // i表示遍历到数组的第几位
    var i = 1;
    while (queue.length) {
        var len = queue.length;
        while (len--) {
            var node = ownershift(queue);
            var leftnode = arr[i++];
            if (leftnode != null) {
                queue.push((node.left = new TreeNode(leftnode)));
            }
            else {
                node.left = null;
            }
            if (i == arr.length)
                return tree;
            var rightnode = arr[i++];
            if (rightnode != null) {
                queue.push((node.right = new TreeNode(rightnode)));
            }
            else {
                node.right = null;
            }
            if (i == arr.length)
                return tree;
        }
    }
    return null;
}
exports.createBinaryTree = createBinaryTree;
// console.log(JSON.stringify(createBinaryTree([1, null, 2, 3, null, 5, 6, 7])));
// let a = {
//   val: 1,
//   left: null,
//   right: {
//     val: 2,
//     left: {
//       val: 3,
//         left: {
//             val: 5,
//             left: {
//                 val: 7,
//                 left: null,
//                 right: null
//             },
//             right: null
//         },
//       right: { val: 6, left: null, right: null },
//     },
//     right: null,
//   },
// }