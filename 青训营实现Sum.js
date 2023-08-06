function fn (x) {
    return function (y) {
        return x + y;
    }
}

console.log(fn(5)(6,1));