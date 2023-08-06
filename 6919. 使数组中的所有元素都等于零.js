/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkArray = function (nums, k) {
    let p = 0;
    while(p<nums.length-k+1) {
        if (nums[p] !== 0) {
            let time = k - 1;
            console.log(time);
            while (time >= 0) {
                nums[p + time] = nums[p + time] - nums[p];
                if (nums[p + time] < 0) {
                    return false;
                }
                time--;
            }
        }
        p++;
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            return false;
        }
    }
    return true;
};
console.log(checkArray([60, 72, 87, 89, 63, 52, 64, 62, 31, 37, 57, 83, 98, 94, 92, 77, 94, 91, 87, 100, 91, 91, 50, 26], 4));
//第i个开始删除
