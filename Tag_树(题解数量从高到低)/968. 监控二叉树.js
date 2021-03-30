/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minCameraCover = function(root) {
    // 0: 未覆盖
    // 1: 已覆盖
    // 2: 相机
    let res = 0;
    let helper = function(root){
        if(root === null) return 1;
        let left = helper(root.left);
        let right = helper(root.right);
        if(left === 0 || right === 0){
            res++;
            return 2;
        }
        if(left === 1 && right === 1){
            return 0;
        }
        if(left === 2 || right === 2){
            return 1;
        }
    }
    if(helper(root) === 0) res++;
    return res;
};