/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
  // edge case
  if (!intervals || intervals.length < 2) {
    return true;
  }
  // filter wrong data
  intervals = intervals.filter(el => el[0] < el[1]);

  // sort by start, end
  intervals.sort((a, b) => (a[0] === b[0] ? (a[1] - b[1]) : (a[0] - b[0])));
  
  // check every interval element with neighbors
  for (let i = 0; i < intervals.length-1; i++) {
    if (isOverlapped(intervals[i], intervals[i+1])) {
      return false;
    }
  }
  return true;
};

/*
  a = [0, 30]
  b = [5, 10]
*/
const isOverlapped = (a, b) => {
  return a[1] > b[0];
};