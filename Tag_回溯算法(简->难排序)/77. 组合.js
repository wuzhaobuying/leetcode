/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = [];
    let track = [];
    let backtrack = function(n, k, start){
        if(k === 0){
            res.push(track.slice());
            return;
        }
        for(let i = start + 1; i <= n; i++){
            track.push(i);
            backtrack(n, k-1, i);
            track.pop();
        }
    }
    backtrack(n, k, 0);
    return res;
};