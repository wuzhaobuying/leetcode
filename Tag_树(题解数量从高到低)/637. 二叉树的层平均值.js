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
var averageOfLevels = function(root) {
    if(root === null) return [];
    let queue = [root];
    let res = [];
    while(queue.length !== 0){
        let sum = 0;
        let len = queue.length;
        for(let i = 0; i < len; i++){
            let item = queue.shift();
            sum += item.val;
            if(item.left !== null) queue.push(item.left);
            if(item.right !== null) queue.push(item.right);
        }
        res.push(sum / len);
    }
    return res;
};