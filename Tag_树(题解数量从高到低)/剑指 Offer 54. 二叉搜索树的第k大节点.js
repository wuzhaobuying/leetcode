/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
    let res = null;
    let count = 0;
    let search = function(root, k){
        if(root === null) return;
        search(root.right, k);
        count++;
        if(k === count) {
            res = root.val;
            return;
        }
        search(root.left, k);
    }
    search(root, k);
    return res;
};