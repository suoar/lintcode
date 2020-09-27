/**
 * 1350.Excel表列标题
 */
// const convertToTitle = function (n) {
//   let res = ''
//   let cur = ''
  
//   while(n > 0) {
//     if(n % 26 === 0) {
//       cur = 'Z'
//     } else {
//       cur = String.fromCharCode('A'.charCodeAt() + (n % 26 - 1))
//     }
//     res = cur + res
//     n = parseInt((n-1) / 26)
//   }
//   return res
// }

const convertToTitle = function (n) {
  if(n === 0) {
    return ""
  }
  return convertToTitle(parseInt((n-1) / 26)) + String.fromCharCode('A'.charCodeAt() + (n - 1) % 26)

}

console.log(convertToTitle(677))