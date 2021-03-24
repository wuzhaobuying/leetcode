/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    if(num === 0) return ["0:00"];
    let arr = [8, 4, 2, 1, 32, 16, 8, 4, 2, 1];
    let res = [];
    let track = []; //存的是下标
    let maxNum = 0;
    let backTrack = function(num, track, maxNum){
        if(num === 0){
            res.push(track.slice());
            return;
        }
        for(let i = maxNum; i < arr.length; i++){
            if(track.indexOf(i) !== -1) continue;
            track.push(i);
            maxNum = i;
            backTrack(num-1, track, maxNum); 
            track.pop();
            maxNum = track[track.length - 1]
        }
    }
    backTrack(num, track, maxNum);
    res = res.map(item => {
        let hour = 0;
        let minute = 0;
        item.forEach(index => {
            if(index <= 3){
                hour += arr[index];
            }
            else {
                minute += arr[index];
            }
        })
        if(minute < 10){
            minute = "0" + minute;
        }
        else if(minute >= 60){
            return null;
        }
        if(hour >= 12) 
            return null;
        else 
            return hour + ":" + minute; 
        })
        res = res.filter(item => item !== null);
    return res.reverse();
};