/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
    let arr = [];
    for (let i of words) {
        console.log(i);
        let tmp = i.split(separator);
        // console.log(tmp);
        tmp=deletenone(tmp)
        arr.push(...tmp);
    }
    // console.log(arr);
    return arr;
};
function deletenone (arr) {
    let res=[]
    for (let i of arr) {
        if (i !== '') {
            res.push(i);
        }
    }
    console.log(123,res);
    return res;
}
console.log(splitWordsBySeparator(["$easy$", "$problem$"], "$"));