// 节点概率
let node = [-1, 0.15, 0.1, 0.05, 0.1, 0.2]

// 区间概率 i0表示小于n1的概率 
let interval = []

// e表示的是代价
let e = [];
// p是平均路长
// let p = []
// w[i,j] 表示区间i到j的概率 w[i, j]= i[i-1]+n[i]+i[i]+n[i+1]+i[i+1]...+n[j]+i[j]
// w[1,1]=i[0]+n[1]+i[1]
let w = [];
for (let i = 1; i < node.length; i++) {
    w[i, i] = interval[i - 1] + node[i] + interval[i];
    // p[i, i - 1] = 0
    // 当i比j小 则为为伪节点，默认为0
    e[i, i - 1] = interval[i]
}

console.log(e)
// p[i,j] 代表 n1到nj 中所有节点中，构成的最优二叉树的平均路长 
// 平均路长：平均比较次数
// let p = []？？
for (let len = 1; len < node.length; len++) {
    for (let left = 1; left + len - 1 < node.length; left++) {
        let right = left + len - 1;
        let min = 999999999999;
        // i到j的概率就是i到j-1的概率加上j-1那个区间和j
        if (right > left) {
            w[left, right] = w[left, right - 1] + interval[right] + node[right];
        }

        console.log(left, right, w[left, right]);
        // console.log(w)
        // 
        // for (let k = left; k <= right; k++) {
        //     // 如果以k作为根节点，那么他的代价就是左子树最小代价+右子树最小代价+自己的代价
        //     let v = e[left, k - 1] + w[left, right] + e[k + 1, right]
        //     if (v < min) {
        //         min = v
        //     }
        // }
        // e[left, right] = min
    }
}
console.log(w);
// console.log(w[2, 2]);
// console.log(interval[3]);
// console.log(node[3]);
// console.log(w[2, 3]);