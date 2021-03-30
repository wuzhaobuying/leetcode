/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {TreeNode} tree
 * @return {ListNode[]}
 */
var listOfDepth = function(tree) {
    let res = [];
    let queue = [tree];
    while(queue.length !== 0){
        let head = new ListNode(null);
        let cur = head;
        let len = queue.length;
        for(let i = 0; i < len; i++){
            let item = queue.shift();
            let listNode = new ListNode(item.val);
            cur.next = listNode;
            cur = cur.next;
            if(item.left !== null) queue.push(item.left);
            if(item.right !== null) queue.push(item.right);
        }
        res.push(head.next);
    }
    return res;
};