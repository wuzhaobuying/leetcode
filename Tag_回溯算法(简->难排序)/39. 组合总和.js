/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];
    let track = [];
    candidates.sort((a, b) => a - b);
    let backtrack = function (candidates, track, target, start){
        if(target === 0){
            res.push(track.slice());
            return;
        }
        for(let i = start; i < candidates.length; i++){
            if(target < candidates[i]) break;
            track.push(candidates[i]);
            backtrack(candidates, track, target - candidates[i], i);
            track.pop();
        }
    }
    backtrack(candidates, track, target, 0);
    return res;
};