/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    if(n === 0) return 1;
    if(n === 1) return 10;
    let res = 0;
    let track = [];
    let len = n;
    let backtrack = function(n, track){
        if(n === 0){
            res++;
            return;
        }
        for(let i = n === len ? 1 : 0; i < 10; i++){
            if(track.indexOf(i) !== -1) continue;
            track.push(i);
            backtrack(n-1, track);
            track.pop();
        }
    }
    backtrack(n, track);
    return res + countNumbersWithUniqueDigits(n-1);
};