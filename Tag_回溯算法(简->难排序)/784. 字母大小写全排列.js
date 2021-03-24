/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
    let res = [];
    let track = "";
    let backtrack = function(S, track, start){
        if(S.length === track.length){
            res.push(track);
            return;
        }
        for(let i = start; i < S.length; i++){
            if("a" <= S[i] && S[i] <= "z"){
                backtrack(S, track + S[i], i+1);
                backtrack(S, track + S[i].toUpperCase(), i+1)
            }
            else if("A" <= S[i] && S[i] <= "Z"){
                backtrack(S, track + S[i], i+1);
                backtrack(S, track + S[i].toLowerCase(), i+1)                
            }
            else {
                backtrack(S, track + S[i], i+1);
            }
        }
    }
    backtrack(S, track, 0);
    return res;
};