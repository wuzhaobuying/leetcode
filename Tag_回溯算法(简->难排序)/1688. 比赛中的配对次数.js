/**
 * @param {number} n
 * @return {number}
 */
//规律法
// var numberOfMatches = function(n) {
//     let res = 0;
//     while(n !== 1){
//         if(n % 2 === 1){
//            res += (n + 1) / 2 ; 
//         }
//         else {
//             res += n / 2;
//         }
//         n = Math.floor(n / 2);
//     }
//     return res;
// };
//递归写法
var numberOfMatches = function(n) {
    if(n === 1) return 0;
    if(n === 2) return 1;
    if(n % 2 === 1){
        return Math.ceil(n / 2) + numberOfMatches((n - 1) / 2); 
    }
    else {
        return Math.ceil(n / 2) + numberOfMatches(n / 2);
    }
}