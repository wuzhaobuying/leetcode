/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(root, k) {
    let pre = new ListNode(null);
    pre.next = root;
    let res = [];
    let cur = root;
    let len = 0;
    while(cur !== null){
        len++;
        cur = cur.next;
    }
    let m = Math.floor(len / k);
    let n = len % k;
    cur = root;
    let before = cur;
    for(let i = 0; i < k; i++){
        let flag = m - 1;
        if(i < n) flag++;
        while(cur !== null && flag > 0){
            cur = cur.next;
            flag--;
        }
        if(cur === null){
            res.push(null);
        }
        else {
            let temp = cur.next;
            cur.next = null;
            res.push(before);
            before = temp;
            cur = temp;
        }
    }
    return res; 
};