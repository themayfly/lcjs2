/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */

/*
  1. get intersection between two arrays
  A : ---   ----  [[0, 3], [5, 9]]
  B :   -- --     [[2, 4], [5, 7]]
  -- -- --
      -----------
*/
var intervalIntersection = function(A, B) {
    let idxA = 0, 
        idxB = 0,
        result = [];
    while (idxA < A.length && idxB < B.length) {
      let left = Math.max(A[idxA][0], B[idxB][0]); // max start
      let right = Math.min(A[idxA][1], B[idxB][1]); // min end
      if (left <= right) {
        result.push([left, right]);
      }
      if (A[idxA][1] < B[idxB][1]) {
        idxA++;
      } else {
        idxB++;
      }
    }
    return result;
};
