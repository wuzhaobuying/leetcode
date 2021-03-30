/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root === null) return [];
    let queue = [root];
    let res = [];
    while(queue.length !== 0){
        let len = queue.length;
        let temp = [];
        for(let i = 0; i < len; i++){
            let item = queue.shift();
            temp.push(item.val);
            if(item.left !== null) queue.push(item.left);
            if(item.right !== null) queue.push(item.right);
        }
        res.push(temp);
    }
    return res;
};