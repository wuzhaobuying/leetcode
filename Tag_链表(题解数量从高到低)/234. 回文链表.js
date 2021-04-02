/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    let pre = new ListNode(null);
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }
    while(slow !== null){
        let temp = slow;
        slow = slow.next;
        temp.next = pre.next;
        pre.next = temp;
    }
    let tail = pre.next;
    while(head !== null && tail !== null){
        if(head.val !== tail.val) return false;
        head = head.next;
        tail = tail.next;
    }
    return true;
};