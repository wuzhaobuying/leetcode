/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b);
    let track = [];
    let res = [];
    let backtrack = function(nums, track, start){
        res.push(track.slice());
        for(let i = start; i < nums.length; i++){
            if(i > start && nums[i] === nums[i - 1]) continue;
            track.push(nums[i]);
            backtrack(nums, track, i + 1);
            track.pop();
        }
    }
    backtrack(nums, track, 0);
    return res;
};