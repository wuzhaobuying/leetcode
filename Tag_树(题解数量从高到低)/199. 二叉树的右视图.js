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
var rightSideView = function(root) {
    if(root === null) return [];
    let res = [];
    let queue = [root];
    while(queue.length !== 0){
        let len = queue.length;
        let temp = [];
        for(let i = 0; i < len; i++){
            let node = queue.shift();
            if(i === len - 1) temp.push(node.val);
            if(node.left !== null) queue.push(node.left);
            if(node.right !== null) queue.push(node.right);
        }    
        res.push(temp);
    }
    return res;
};