/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
    let arr = [];
    while(head !== null){
        arr.push(head.val);
        head = head.next;
    }
    let res = [];
    let falg = false;
    for(let i = 0; i < arr.length; i++){
        flag = false;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] > arr[i]){
                flag = true;
                res.push(arr[j]);
                break;
            }
        }
        if(!flag) res.push(0);
    }
    return res;
};