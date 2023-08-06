/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function (nums) {
    // 分割
    for (let i = 1; i < nums.length; i++) {
        console.log("------------------------------------------------------");
        let arr1 = found(nums.slice(0, i));
        let arr2 = found(nums.slice(i, nums.length));
        console.log(arr1,arr2);
        console.log(arr1[0],arr2[0]);
        if (arr1[0] === arr2[0]) {// 如果支配元素相同
            console.log('l', i, 'r', nums.length - i);
            if (arr1[1] * 2 > i && arr2[1] * 2 > (nums.length - i)) {//
                return i-1;
            }
        }
    }
    return -1;
};

// 寻找支配元素 arr
function found (arr) {
    console.log(12345,arr);
    let map = new Map();
    let timemax = -1;
    let indexmax = -1;
    for (let i = 0; i < arr.length; i++) {
        if (map.get(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
            // 获取最大次数
        } else {
            map.set(arr[i], 1);
        }
        if (timemax < map.get(arr[i])) {
            timemax = map.get(arr[i]);
            indexmax = arr[i];
        }
    }
    return [indexmax, timemax];
}

// console.log(found([1, 2, 3, 2]));
console.log(minimumIndex([3, 3, 3, 3, 7, 2, 2]));