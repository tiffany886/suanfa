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
const createTree = (arr) => { // 创建二叉树
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
let root = [5, 4, 9, 1, 10, null, 7]
let rootNode = createTree(root)
var replaceValueInTree = function (root) {
    let queue = []
    let deep = []
    queue.push(root)
    // 计算所有层级的总和
    while (queue.length != 0) {
        // console.log(queue)
        let len = queue.length
        // console.log('len' + len)
        let sum = 0
        for (let i = 0; i < len; i++) {
            let node = queue.shift()
            sum += node.val
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        deep.push(sum)
    }
    //获取父节点
    let map = new Map()
    let setmap = function (node) {
        if (node.left || node.right) {
            if (node.left) {
                // console.log('left')
                map.set(node.left, node)
                setmap(node.left)
            }
            if (node.right) {
                // console.log('right')
                map.set(node.right, node)
                setmap(node.right)
            }
        }
    }
    let a = {}
    map.set(root, a)
    a.sum = root.val
    setmap(root)
    //子节点的和
    let sumfun = function (root) {
        // console.log(root)
        if (root) {
            if (root.left && root.right) {
                root.sum = root.left.val + root.right.val
                // console.log(root.sum)
                sumfun(root.left)
                sumfun(root.right)
            } else if (root.left && !root.right) {
                root.sum = root.left.val
                sumfun(root.left)
            } else if (!root.left && root.right) {
                root.sum = root.right.val
                sumfun(root.right)
            } else {
                return
            }
        }
    }
    sumfun(root)
    let resque = []
    resque.push(root)
    let countdeep = 0
    while (resque.length != 0) {
        let len = resque.length
        while (len--) {
            let tmpnode = resque.shift()
            let parentnode = map.get(tmpnode).sum
            // console.log(parentnode)
            tmpnode.val = deep[countdeep] - parentnode
            // console.log(tmpnode.val)
            if (tmpnode.left) resque.push(tmpnode.left)
            if (tmpnode.right) resque.push(tmpnode.right)
        }
        countdeep++
    }
    return root
};
console.log(replaceValueInTree(rootNode))