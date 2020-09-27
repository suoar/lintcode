/**
 * 1328.翻倍
 */

 function doubleChange(a, b, p, q) {
   let count = 0
   if(a >= b) {
     return count
   }
   while(p < b - a ) {
     p *= q
     count ++
   }
   return count + 1
 }

 console.log(doubleChange(25663, 966282121, 48, 4))