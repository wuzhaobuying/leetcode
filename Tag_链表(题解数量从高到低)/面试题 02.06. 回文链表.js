/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(head === null || head.next === null) return true;
    let slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    let reverseNode = reverseList(slow);
    while(reverseNode !== null){
        if(reverseNode.val !== head.val) return false;
        head = head.next;
        reverseNode = reverseNode.next;
    }
    return true;
};

var reverseList = function(head){
    if(head === null || head.next === null)
        return head;
    let node = reverseList(head.next);
    head.next.next =  head;
    head.next = null;
    return node;
}