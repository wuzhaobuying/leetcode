/**
 * 你这个学期必须选修 numCourse 门课程，记为 0 到 numCourse-1 。
 * 在选修某些课程之前需要一些先修课程。
 *  例如，想要学习课程 0 ，你需要先完成课程 1 ，
 * 我们用一个匹配来表示他们：[0,1]给定课程总量以及它们的先决条件，
 * 请你判断是否可能完成所有课程的学习？
 *
 *
 * 拓扑排序
 *
 * @param {*} numCourses
 * @param {*} prerequisites
 */
const canFinish = (numCourses, prerequisites) => {
	const inDegree = new Array(numCourses).fill(0);
	let graph = {};
	for (let i = 0; i < prerequisites.length; i++) {
		inDegree[prerequisites[i][0]]++;
		if (graph[prerequisites[i][1]]) {
			graph[prerequisites[i][1]].push(prerequisites[i][0]);
		} else {
			let list = [];
			list.push(prerequisites[i][0]);
			graph[prerequisites[i][1]] = list;
		}
	}
	const queue = [];
	for (let i = 0; i < inDegree.length; i++) {
		if (inDegree[i] === 0) queue.push(i);
	}
	while (queue.length) {
		const select = queue.shift();
		const toEnQueue = graph[select];
		if (toEnQueue && toEnQueue.length) {
			for (let i = 0; i < toEnQueue.length; i++) {
				inDegree[toEnQueue[i]]--;
				if (inDegree[toEnQueue[i]] == 0) {
					queue.push(toEnQueue[i]);
				}
			}
		}
	}
	for (let i = 0; i < inDegree.length; i++) {
		if (inDegree[i] !== 0) return false;
	}
	return true;
};
