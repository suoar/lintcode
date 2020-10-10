/**
 * 1338.停车困境
 */

function parkingDilemma(cars, k) {
  //cars.sort()  // sort()方法默认排序顺序是在将元素转换为字符串，然后比较它们的utf-16代码单元值序列
  cars.sort(function(a, b) {  // compare(a, b) 小于0：a排b之前；等于0：a,b相对位置不变； 大于0：b排到a之前
    return a - b  //升序排列
  })
  let min = Number.MAX_VALUE
  for(let i = 0; i < cars.length - k + 1; i++) {
    min = Math.min(min, cars[i+k-1]-cars[i]+1)
  }
  return min
}