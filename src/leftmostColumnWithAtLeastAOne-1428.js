/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOneLinear = function(binaryMatrix) {
  let [rows, cols] = binaryMatrix.dimensions();
  let matrix = new Array(rows).fill(0).map(row => new Array(cols).fill(0));
  let firstCol = -1;
  for (let r = 0; r < rows; c++) {
    for (let c = 0; c < cols; r++) {
      if (binaryMatrix.get(c, r) > 0) {
        console.log(c, r, binaryMatrix.get(c, r));
        return c;
      }
    }
  }
  return -1;
};

var leftMostColumnWithOne = function(binaryMatrix) {
    let [rows, cols] = binaryMatrix.dimensions();
    let minIndex = cols;
    for (let i = 0; i < rows; i++) {
        let left = 0,  
            right = Math.min(minIndex, cols - 1); // no need to look at after previous minIndex
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (binaryMatrix.get(i, mid) === 0) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        if (binaryMatrix.get(i, left) === 1) {
            minIndex = Math.min(minIndex, left);
        }
    }
    return minIndex === cols ? -1 : minIndex;
};

