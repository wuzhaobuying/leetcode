/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    if(head === null) return null;
    if(head.next === null) return new TreeNode(head.val);
    let slow = head;
    let fast = head;
    let pre = new ListNode(null);;
    pre.next = head;
    while(fast !== null && fast.next !== null){
        pre = pre.next;
        slow = slow.next;
        fast = fast.next.next;
    }
    let after = slow.next;
    pre.next = null;
    slow.next = null;
    let node = new TreeNode(slow.val);
    node.left = sortedListToBST(head);
    node.right = sortedListToBST(after);
    return node;
};