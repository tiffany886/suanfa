/**
 * @param {number[]} nums
 * @return {number}
 */
var semiOrderedPermutation = function (nums) {
    let n = nums.length;
    let a = 0;
    let b = nums.length-1;
    for (let i = 0; i < nums.length; i++){
        if (nums[i] == 1) {
            a = i;
            break;
        }
    }
    console.log(a);
    for (let i = nums.length - 1; i >= 0; i--){
        if (nums[i] == n) {
            b = i;
            break;
        }
    }
    console.log(b);
    if (b < a) {
        return a + (n - b - 1)-1
    }
    return a+(n-b-1)
}

console.log(semiOrderedPermutation([2, 4, 1, 3]))