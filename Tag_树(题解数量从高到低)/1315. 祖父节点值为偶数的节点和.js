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
var sumEvenGrandparent = function(root) {
    let res = 0;
    let helper = function(root){
        if(root === null) return;
        if(root.val % 2 === 0){
            if(root.left && root.left.left){
                res += root.left.left.val;
            }
            if(root.left && root.left.right){
                res += root.left.right.val;
            }
            if(root.right && root.right.left){
                res += root.right.left.val;
            }
              if(root.right && root.right.right){
                res += root.right.right.val;
            }
        }
        helper(root.left);
        helper(root.right);
    }
    helper(root);
    return res;
};