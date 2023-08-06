/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = new Map();
    for (let str of strs) {
        let array = Array.from(str)
        array.sort();
        let key = array.toString();
        // 如果存在相同的，则直接加进数组里面？
        let list = map.get(key) ? map.get(key) : new Array();
        list.push(str)
        map.set(key,list)
    }
    return Array.from(map.values())
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])