/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
    let arr=prices.sort((a,b)=>a-b);
    console.log(arr)
    let used = arr[0] + arr[1] 
    if (used <= money) {
        return money - used;
    }
    return money;
}

console.log(buyChoco([98, 54, 6, 34, 66, 63, 52, 39], 22))