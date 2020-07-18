/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function(intervals) {
  // edge case logic
  if (!intervals || intervals.length < 2) {
    return intervals;
  }
  // sort intervals
  intervals.sort((a, b) => ((a[0] === b[0] ? (a[1] - b[1]) : (a[0] - b[0]))));
  let result = [];
  while (intervals.length) {
    let cur = intervals.shift();
    let prev = result.pop();
    if (prev) {
      if (isOverlapped(prev, cur)) {
        let merged = mergeTwo(prev, cur);
        result.push(merged);
        prev = merged;
      } else {
        result.push(prev);
        result.push(cur);
      }
    } else {
      result.push(cur);
    }
  }
  return result;
}

const mergeTwo = (a, b) => {
  return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
}

const isOverlapped = (a, b) => (a[1] >= b[0]);



console.log(merge([[1,3],[2,6],[8,10],[15,18]]));