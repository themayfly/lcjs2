/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
/*

Project a light from the top

||||||||||||||||||||||
 --
  ----

        --
               ---

 -----||--|||||---
 
*/
var merge = function(intervals) {
  let minStart = Math.min(...intervals.map(el => el[0]))
  let maxEnd = Math.max(...intervals.map(el => el[1]))
  // sort by start point asc
  intervals.sort((a, b) => (a[0] === b[0] ? (a[1] - b[1]) : (a[0] - b[0])))
  let ranges = [];
  for (let i = minStart; i <= maxEnd; i++) {
      for (let intv of intervals) {
        if (intv[0] <= i && i <= intv[1]) {
          ranges.push(i);
          break;
        }
      }
  }
  let result = [];
  ranges.push(Number.MAX_SAFE_INTEGER) // 
  let pair = [];
  for (let i = 0; i < ranges.length; i++) {
    if (pair.length === 0) {
      pair.push(ranges[i]);
    } else {
      if (ranges[i+1] && (ranges[i]+1 < ranges[i+1])) {
        pair[1] = ranges[i];
        result.push(pair);
        pair = [];
      }
    }
  }
  return result;  
};


console.log(merge([[1,3],[2,6],[8,10],[15,18]]));