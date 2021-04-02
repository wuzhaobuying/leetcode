/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let cur = head;
    let pre = new Node(null);
    let tail = pre;
    let map = new Map();
    while(cur !== null){
        let node = new Node(cur.val);
        map.set(cur, node);
        cur = cur.next;
        tail.next = node;
        tail = tail.next;
    }
    cur = head;
    let newCur = pre.next;
    while(cur !== null){
        newCur.random = map.get(cur.random);
        cur = cur.next;
        newCur = newCur.next;
    }
    return pre.next;
};