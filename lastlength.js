/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let res = 0
    console.log(s[s.length - 2])
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == " ") {
            break;
        } else {
            res++
        }
    }
    return res
};
console.log(lengthOfLastWord("Hello World"))
