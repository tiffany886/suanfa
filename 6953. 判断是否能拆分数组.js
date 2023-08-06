/**
 * @param {number[]} nums
 * @param {number} m
 * @return {boolean}
 */

var canSplitArray = function (nums, m) {
    if (nums.length == 1) {
        return true;
    }

    let sum = 0;
    if (nums[0] == 1) sum = 1
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] + nums[i - 1] >= m) {
            return true;
        }
        if (nums[i] == 1) {
            sum++;
        }
    }
    console.log(sum);
    if (sum == nums.length) return true;
    return false;
};


// console.log(canSplitArray([5, 10, 10], 15));
// console.log(canSplitArray([2, 1, 1, 3], 4));
console.log(canSplitArray([1, 1, 1], 3));