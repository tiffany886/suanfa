/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var maximumJumps = function (nums, target) {
    function fun (deep,times) {
        if (deep == nums.length-1) {
            console.log('times' + times);
            return times;
        }
        for (let j = deep + 1; j < nums.length; j++){
            // console.log('j=',j,'nums[j]=',nums[j],'deep=',deep,'nums[deep]=', nums[deep],'times',times);
            if (Math.abs(nums[j] - nums[deep]) <= target) {
                console.log(deep,'->',j)
                return fun(j, times + 1);
            }
            if (j == nums.length - 1) {
                console.log('这条路不满足',nums[deep]);
            }
        }
    }
    let max = 0;
    let len = 0;
    for (let i = 1; i < nums.length; i++){
        if (Math.abs(nums[i] - nums[0]) <= target) {
            console.log(0, '->', i)
            len = fun(i, 1);
            console.log('len' + len);
            if (len) {
                max = max > len ? max : len;
            }
        }
    }
    return max?max:-1;
};

console.log(maximumJumps([1, 2, 0, 3],2));

