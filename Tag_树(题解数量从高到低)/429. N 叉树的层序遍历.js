/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root === null) return [];
    let res = [];
    let queue = [root];
    while(queue.length !== 0){
        let temp = [];
        let len = queue.length;
        for(let i = 0; i < len; i++){
            let item = queue.shift();
            temp.push(item.val);
            for(let j = 0; j < item.children.length; j++){
                queue.push(item.children[j]);
            }
        }
        res.push(temp);
    }
    return res;
};