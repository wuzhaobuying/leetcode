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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if(root === null) return [];
    let res = [];
    let index = 1;
    let queue = [root];
    while(queue.length !== 0){
        let len = queue.length;
        let temp = [];
        for(let i = 0; i < len; i++){
            let node = queue.shift();
            if(index % 2 === 1){
                temp.push(node.val);
            }
            else {
                temp.unshift(node.val);                
            }
            if(node.left !== null) queue.push(node.left);
            if(node.right !== null) queue.push(node.right);
        }
        index++;
        res.push(temp);
    }
    return res;
};