/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function(characters, combinationLength) {
    let res = [];
    let track = "";
    let backtrack = function(characters, combinationLength, track, start){
        if(combinationLength === track.length){
            res.push(track);
            return;
        }
        for(let i = start; i < characters.length; i++){
            track += characters[i];
            backtrack(characters, combinationLength, track, i+1);
            track = track.slice(0, track.length - 1);
        }
    }
    backtrack(characters, combinationLength, track, 0);
    this.res = res;
    this.k = 0;
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
    let next = this.res[this.k];
    this.k++;
    return next;
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
    if(this.k === this.res.length) return false;
    else return true;
};

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */