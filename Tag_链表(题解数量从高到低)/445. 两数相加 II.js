/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let stack1 = [];
    let stack2 = [];
    let pre = new ListNode(null);
    while(l1 !== null || l2 !== null){
        if(l1 !== null){
            stack1.push(l1.val);
            l1 = l1.next;
        }
        if(l2 !== null){
            stack2.push(l2.val);
            l2 = l2.next;
        }
    }
    let flag = 0;
    while(stack1.length !== 0 || stack2.length !== 0){
        let left; 
        let right;
        if(stack1.length !== 0){
            left = stack1.pop();
        }
        else {
            left = 0;
        }
        if(stack2.length !== 0){
            right = stack2.pop();
        }
        else {
            right = 0;
        }
        let sum = left + right + flag;
        if(sum >= 10){
            flag = 1;
        } 
        else {
            flag = 0;
        }
        let temp = new ListNode(sum % 10);
        temp.next = pre.next;
        pre.next = temp;
    }
    if(flag === 1){
        let node = new ListNode(1);
        node.next = pre.next;
        pre.next = node;
    }
    return pre.next;
};