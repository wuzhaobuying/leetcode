/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function(n, k) {
    let res = [];
    let track = "";
    let strArr = ["a", "b", "c"];
    let backtrack = function(n, track){
        if(n === 0){
            res.push(track);
            return;
        }
        for(let i = 0; i < strArr.length; i++){
            if(track[track.length - 1] === strArr[i]) continue;
            track += strArr[i];
            backtrack(n-1, track);
            track = track.slice(0, track.length-1);
        }
    }
    backtrack(n, track);
    if(res.length < k) return "";
    else return res[k-1];
};