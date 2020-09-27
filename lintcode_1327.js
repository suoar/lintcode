/**
 * 1327.删除字符
 */
// const deleteString = function (str) {
//   if(str.charAt(0) > str.charAt(1)) {
//     return str.substring(1)
//   } else {
//     return str.charAt(0) + deleteString(str.substring(1))
//   }
// }

//上面的方法报错 RangeError: Maximum call stack size exceeded

const deleteString = function (str) {
  for(let i = 0; i < str.length; i++) {
    if(i === (str.length - 1)) {
      return str.substring(0, i)
    }
    if(str.charAt(i) > str.charAt(i + 1)){
      return str.substring(0,i) + str.substring(i+1)
    }
  }
}

console.log(deleteString('ozwdtvxuhx'))