/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let track = [];
    let res = [];
    let backtrack = function(nums, track){
        if(track.length === nums.length){
            res.push(track.slice());
            return;
        }
        for(let i = 0; i < nums.length; i++){
            if(track.indexOf(nums[i]) !== -1) continue;
            track.push(nums[i]);
            backtrack(nums, track);
            track.pop();
        }
    }
    backtrack(nums, track);
    return res;
};