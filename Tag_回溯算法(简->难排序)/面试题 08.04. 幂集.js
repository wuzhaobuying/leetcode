/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];
    let track = [];
    let backtrack = function(nums, track, index){
        res.push(track.slice());
        // if(track.length === nums.length){
        //     return;
        // }
        for(let i = index; i < nums.length; i++){
            track.push(nums[i]);
            backtrack(nums, track, i+1);
            track.pop();
        }
    }
    backtrack(nums, track, 0);
    return res;
};