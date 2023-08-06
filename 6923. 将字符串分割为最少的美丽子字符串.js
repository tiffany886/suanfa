/**
 * @param {string} s
 * @return {number}
 */
var minimumBeautifulSubstrings = function (s) {
    let arr = []
    let map = new Map();
    for (let i = 1; i < Math.pow(2,16); i *= 5){
        arr.push(i.toString(2))
        map.set(i.toString(2),6)
    }
    if (s[0] == '0') {
        return -1;
    }
    let len = s.length;
    let dp = new Array(s.length).fill(Number.MAX_VALUE)
    console.log(dp);
    dp[0] = 0;
    for (let i = 0; i < len; i++){
        for (let j = i; j >= 0; j--){
            let cur=s.slice(j,)
        }
    }
    let i = 0;
    let j = s.length;
    console.log(map);
    let a=0
    while (i<s.length) {
        // console.log('s.slice(i, j)',s.slice(i, j))
        if (!map.get(s.slice(i, j))) {
            j--;
            if (j < 0) {
                break;
            }
        } else {
            a++;
            i = j;
            j = s.length;
        }
    }
    let b=0
    i = 0;
    j = s.length;
    while (j>0) {
        // console.log('s.slice(i, j)',s.slice(i, j))
        if (!map.get(s.slice(i, j))) {
            i++;
            if (i>s.length) {
                break;
            }
        } else {
            b++;
            j = i;
            i = 0;
        }
    }
    let number = a < b ? a : b;
    console.log(number);
    return number;
};
minimumBeautifulSubstrings("101101111101")