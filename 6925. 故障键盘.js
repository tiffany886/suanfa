/**
 * @param {string} s
 * @return {string}
 */
var finalString = function (s) {
    let res = [];
    s = s.split('');
    for (let i = 0; i < s.length; i++) {

        if (s[i] == 'i') {
            res = res.reverse();
        } else {
            let res = [];
            s = s.split('');
            for (let i = 0; i < s.length; i++) {

                if (s[i] == 'i') {
                    res = res.reverse();
                } else {
                    res.push(s[i]);
                }
            }
            return res.join("");
            res.push(s[i]);
        }
    }
    return res.join("");
};

console.log(finalString('string'));
console.log(finalString('poiinter'));
function reserve (str) {
    return str.split('').reverse().join("");
}
console.log(reserve('string'));
