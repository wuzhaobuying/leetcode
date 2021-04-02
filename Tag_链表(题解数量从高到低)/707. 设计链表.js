/**
 * Initialize your data structure here.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var MyLinkedList = function() {
    this.pre = new ListNode(null);
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let cur = this.pre.next;
    while(index--){
        cur = cur.next;
        if(cur === null) return -1;
    }
    return cur.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node = new ListNode(val);
    node.next = this.pre.next;
    this.pre.next = node;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let tail = this.pre;
    while(tail.next !== null){
        tail = tail.next;
    }
    tail.next = new ListNode(val);
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index < 0){
        this.addAtHead(val);
        return;
    }
    let node = new ListNode(val);
    let cur = this.pre;
    while(index--){
        cur = cur.next;
        if(cur === null) return;
    }
    node.next = cur.next;
    cur.next = node;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let cur = this.pre;
    while(index--){
        cur = cur.next;
        if(cur === null || cur.next === null) return;
    }
    cur.next = cur.next.next;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */