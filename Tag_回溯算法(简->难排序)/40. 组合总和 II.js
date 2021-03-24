/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a-b);
    let res = [];
    let track = [];
    let backtrack = function(candidates, track, target, start){
        if(target === 0){
            res.push(track.slice());
            return;
        }
        for(let i = start; i < candidates.length; i++){
            if (i - 1 >= start && candidates[i - 1] == candidates[i]) continue; 
            if(candidates[i] > target) break;
            track.push(candidates[i]);
            backtrack(candidates, track, target-candidates[i], i+1);
            track.pop();
        }
    }
    backtrack(candidates, track, target, 0);
    return res;
};