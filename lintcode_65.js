/**
 * 65.两个排序数组的中位数
 * 标签：第K大、递归、分治、二分
 */
let arr1 = [1,2,3,4,5,6]
let arr2 = [2,3,4,5]

function findMedianSortedArrays(arr1, arr2) {
  let n = arr1.length + arr2.length
  if(n % 2 === 1) { //长度为奇数
    return findKth(arr1, 0, arr2, 0, parseInt(n / 2) + 1)
  } else { //长度为偶数
    return (findKth(arr1, 0, arr2, 0, n / 2) + findKth(arr1, 0, arr2, 0, n / 2 + 1)) / 2
  }

}

function findKth(arr1, start1, arr2, start2, k) {
  if(start1 >= arr1.length) {
    return arr2[start2 + k - 1]
  }
  if(start2 >= arr2.length) {
    return arr1[start1 + k - 1]
  }
  if(k === 1) {
    return Math.min(arr1[start1], arr2[start2])
  }
  let halfKth1 = start1 + parseInt(k / 2) - 1 < arr1.length ? arr1[start1 + parseInt(k / 2) - 1] : Number.MAX_VALUE
  let halfKth2 = start2 + parseInt(k / 2) - 1 < arr2.length ? arr2[start2 + parseInt(k / 2) - 1] : Number.MAX_VALUE
  if(halfKth1 < halfKth2) {
    return findKth(arr1, start1 + parseInt(k / 2), arr2, start2, k - parseInt( k / 2))
  } else {
    return findKth(arr1, start1, arr2, start2 + parseInt(k / 2), k - parseInt( k / 2))
  }

}

console.log(findMedianSortedArrays(arr1, arr2))
