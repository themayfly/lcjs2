/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
const isToeplitzMatrix = (matrix) => {
  for(let i = 1; i < matrix.length;i++){
      for(let j = 1; j < matrix[i].length; j++){
        let prev = matrix[i][j];
        let cur = matrix[i-1][j-1];
        if (prev !== cur) {
          return false;
        }
      }
  }
  return true;
};

let matrix = [
  [1,2,3,4],
  [5,1,2,3],
  [9,5,1,2]
];

console.log(isToeplitzMatrix(matrix));

