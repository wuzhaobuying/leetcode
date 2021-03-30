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
// var preorderTraversal = function(root) {
//     let res = [];
//     let traverse = function(root){
//         if(root === null) return;
//         res.push(root.val);
//         traverse(root.left);
//         traverse(root.right);
//     }
//     traverse(root);
//     return res;
// };

var preorderTraversal = function(root){
    let stack = [];
    let res = [];
    let cur = root;
    while(cur !== null || stack.length !== 0){
        if(cur !== null){
            res.push(cur.val);
            stack.push(cur);
            cur = cur.left;
        }
        else {
            cur = stack.pop();
            cur = cur.right;
        }
    }
    return res;        
}