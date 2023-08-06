/**
 * @param {number[]} nums
 * @return {number}
 */
var alternatingSubarray = function (nums) {
    function judgesame (i) {
        let flag = true;
        let number = 1;
        while (i < nums.length) {
            if (nums[i] == nums[i - 1] + 1 && flag) {
                number++;
                i++;
                flag = !flag;
            } else if (nums[i] == nums[i - 1] - 1 && !flag) {
                number++;
                i++;
                flag = !flag;
            } else {
                break;
            }
        }
        return number;
    }
    let max = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1] + 1) {
            number = judgesame(i);
            max = max > number ? max : number;
        }
    }
    return max;
};

console.log(alternatingSubarray([21, 9, 5]))