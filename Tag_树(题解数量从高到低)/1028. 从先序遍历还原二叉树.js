/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function(S) {
    const depthArr = S.split(/\d+/); // 存储深度
    depthArr.pop();
    const nodes = S.split(/-+/).map((val) => new TreeNode(val)); // 存储节点
    function build(depths, nodes) { // 根节点root是nodes[0], 只需要从节点1开始遍历
      for (let i = 1; i < nodes.length; i++) {
        if (depths[i - 1].length === depths[i].length) {
          //和前一个深度相同，则表示他两是兄弟
          nodes[i - 2].right = nodes[i];
        } else if (depths[i - 1].length < depths[i].length) {
          //大于前一个深度，则表示他是前一个的儿子
          nodes[i - 1].left = nodes[i];
        } else {
          //小于前一个深度，则表示他是前一个的叔父，需要找到叔父节点的parent
          let pre = i;
          while (depths[pre].length >= depths[i].length) {
            pre--;
          }
          // 此时pre节点就是节点i的parent
          nodes[pre].right = nodes[i];
        }
      }
    }
    build(depthArr, nodes);
    return nodes[0];  
  };