/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    let res = [];
    let track = [0];
    let n = graph.length - 1;
    let dfs = function(graph, track, index){
        if(track[track.length - 1] === n){
            res.push(track.slice());
            return;
        }
        for(let i = 0; i < graph[index].length; i++){
            if(track.indexOf(graph[index][i]) !== -1) continue;
            track.push(graph[index][i]);
            dfs(graph, track, graph[index][i]);
            track.pop();
        }
    }
    dfs(graph, track, 0);
    return res;
};