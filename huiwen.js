var makeSmallestPalindrome = function (s) {
    s=s.split('')
    let i = 0;
    let res=''
    let j = s.length - 1;
    let count = 0;
    while (i < j) {
        if (s[i] != s[j]) {
            count++;
            if (s[j].charCodeAt() > s[i].charCodeAt()) {
                s[j] = s[i]
            } else {
                s[i] = s[j];
            }
            
            // console.log(2334);
            
        }
        i++;
        j--;
    }
    res = s.join('')
    console.log(res)
    return res;
}
makeSmallestPalindrome('seven')