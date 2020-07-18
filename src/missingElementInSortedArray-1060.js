/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingElement = function (nums, k) {
  for (let i = 0; i < nums.length - 1; i++) {
    let diff = nums[i + 1] - nums[i] - 1;
    if (diff === 0) {
      continue;
    }
    if (k <= diff) {
      return nums[i] + k;
    } else {
      k = k - diff;
    }
  }
  return nums[nums.length - 1] + k;
};

var missingElementBinarySearch = function (nums, k) {
  let l = 0, r = nums.length - 1;
  while (l < r) {
    const mid = l + Math.floor((r - l) / 2);
    const numMissed = nums[mid] - nums[0] - mid;
    if (numMissed < k) l = mid + 1;
    else r = mid;
  }

  const totalMissed = nums[l] - nums[0] - l;
  if (totalMissed >= k) return nums[l] - 1 - (totalMissed - k);
  else return nums[l] + (k - totalMissed);
};

// [4,7,9,10,14,16,17,20,22], k = 5
//  L         M           R
//  0         
//  numOfEmptySlot (14-4) - (4-0) = 6 (pivot)
var missingElementBinarySearch2 = function(nums, k) {
  // pointer index on left and right 
  let left = 0,
      right = nums.length - 1,
      pivot = 0;
  
  while (left < right) {
    let medIdx = Math.floor((left + right)/2);
    pivot = (nums[medIdx] - nums[left]) - (medIdx - left);
    if (pivot >= k) { // answer is in left side
      right = medIdx;
    } else {
      left = medIdx+1;
    }
  }
  console.log('#### left=%s right=%s pivot=%s', left, right, pivot)
};
