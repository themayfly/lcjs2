var subarraySum = function(nums, k) {
  let count = 0;
  let sum = 0;
  let map = {0:1};
  // [1,2,3,4,5,6,7]
  // nums[i, j] = nums[0, j] - nums[0, i] ---> SUM([2,4]) = SUM([0,4]) - SUM([0,1])  X = 15 - 3 -> "12"
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    // k = sum - "some value in map"
    let diff = sum - k;
    if (map[diff]) {
      count += map[diff];      
    }
    if (sum in map == false) {
      map[sum] = 0;
    }
    map[sum]++;
  }
  return count;
};
var subarraySumBF = function(nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j] || 0;
      if (k === sum) {
        count++;
      }
    }
  }
  return count;
 };
  
 https://leetcode.com/problems/subarray-sum-equals-k/discuss/102106/Java-Solution-PreSum-%2B-HashMap
 /*
 1. Hashmap<sum[0,i - 1], frequency>
 2. sum[i, j] = sum[0, j] - sum[0, i - 1]    --> sum[0, i - 1] = sum[0, j] - sum[i, j]
        k           sum      hashmap-key     -->  hashmap-key  =  sum - k
 */

console.log(subarraySum([1,0,1,2,-1], 2));
