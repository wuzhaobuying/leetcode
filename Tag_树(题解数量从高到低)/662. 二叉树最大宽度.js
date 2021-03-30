// /**
//  * Definition for a binary tree node.
//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }
//  */
// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */ 答案正确 但是超时
// var widthOfBinaryTree = function(root) {
//     if(root === null) return 0;
//     let queue = [root];
//     let res = 0;
//     while(queue.length !== 0){
//         let len = queue.length;
//         let temp = [];
//         let low = 0;
//         let high = 0;
//         let flag = false;
//         for(let i = 0; i < len; i++){
//             let item = queue.shift();
//             if(item === null && temp.length !== 0){
//                 queue.push(null);
//                 queue.push(null);
//                 temp.push(null);
//             }
//             else if(item !== null){
//                 flag = true;
//                 temp.push(item.val);
//                 queue.push(item.left);
//                 queue.push(item.right); 
//             }
//         }
//         for(let i = 0; i < temp.length; i++){
//             if(temp[i] !== null){
//                 low = i;
//                 break;
//             }
//         }
//         for(let i = temp.length - 1 ; i > -1; i--){
//             if(temp[i] !== null){
//                 high = i;
//                 break;
//             }
//         }
//         res = Math.max(res, high - low + 1);
//         if(!flag) return res;     
//     }
// };

var widthOfBinaryTree = function (root) {
    if (!root) {
        return 0
    }
    let ans = 1n, que = [[0n, root]]
    while (que.length) {
        const width = que[que.length - 1][0] - que[0][0] + 1n
        if (width > ans) {
            ans = width
        }
        let tmp = []
        for (const [i, q] of que) {
            q.left && tmp.push([i * 2n, q.left])
            q.right && tmp.push([i * 2n + 1n, q.right])
        }
        que = tmp
    }
    return Number(ans)
};