/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    let track = "";
    let backtrack = function(n, track, left, right){
        if(left > n || right > n){
            return;
        }
        if(left < right){
            return;
        }
        if(track.length === n * 2){
            res.push(track);
            return;
        }
        backtrack(n, track + "(", left + 1, right);
        backtrack(n, track + ")", left, right + 1);
    }
    backtrack(n, track, 0, 0);
    return res;
};