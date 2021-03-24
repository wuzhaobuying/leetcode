/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    if( s.length > 12 || s.length < 4) return [];
    let n = 3;
    let track = [];
    let res = [];
    let backtrack = function(s, track, n, start){
        if(n === 0){
            if(s.slice(start).length > 3) return;
            if(s.slice(start).length === 2 && s.slice(start) - "0" < 10) return;
            if(s.slice(start).length === 3 && s.slice(start) - "0" < 100) return;
            if(s.slice(start) - "0" >=0 && s.slice(start) - "0" <= 255){
                let arr = "";
                track.reduce((pre, cur) => {
                    arr = arr + s.slice(pre, cur) + ".";
                    return cur;
                }, 0);
                arr += s.slice(track[track.length - 1]);
                res.push(arr);
            }
            return;
        }
        for(let i = 1; i <= 3; i++){
            if(start + i >= s.length ) break;
            if(i === 2 && s.slice(start, start + i) - "0" < 10)                        continue;
            if(i === 3 && (s.slice(start, start + i) - "0" < 100 || 
            s.slice(start, start + i) - "0" > 255))
                continue;
            track.push(i + start);
            backtrack(s, track, n-1, i + start);
            track.pop();
        }
    }        
    backtrack(s, track, 3, 0);
    return res;
};