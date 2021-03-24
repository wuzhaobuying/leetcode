/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let res = [];
    let track = [];
    let indexArr = [];
    let len = s.length;
    let backtrack = function(s, track, indexArr, len){
        if(len === 0){
            track = [];
            indexArr.reduce((pre, cur) => {
                track.push(s.slice(pre, pre + cur));
                return pre+cur;
            }, 0)
            if(track.every(item => {
                return isPlalindrome(item);
            })){
                res.push(track.slice());
            }
        }
        for(let i = 1; i <= s.length; i++){
            if(i > len) break;
            indexArr.push(i);
            backtrack(s, track, indexArr, len - i);
            indexArr.pop();
        }
    }
    backtrack(s, track, indexArr, len);
    return res;
};

var isPlalindrome = function(string){
    let i = 0;
    let j = string.length - 1;
    while(i <= j){
        if(string[i] !== string[j]) return false;
        i++;
        j--;
    }
    return true;
}