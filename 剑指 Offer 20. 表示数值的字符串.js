/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    
    return !isNaN(Number(s));
};

console.log(isNumber("e"));