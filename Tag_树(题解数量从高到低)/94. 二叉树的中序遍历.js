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
// var inorderTraversal = function(root) {
//     let res = [];
//     let traverse = function(root){
//         if(root === null) return;
//         traverse(root.left);
//         res.push(root.val);
//         traverse(root.right);
//     }
//     traverse(root);
//     return res;
// };
var inorderTraversal = function(root){
    let stack = [];
    let cur = root;
    let res = [];
    while(stack.length !== 0 || cur !== null){
        if(cur !== null){
            stack.push(cur);
            cur = cur.left;
        }
        else {
            cur = stack.pop();
            res.push(cur.val);
            cur = cur.right;
        }
    }
    return res;
}