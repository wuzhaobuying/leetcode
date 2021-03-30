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
 * @return {number[]}
 */
var findMode = function(root) {
    let res = [];
    let maxNum = 0;
    let curNum = 0;
    let pre = null;
    let helper = function(root){
        if(root === null) return;
        helper(root.left);
        if(pre === null){
            pre = root.val;
            curNum++;
            res.push(root.val);
            maxNum = curNum;
        }
        else {
            if(pre === root.val){
                curNum++;
            }
            else {
                curNum = 1;
            }
            if(maxNum < curNum){
                res = [];
                res.push(root.val);
                maxNum = curNum;
            }
            else if(maxNum === curNum){
                res.push(root.val);
            }
            pre = root.val;
        }
        helper(root.right);
    }
    helper(root);
    return res;
};