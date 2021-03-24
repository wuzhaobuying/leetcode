/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    let res = [];
    let track = "";
    let backtrack = function(low, high, track){
        let num = track - "0";
        if(num > high) return;
        if(num >= low && high >= num){
            res.push(num);
        }
        for(let i = 1; i < 10; i++){
            if(track.length !== 0 && i - (track[track.length - 1] - "0") !== 1)                    continue;
            track += i;
            backtrack(low, high, track);
            track = track.slice(0, track.length - 1);
        }
    }
    backtrack(low, high, track);
    return res.sort((a, b) => a-b);
};