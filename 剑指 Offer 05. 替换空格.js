/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
    // for(let i=0;i<s.length;i++){
    //     if(s[i]==' '){
    //         s[i]='%20';
    //     }
    // }
    s=s.replaceAll(' ',"\%20");
    return s;
};

console.log(replaceSpace("We are happy."));