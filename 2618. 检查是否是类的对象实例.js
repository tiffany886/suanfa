/**
 * @param {any} obj
 * @param {any} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function (obj, classFunction) {
    if (
        obj === null ||
        obj === undefined ||
        classFunction === null ||
        classFunction === undefined
    ) {
        return false
    }
    while (obj.__proto__ && obj.__proto__ != classFunction.prototype)
        obj = obj.__proto__
    return obj.__proto__ === classFunction.prototype
}

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */

// console.log(checkIfInstanceOf(checkIfInstanceOf(new Date(), Date)))


var obj = new Object()
console.log(obj.__proto__)
console.log(Object.prototype)


// var obj = {a:2}
// // 这里的o是以obj为原型创建的对象
// var o = Object.create(obj)
// var o2 = Object.create(null)
// // o的__proto__是obj,也就是说 o.__proto__===obj
// console.log(o.__proto__.__proto__)
// console.log(Object.prototype)
// console.log(o2); //No properties

function person (name, age) {
    this.name = name
    this.age = age
}
var o = new person('jack', 23)
console.log(o.__proto__)
console.log(person.prototype)