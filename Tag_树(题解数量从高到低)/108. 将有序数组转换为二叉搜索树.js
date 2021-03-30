/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    let i = 0;
    let j = nums.length;
    let buildTree = function(nums, i, j){
        if(i === j) return null;
        let index = Math.floor(i + (j - i) / 2);
        let node = new TreeNode(nums[index]);
        node.left = buildTree(nums, i, index);
        node.right = buildTree(nums, index+1, j);
        return node;
    }
    return buildTree(nums, i, j);
};