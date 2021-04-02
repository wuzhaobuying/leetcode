/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let stack = [];
    while(head !== null){
        stack.push(head.val);
        head = head.next;
    }
    let sum = 0;
    let k = 1;
    while(stack.length !== 0){
        let num = stack.pop();
        sum += num * k;
        k = k * 2;
    }
    return sum;
};