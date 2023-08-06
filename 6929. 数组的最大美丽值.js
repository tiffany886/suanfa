/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumBeauty = function (nums, k) {
    let res = 0;
    // let map = new Map();
    // let fun = function (n) {
    //     if (!map.get(n)) {
    //         let tmp = 1;
    //         for (let i = 0; i < nums.length; i++){
    //             if (nums[i] - k  <= n && nums[i] + k >= n) {
    //                 tmp++;
    //             }
    //         }
    //         map.set(n, tmp);
    //         return tmp;
    //     }
    //     else {
    //         return map.get(n);
    //     }
    // }
    let fun2 = function (i, j) {
        let tmp = 0;
        
        for (let i = 0; i < nums.length; i++){
            if (nums[i] - k >= i || nums[i] + k <= j) {
                tmp++;
            }
        }
        return tmp;
    }
    for (let i = 0; i < nums.length; i++){
        // for (let j = (k*-1); j <= k; j++){
        //     let tmp = fun(i + j);
        //     if (res < tmp) {
        //         res = tmp;
        //     }
        // }
        let tmp = fun2(nums[i] - k, nums[i] + k);
        if (res < tmp) {
                res = tmp;
            }
    }
    return res;
};

console.log(maximumBeauty([4, 6, 1, 2],2));
