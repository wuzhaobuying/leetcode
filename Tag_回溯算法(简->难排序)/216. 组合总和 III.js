/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let track = [];
    let res = [];
    let backtrack = function(k, n, track, sum, start){
        if(sum > n || track.length > k) return;
        if(sum === n && track.length === k){
            res.push(track.slice());
            return;
        }
        for(let i = start + 1; i < 10; i++){
            track.push(i);
            backtrack(k, n, track, sum + i, i);
            track.pop();
        }
    }
    backtrack(k, n, track, 0, 0);
    return res;
};