/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
    let res = false;
    let len = n;
    let backtrack = function(len, n, start){
        if(n === 0){
            res = true;
            return;
        }
        if(3 ** start > n) return;
        backtrack(len, n - 3 ** start, start+1);
        backtrack(len, n, start+1);
        };
    backtrack(len, n, 0);
    return res;
};