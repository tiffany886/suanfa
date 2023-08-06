const path=require('path')
// console.log(path.join('abc', 'cde', 'efg', 'ghi'))
// abc\cde\efg\ghi

const pkgPath = path.join(process.cwd(), './package.json');
console.log(pkgPath)
// d:\Temp\Desktop\suanfa\package.json