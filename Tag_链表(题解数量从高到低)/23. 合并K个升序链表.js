/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length === 0) return null;
    let helper = function(lists, i, j){
        if(i > j) return;
        if(i === j) return lists[i];
        let index = i + Math.floor((j - i) / 2);
        let left = helper(lists, i, index);
        let right = helper(lists, index + 1, j);
        return merge(left, right);
    }
    return helper(lists, 0, lists.length - 1)
};

let merge = function(l1, l2){
    let pre = new ListNode(null);
    let cur = pre;
    while(l1 !== null && l2 !== null){
        let temp;
        if(l1.val <= l2.val){
            temp = l1;
            l1 = l1.next;
        }
        else {
            temp = l2;
            l2 = l2.next;
        }
        cur.next = temp;
        cur = cur.next;
    }
    if(l1 !== null){
        cur.next = l1;
    }
    if(l2 !== null){
        cur.next = l2;
    }
    return pre.next;
}