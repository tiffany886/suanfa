/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function (s) {
    // 
    let min = s.length;
    let less = s.length;
    for (let i = 1; i < s.length; i++){
        // let left = i - 1;
        let right = i + 1;
        let tmp = s[i];
        // while (left>=0) {
        //     if (s[left] == tmp) {
        //         less--;

        //     }
        //     left--;
        // }
        while (right < s.length) {
            if (s[right] == tmp) {
                less--;
                let s1 = s.substring(0, right - 1)
                let s2 = s.substring(right + 1)
                console.log('right',right);
                console.log(s1);
                console.log(s2);
                s=s1.concat(s2)
            }
            right++;
        }
        console.log(s);
        min = min > less ? less : min;
    }
    return min;
}

console.log(minimizedStringLength('aaabc'))
console.log('abcdf'.split(1,2));