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
 * @return {number}
 */
var minDepth = function(root) {
    if(root === null) return 0;
    let queue = [root];
    let index = 1;
    while(queue.length !== 0){
        let len = queue.length;
        for(let i = 0; i < len; i++){
            let head = queue.shift();
            if(head.left === null & head.right === null){
                return index;
            }
            if(head.left !== null) queue.push(head.left);
            if(head.right !== null) queue.push(head.right);
        }
        index++;
    }   
};