/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    if (n === 0) return [0];
    const codes = grayCode(--n);
    return [...codes, ...codes.map(x => (1 << n) | x).reverse()];
};