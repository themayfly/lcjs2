/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let map = {},
      result = [];
  for (let num of nums1) {
    if (num in map === true) {
      map[num]++;
    } else {
      map[num] = 1;
    }
  }
  for (let num of nums2) {
    if (num in map === true && map[num] > 0) {
      result.push(num);
      map[num]--;
    }
  }
  return result;
};
