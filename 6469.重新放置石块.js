/**
 * @param {number[]} nums
 * @param {number[]} moveFrom
 * @param {number[]} moveTo
 * @return {number[]}
 */
var relocateMarbles = function (nums, moveFrom, moveTo) {
    for (let i = 0; i < moveFrom.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] === moveFrom[i]) {
                nums[j] = moveTo[i];
            }
        }

    }
    // nums = nums.sort((a, c) => {
    //     return a-c
    // })
    // console.log(nums);
    // let res = new Set(nums)
    // let a = []
    // res.forEach(x => {
    //     a.push(x)
    // })
    // return a;
    let c = [...new Set([...nums])].sort((a, b) => {
        return a - b;
    });
    console.log(c)
    return c;
};
relocateMarbles([1, 6, 7, 8], [1, 7, 2], [2, 9, 5])
relocateMarbles([1, 1, 3, 3], [1, 3], [2, 2])
relocateMarbles([5, 7, 8, 15],
    [5, 7, 8, 9],
    [9, 15, 2, 7])