/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let track = [];
    let res = [];
    let backtrack = function(nums, track, start){
        res.push(track.slice());
        for(let i = start; i < nums.length; i++){
            track.push(nums[i]);
            backtrack(nums, track, i+1);
            track.pop();
        }
    }
    backtrack(nums, track, 0);
    return res;
};