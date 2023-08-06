/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number}
 */
var matrixSumQueries = function (n, queries) {
  let arr = new Array(n)
  // 初始化
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(n)
    for (let j = 0; j < n; j++) {
      arr[i][j] = 0
    }
  }
  for (let i = 0; i < queries.length; i++) {
    // 影响行
    if (queries[i][0] == 0) {
      // index 第几行
      for (let j = 0; j < n; j++) {
        // 影响行数 在第一个位置
        arr[queries[i][1]][j] = queries[i][2]
      }
    } else {
      for (let j = 0; j < n; j++) {
        // 影响列数
        arr[j][queries[i][1]] = queries[i][2]
      }
    }
  }
  let sum = 0
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      sum += arr[i][j]
    }
  }
  return sum
}
