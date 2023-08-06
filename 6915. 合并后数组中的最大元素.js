/**
 * @param {number[]} nums
 * @return {number}
 */
var maxArrayValue = function (nums) {
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] >= nums[i - 1]) {
            nums[i - 1] = nums[i - 1] + nums[i];
        }
    }
    return nums[0];
};
console.log(maxArrayValue([2, 3, 7, 9, 3]));
console.log(maxArrayValue([5, 3, 3]));