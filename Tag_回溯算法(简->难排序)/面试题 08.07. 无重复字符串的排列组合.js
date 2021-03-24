/**
 * @param {string} S
 * @return {string[]}
 */
var permutation = function(S) {
    let res = [];
    let track = "";
    let backtrack = function(S, track){
        if(track.length === S.length){
            res.push(track);
            return;
        }
        for(let i = 0; i < S.length; i++){
            if(track.indexOf(S[i]) !== -1) continue;
            track += S[i];
            backtrack(S, track);
            track = track.slice(0, track.length - 1);
        }
    }
    backtrack(S, track);
    return res;
};