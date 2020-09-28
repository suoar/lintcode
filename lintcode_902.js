/**
 * 902.BST中第K小的元素
 */
const kthSmallest = function (root, k) {
  //中序遍历，获得数组
  var arr = []
  travel(root, arr)
  return arr[k-1]
}

const travel = function (root, arr) {
  if (!root) {
    return
  }
  if (root.left) {
    travel(root.left, arr)
  }
  arr.push(root.val)
  if (root.right) {
    travel(root.right, arr)
  }
}
