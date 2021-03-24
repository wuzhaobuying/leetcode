/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var numsSameConsecDiff = function(n, k) {
    let res = [];
    let len = n;
    let track = "";
    let backtrack = function(n, k, track){
        if(n === 0){
            res.push(track - "0");
            return;
        }
        for(let i = n === len ? 1 : 0; i < 10; i++){
            if(track.length >= 1 && k !== Math.abs(i - (track[track.length - 1] - "0")))
                continue;
            track += i;
            backtrack(n - 1, k, track);
            track = track.slice(0, track.length - 1);
        }
    }
    backtrack(n, k, track);
    return res;
};