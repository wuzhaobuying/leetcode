function NodeList(val, next = null) {
    this.val = val
    this.next = next
}
var FrontMiddleBackQueue = function() {
    this.head = new NodeList(-1)
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {
    let p = this.head.next
    this.head.next = new NodeList(val, p)
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
    let slot = this.head
    let fast = this.head.next
    while(fast && fast.next) {
        slot = slot.next
        fast = fast.next.next
    }
    let  p = slot.next
    slot.next = new NodeList(val, p)
};

/** 
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
    let p = this.head
    while(p.next) {
        p = p.next
    }
    p.next = new NodeList(val)
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {
    let p = this.head
    if(p.next == null) return - 1
    let q = p.next
    p.next = q.next
    return q.val
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {
    let slot = this.head
    let fast = this.head.next
    if(fast === null) return -1
    while(fast && fast.next) {
        fast = fast.next.next
        if(fast) {
            slot = slot.next
        }
    }
    let q = slot.next
    slot.next = q.next
    return q.val
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
    let p = this.head
    if(p.next === null) return p.val
    // 不满足条件说明p.next就是最后一个
    while(p.next && p.next.next){
        p = p.next
    }
    let val = p.next.val
    p.next = null
    return val
};

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */