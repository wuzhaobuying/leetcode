/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    let res = [];
    let track = [];
    nums.sort((a, b) => a - b);
    let visited = Array(nums.length).fill(false);
    let backtrack = function(nums, track, visited){
        if(track.length === nums.length){
            res.push(track.slice());
            return;
        }
        for(let i = 0; i < nums.length; i++){
            if(i > 0 && nums[i] === nums[i - 1] && visited[i-1]) continue;
            if(visited[i]) continue;
            track.push(nums[i]);
            visited[i] = true;
            backtrack(nums, track, visited);
            track.pop();
            visited[i] = false;
        }
    }
    backtrack(nums, track, visited);
    return res;
};