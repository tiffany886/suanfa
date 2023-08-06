/**
 * @param {number} numOnes
 * @param {number} numZeros
 * @param {number} numNegOnes
 * @param {number} k
 * @return {number}
 */
var kItemsWithMaximumSum = function (numOnes, numZeros, numNegOnes, k) {
    let arr = []
    for (let i = 0; i < numOnes; i++) {
        arr.push('1')
    }
    for (let i = 0; i < numZeros; i++) {
        arr.push('0')
    }
    for (let i = 0; i < numNegOnes; i++) {
        arr.push('-1')
    }
    let res = 0
    for (let i = 0; i < k; i++) {
        res += parseInt(arr[i])
    }
    return res
}
kItemsWithMaximumSum(3, 2, 0, 4)
