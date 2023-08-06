/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
    let a = s.slice(n, s.length) + s.slice(0, n);
    return a;
};


console.log(reverseLeftWords('abcdefg',2))