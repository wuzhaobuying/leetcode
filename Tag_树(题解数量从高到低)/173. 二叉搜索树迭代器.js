/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    let res = [];
    let helper = function(root){
        if(root === null) return;
        helper(root.left);
        res.push(root.val);
        helper(root.right);
    }
    helper(root);
    this.res = res;
    this.index = -1;
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    this.index++;
    return this.res[this.index];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    if(this.index !== this.res.length - 1){
        return true;
    }
    else return false;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */