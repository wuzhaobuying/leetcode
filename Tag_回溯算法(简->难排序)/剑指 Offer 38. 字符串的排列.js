/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
    s = s.split("").sort().join("");
    let res = [];
    let track = "";
    let visited = Array(s.length).fill(false);
    let backtrack = function(s, track, visited){
        if(s.length === track.length){
            res.push(track);
            return;
        }
        for(let i = 0; i < s.length; i++){
            if((i > 0 && !visited[i-1]) && s[i] === s[i-1] || visited[i]) continue;
            visited[i] = true;
            track += s[i];
            backtrack(s, track, visited);
            visited[i] = false;
            track = track.slice(0, track.length - 1);
        }
    }
    backtrack(s, track, visited);
    return res;
};