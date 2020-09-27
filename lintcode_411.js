/**
 * 411.格雷编码
 * 标签：递归
 */

const grayCode = function (n) {
  let ret = []
  if (n === 0) {
    ret.push(0)
    return ret
  }
  ret = grayCode(n-1)
  for(let i = ret.length - 1; i >= 0; i--) {
    ret.push(ret[i] + Math.pow(2, n-1))
  }
  return ret
}


console.log(grayCode(2))