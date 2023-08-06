/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
*/
function dfs (board, word, i, j, k) {
    // 判断是否越界 值是否相等
    if (
      i >= board.length ||
      i < 0 ||
      j > board[0].length ||
      j < 0 ||
      board[i][j] != word[k]
    ) {
      return false
    }
    // 判断是否满足条件
    if (k == word.length - 1) return true
    // 标记 不能走走过的地方
    board[i][j] = -1
    // 深度递归遍历
    let flag =
      dfs(board, word, i + 1, j, k + 1) ||
      dfs(board, word, i, j + 1, k + 1) ||
      dfs(board, word, i - 1, j, k + 1) ||
        dfs(board, word, i, j - 1, k + 1)
    // 恢复原状
    board[i][j] = word[k]
    return flag
  }
var exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (dfs(board, word, i, j, 0)) return true
    }
    }
    return false
}
// var exist = function (board, word) {
//     let w = board.length
//     let h = board[0].length
//     for (let i = 0; i < w; i++) {
//         for (let j = 0; j < h; j++) {
//             // console.log(board[i][j], word[0])
//             if (board[i][j] == word[0]) {
//                 console.log('找到第一位',i,j)
//                 let count = 1
//                 let x = i
//                 let y = j
//                 while (count < word.length || (x >= 0 && y >= 0) || (x < w && y < h)) {
//                     let flag = false
//                     //   console.log(count)
//                     // 上面没有越界
//                     if (x - 1 >= 0) {
//                         // 判断上面是否相等
//                         if (word[count] == board[x - 1][y]) {
//                             flag = true
//                             console.log('x-- y')
//                             x--
//                             count++
//                             continue
//                         }
//                     }
//                     if (y + 1 < h) {
//                         if (word[count] == board[x][y + 1]) {
//                             flag = true
//                             console.log('x y++')
//                             y++
//                             count++
//                             continue
//                         }
//                     }
//                     if (x + 1 < w) {
//                         if (word[count] == board[x + 1][y]) {
//                             flag = true
//                             console.log('x++ y')
//                             x++
//                             count++
//                             continue
//                         }
//                     }
//                     if (y - 1 >= 0) {
//                         console.log(x,y-1,word[count], board[x][y - 1])
//                         if (word[count] == board[x][y - 1]) {
//                             flag = true
//                             console.log('x y--')
//                             y--
//                             count++
//                             continue
//                         }
//                     }
//                     //   console.log(flag)
//                     if (!flag) {
//                         break
//                     }
//                 }
//                 console.log(count)
//                 console.log(word.length)
//                 if (count == word.length) {
//                     return true
//                 }
//             }
//         }
//     }
//     return false
// }
console.log(
    exist(
        [
            ['A', 'B', 'C', 'E'],
            ['S', 'F', 'C', 'S'],
            ['A', 'D', 'E', 'E'],
        ],
        'SEE'
    )
)
