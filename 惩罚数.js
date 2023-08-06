/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function (n) {
    for (let i = 0; i <= n; i++){
        let pinfang = i * i;
        let tmparr = String(pinfang)
          .split('')
            .map((pinfang) => Number(pinfang))
        
    }
}
function c (num, str) {
    let sum = 0
    let s = num + " "
    if (str[0] == 1) {
        sum += parseInt(s[0])
        s=s.slice(1)
    }
    for (let i = 1; i < str.length; i++) {
      if (str[i] == "1") {
          sum += parseInt(s.slice(0, i));
          s = s.slice(i);
      }
    }
    sum += parseInt(s)
    return sum
}
console.log(c(12345,"0110"));
// 12 3 45