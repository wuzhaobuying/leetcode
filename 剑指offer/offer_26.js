/**
 * 输入两棵二叉树A和B，判断B是不是A的子结构。(约定空树不是任意一个树的子结构)
 * B是A的子结构， 即 A中有出现和B相同的结构和节点值。
 *
 * 通过dfs来比较当前A子树、B子树是否能够匹配
 * 在通过dfs(A, B) || 左子树和B子树 || 右子树和B子树
 * @param {A树} A
 * @param {B树} B
 *
 */
function isSubStructure(A, B) {
	function dfs(A, B) {
		if (!B) return true;
		if (!A) return false;
		return A.val === B.val && dfs(A.left, B.left) && dfs(A.right, B.right);
	}
	if (!A || !B) return false;
	return dfs(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
}
