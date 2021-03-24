/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function(n) {
    let res = [];
    let track = [];
    let backtrack = function(n, track){
        if(track.length === n){
            res.push(track.slice());
            return;
        }
        for(let i = 1; i <= n; i++){
            if(track.indexOf(i) !== -1) continue;
            if((track.length+1) % i !== 0 && i % (track.length+1) !== 0) continue;
            track.push(i);
            backtrack(n, track);
            track.pop();
        }
    }
    backtrack(n, track);
    console.log(res);
    return res.length;
};