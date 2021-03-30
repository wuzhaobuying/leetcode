/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    let i = 0, j = nums.length;
    let helper = function(nums, i, j){
        if(i === j) return null;
        let index = Math.floor((i + j) / 2);
        let node = new TreeNode(nums[index]);
        node.left = helper(nums, i, index);
        node.right = helper(nums, index + 1, j);
        return node;
    }
    return helper(nums, i, j);
};