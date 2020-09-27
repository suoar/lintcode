/**
 * 155.二叉树的最小深度
 */
const minDepth = function (root) {
  if(!root){
    return 0
  }
  if(isLeaf(root)){
    return 1
  }
  if(root.left !== null && isLeaf(left)){
    return 2
  } else if(root.right !== null && isLeaf(root.right)){
    return 2
  } else {
    return 1 + Math.min(minDepth(root.left),minDepth(root.right))
  }
}

const isLeaf = function (treeNode) {
  return !(treeNode.left || treeNode.right)
}
