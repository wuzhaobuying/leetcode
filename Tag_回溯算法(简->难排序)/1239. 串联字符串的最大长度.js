/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    let res = 0;
    let track = [];
    let backtrack = function(arr, track, start){
        if(isUnique(track.join(""))){
            res = Math.max(res, track.join("").length);
        }
        for(let i = start; i <= arr.length; i++){
            track.push(arr[i]);
            backtrack(arr, track, i + 1);
            track.pop();
        }
    }
    backtrack(arr, track, 0);
    return res;
};

var isUnique = function(str){
    return [...new Set(str)].length === str.length;
}