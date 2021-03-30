/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//满二叉树和普通二叉树结合
var countNodes = function(root) {
    let l = root, r = root;
    let lh = 0, rh = 0;
    while(l !== null){
        l = l.left;
        lh++;
    }
    while(r !== null){
        r = r.right;
        rh++;
    }
    if(lh === rh) return Math.pow(2, lh) - 1;
    return countNodes(root.left) + countNodes(root.right) + 1;
};