/**
 * @param {string} a
 * @param {string} b
 * @param {string} c
 * @return {string}
 */
let aa, bb, cc;
var minimumString2 = function (a, b, c) {
    
}

var minimumString = function (a, b, c) {
    let flag = 0;
    if (a == b && a == c && b == c) {
        return a;
    }
    if (b.indexOf(a) !== -1 || c.indexOf(a) != -1) {
        a = ''
    }
    if (a.indexOf(b) !== -1 || c.indexOf(b) != -1) {
        b = ''
    }
    if (a.indexOf(c) !== -1 || b.indexOf(c) !== -1) {
        c = ''
    }

    console.log(a, b, c);
    aa = a;
    bb = b;
    cc = c;
    let arr = new Array(a, b, c);
    let arr2 = new Array(a, b, c);
    let minnum = 999;
    let res = 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz';
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (i != j) {
                let samlen = fun(arr[i], arr2[j]);

                for (let s = 0; s <= samlen; s++) {
                    let arrtmp = arr[i].slice(0, arr[i].length - s);
                    console.log('len', samlen);
                    console.log('arrtmp', arrtmp);
                    console.log('arr2j', arr2[j]);
                    let tmp = arrtmp.concat(arr2[j]);
                    // console.log(i, j);
                    let lastnum = num(i, j);
                    // console.log('tmp', tmp, arr[lastnum]);
                    if (tmp.indexOf(arr[lastnum]) !== -1) {
                        // console.log(lastnum);
                        // console.log(tmp);
                        flag = 1;
                        if (tmp.length < minnum) {
                            minnum = tmp.length;
                            res = tmp;
                        }
                        if (tmp.length == minnum) {
                            res = bijiao(res, tmp);
                            console.log(res);
                        }
                    } else {
                        // if (flag == 0) {
                        // tmp = tmp.concat(arr[lastnum]);
                        let samlen2 = fun(tmp, arr[lastnum]);
                        for (let s = 0; s <= samlen2; s++) {
                            let arrtmp2 = tmp.slice(0, tmp.length - s);
                            let tmp2 = arrtmp2.concat(arr[lastnum]);
                            console.log('tmp2', tmp2);
                            if (tmp2.indexOf(a) !== -1 && tmp2.indexOf(b) != -1 && tmp2.indexOf(c) != -1) {
                                if (tmp2.length < minnum) {
                                    minnum = tmp2.length;
                                    res = tmp2;
                                }
                                if (tmp2.length == minnum) {
                                    res = bijiao(res, tmp2);
                                    // console.log(res);
                                }
                            }
                        }
                        // }
                    }
                }

            }
        }
    }

    if (res == 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz') {
        if (bijiao(a, b) == b) {
            let tmp = aa;
            aa = bb;
            bb = tmp;
        }
        if (bijiao(a, c)) {
            let tmp = aa;
            aa = cc;
            cc = tmp;
        }
        if (bijiao(b, c)) {
            let tmp = bb;
            bb = cc;
            cc = tmp;
        }
        let len1 = fun(aa, bb);
        let len2 = fun(bb, cc);
        res = (aa.slice(0, aa.length - len1)).concat(bb.slice(0, bb.length - len2)).concat(cc);
    }
    return res;
};

function fun (a, b) {
    // console.log('a', a, 'b', b);
    a = a.split('');
    b = b.split('');
    let num = 0;
    for (let i = 0, j = a.length - 1; i < b.length, j >= 0; i++, j--) {
        if (b[i] == a[j]) {
            num++;
        } else {
            break;
        }
    }
    if (num == a.length || num == b.length) {
        return num - 1;
    }
    return num;
}

function num (i, j) {
    if ((i == 0 && j == 1) || (i == 1 && j == 0)) {
        return 2;
    }
    if ((i == 0 && j == 2) || (j == 0 && i == 2)) {
        return 1;
    }
    if ((i == 2 && j == 1) || (j == 2 && i == 1)) {
        return 0;
    }
}

function bijiao (a, b) {
    // a1 = a.split('')
    // b1 = b.split('');
    // console.log(a,b);
    //     if(a.length<b.length){
    //         return a;
    //     }

    //     if(b.length<a.length){
    //         return b;
    //     }
    for (let i = 0; i < a.length; i++) {
        if (a[i] < b[i]) {
            return a;
        }
        if (a[i] == b[i]) {
            continue
        }
        return b
    }
    return a;
}



// console.log(minimumString("xyyyz"
// ,"xzyz"
// ,"zzz"));

// console.log(minimumString("a",
//     "ca",
//     "ac"));

// console.log(minimumString("a",
//     "a",
//     "a"));

// console.log(minimumString("ac",
//     "a",
//     "a"));

console.log(minimumString("ab",
    "ba",
    "aba"));