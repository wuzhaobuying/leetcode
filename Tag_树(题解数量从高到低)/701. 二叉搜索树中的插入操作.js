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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if(root === null) return new TreeNode(val);
    let pre = null;
    let helper = function(root, val){
        if(root === null){
            console.log(pre.val);
            if(val < pre.val){
                pre.left = new TreeNode(val);
            }
            else {
                pre.right = new TreeNode(val);
            }
            return;
        }
        if(root.val > val){
            pre = root;
            helper(root.left, val);
        }
        else if(root.val < val){
            pre = root;            
            helper(root.right, val);
        }
    }
    helper(root, val);
    return root;
};