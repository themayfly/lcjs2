/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function(nums, target) {
  let left = 0,
      right = nums.length - 1;
  while (left <= right) {
    let med = Math.floor((left + right) / 2);
    if (nums[med] === target) return med;
    if (nums[left] === target) return left;
    if (nums[right] === target) return right;
    
    if (nums[left] < nums[med]) { // increasing, sorted
      if (nums[left] < target && target < nums[med]) { // target in between left and med
        right = med - 1;
      } else {
        left = med + 1;
      }
    } else {
      if (nums[med] < target && target < nums[right]) {
        left = med + 1;
      } else {
        right = med - 1;
      }
    }
  }
  return -1;
};


nums=[4,5,6,7,0,1,2], target=0
console.log(search(nums, target));