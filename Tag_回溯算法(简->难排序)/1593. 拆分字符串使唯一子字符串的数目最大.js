/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function(s) {
    let track = [];
    let res = 0;
    let backtrack = function(s, track, start){

        if(start === s.length){
            res = Math.max(res, track.length);
            return;
        }
        for(let i = start + 1; i <= s.length; i++){
            let subStr = s.slice(start, i);
            if(track.indexOf(subStr) !== -1) continue;
            track.push(subStr);
            backtrack(s, track, i);
            track.pop(); 
        }
    }
    backtrack(s, track, 0);
    return res;
};