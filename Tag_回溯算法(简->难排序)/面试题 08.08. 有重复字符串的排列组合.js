/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function(S) {
    let track = "";
    let res = [];
    let visited = Array(S.length).fill(false);
    let backtrack = function(S, track, visited){
        if(track.length === S.length){
            res.push(track);
            return;
        }
        for(let i = 0; i < S.length; i++){
            if(visited[i] === true) continue;
            visited[i] = true;
            track += S[i];
            backtrack(S, track, visited);
            track = track.slice(0, track.length - 1);
            visited[i] = false;
        }
    }
    backtrack(S, track, visited);
    return Array.from(new Set(res));
};