/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// 只能用来当arr数组的，表示当前指针指向哪里，代替原来的shift
let beginPoint = 0

function ownershift(arr) {
    return arr[beginPoint++]
}

// 根据数组创建二叉树
const createTree = (arr) => {
    let tree = new TreeNode(arr[0]) //创建根节点
    let queue = [tree]
    // i表示遍历到数组的第几位
    let i = 1
    // for和下面的while实现功能相同 都是遍历队列 进行左子树和右子树节点的添加
    // for (let node of queue) {
    //     queue.push(node.left = new TreeNode(arr[i++]))
    //     if (i == arr.length) return tree
    //     queue.push(node.right = new TreeNode(arr[i++]))
    //     if (i == arr.length) return tree
    // }
    while (queue.length) {
        let len = queue.length
        while (len--) {
            let node = ownershift(queue)
            queue.push(node.left = new TreeNode(arr[i++]))
            if (i == arr.length) return tree
            queue.push(node.right = new TreeNode(arr[i++]))
            if (i == arr.length) return tree
        }
    }
}

// 示例
let arr = [5, 4, 9, 1, 10, null, 7]
let rootNode = createTree(arr)
console.log(rootNode)