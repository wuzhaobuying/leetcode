/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    let track = "";
    let res = [];
    let visited = Array(tiles.length).fill(false);
    let backtrack = function(tiles, track, visited){
        
        for(let i = 0; i < tiles.length; i++){
            if(visited[i] === true) continue;
            track += tiles[i];
            res.push(track);
            visited[i] = true;
            backtrack(tiles, track, visited)
            visited[i] = false;
            track = track.slice(0, track.length - 1);
        }
    }
    backtrack(tiles, track, visited);
    res = Array.from(new Set(res));
    return res.length;
};