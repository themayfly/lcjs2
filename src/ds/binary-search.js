var findIdxBS = function(arr = [], target, start, end) {
  if (arr.length < 2) {
    return arr.indexOf(target);
  }
  start = start || 0;
  end = end || arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start+end)/2);
    if (arr[mid] < target) { // target is on right
      start = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else { // arr[mid] === target means answer!
      return mid;
    }
  }
  return -1;
}
