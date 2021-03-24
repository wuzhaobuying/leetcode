/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
    let arr = ["a", "e", "i", "o", "u"];
    let res = 0;
    let backtrack = function(arr, n, start){
        if (n === 0){
            res++;
            return;
        }
        for(let i = start; i < arr.length; i++){
            backtrack(arr, n-1, i);
        }
    }
    backtrack(arr, n, 0);
    return res;
};