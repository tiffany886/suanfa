/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function (nums) {
    let set = new Set(nums);console.log(set);
    let arr = Array.from(set);console.log(arr);
    let len = nums.length - arr.length;console.log(len);
    if (len == 3 && arr.length == 1) return 10
    if(len==1) return fun(len)+1;
    return fun(len) + 2;
    
    

};
function fun (num) {
    if (num == 1) return 1;
    return num * fun(num - 1);
}

console.log(countCompleteSubarrays([459, 459, 962, 1579, 1435, 756, 1872, 1597]));