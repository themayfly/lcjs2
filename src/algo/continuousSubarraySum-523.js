var checkSubarraySum = function(nums, k) {
  let map = {0: -1};
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (k !== 0) {
      sum = sum % k;  
    }
    if (sum in map === true) {
      // i~j :  subsum[i,j] = sum[j] - sum[i-1] 
      if (i-map[sum] > 1) { // length = at least 2 , diff of index should be gte 2
          return true;
      }
    } else {
      map[sum] = i
    }
  }
  return false;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
  let list = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (i < j) {
        let sub = nums.slice(i, j+1);
        // console.log(nums.slice(i, j))
        let sum = sub.reduce((acc, cur) => (acc + cur));
        if (sub.length > 1) {
            if (k === 0 && sum === 0) {
                return true;
            }
            if ((sum % k) === 0) {
                return true;
            }
        }
      }
    }
  }
  return false;
};

// 1. get all sub array of nums
// 2. check all sub array to see if sum equals k
// 2.1 optimize



// 1. get all sub array of nums
// 2. check all sub array to see if sum equals k
// 2.1 optimize

console.log(getSubArrays([23, 2, 6, 4, 7], 6));
