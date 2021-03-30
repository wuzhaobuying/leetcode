/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    if(!root) return [];
    let targetNode = null;
    let res = [];
    let paths = [];

    // 找到target节点，存储到targetNode中
    dfs(root, target);
    // 从当前节点向下寻找
    getdownDis(targetNode, k);
    // 从当前节点向上寻找
    while(targetNode.parent && k>0){
        targetNode = targetNode.parent;
        getdownDis(targetNode, --k);
    }

    // 辅助函数
    function dfs(_root, target){
        if(!_root || targetNode) return;
        if(_root.val === target.val){
            targetNode = _root;
        }
        if(_root.left){
            _root.left.parent = _root;
            dfs(_root.left, target);
        }
        if(_root.right){
            _root.right.parent = _root;
            dfs(_root.right, target);
        }
    }

    // 辅助函数
    function getdownDis(node, k){
        if(node === null || paths.indexOf(node) !== -1) return;
        paths.push(node);
        if(k>0){
            getdownDis(node.left, k-1);
            getdownDis(node.right, k-1);  
        }else if(k === 0){
            res.push(node.val);
        }
    }

    return res;

};