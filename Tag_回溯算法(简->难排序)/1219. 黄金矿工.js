/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function(grid) {
    let ans = 0;
    
    if (grid.length === 0) return ans;
    let rowLimit = grid.length, colLimit = grid[0].length;
    
    // 递归函数
    function backtrack(count, row, col) {
      ans = Math.max(ans, count);
      
      // 回溯上下左右四个方位
      let ways = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
      ];
      
      for (let i = 0; i < 4; i++) {
        let crow = row + ways[i][0],
            ccol = col + ways[i][1];
        if (crow < 0 || ccol < 0 || crow >= rowLimit || ccol >= colLimit || grid[crow][ccol] === 0) {
          continue;
        }
        
        let temp = grid[crow][ccol];
        grid[crow][ccol] = 0;
        backtrack( count + temp, crow, ccol );
        grid[crow][ccol] = temp;
      }
    };
    
    for (let i = 0; i < rowLimit; i++) {
      for (let j = 0; j < colLimit; j++) {
        if (grid[i][j] === 0) continue;
        let remember = grid[i][j];
        grid[i][j] = 0;
        backtrack( remember, i, j );
        grid[i][j] = remember;
      }
    }
    
    return ans;
  };