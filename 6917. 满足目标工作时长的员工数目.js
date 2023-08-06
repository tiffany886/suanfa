/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function (hours, target) {
    return hours.reduce((pre, cur, index, arr) => {
        return pre += hours[index] >= target ? 1 : 0;
    }, 0);
};

console.log(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4],2));