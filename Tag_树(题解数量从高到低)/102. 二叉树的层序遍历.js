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

var levelOrder = function(root) {
    let res = [];
    if(root === null) return res;
    let queue = [];
    queue.push(root);
    while(queue.length !== 0){
        let temp = [];
        let len = queue.length;
        for(let i = 0; i < len; i++){
            let head = queue.shift();
            temp.push(head.val);
            if(head.left !== null) queue.push(head.left);
            if(head.right !== null) queue.push(head.right);
        }
        res.push(temp);
    }
    return res;
};