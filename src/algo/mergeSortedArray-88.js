/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 
Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3
Output: [1,2,2,3,5,6]
 */

// using merge sort

// put biggest one last
// put biggest one last
var merge = function(nums1, m, nums2, n) {
  let idx1 = m - 1;
  let idx2 = n - 1;
  let idx3 = m + n - 1;
  while (idx2 >= 0) {
    if (nums1[idx1] > nums2[idx2]) {
      nums1[idx3--] = nums1[idx1--] // it is ok to overwrite nums1 b/c it is already sorted, and overwriting from largest one
    } else {
      nums1[idx3--] = nums2[idx2--]
    }
  }
};

var mergeMerge = function(nums1, m, nums2, n) {
  // copy nums2 into nums1 O(n)
  let result = [];
  let i = 0, j = 0;
  while ((i+j) < (m+n)) {
    if (nums1[i] > 0 && (nums1[i] < nums2[j])) {
      result.push(nums1[i]);
      i++;
    } else {
      result.push(nums2[j]);
      j++;
    }
  }
  console.log(result)
  for (let i=0; i<nums1.length; i++) {
    nums1[i] = result[i]
  }
};

var mergeAndSort = function(nums1, m, nums2, n) {
  // copy nums2 into nums1 O(n)
  for (let i = 0; i < nums2.length; i++) {
    nums1[m+i] = nums2[i]
  }
  nums1.sort((a, b) => a - b)
};

// let nums1 = [1,2,3,0,0,0], 
//     m = 3,
//     nums2 = [2,5,6],       
//     n = 3;

let nums1 = [2,0],
    m = 1
    nums2 = [1],
    n = 1;


mergeAndSort(nums1, m, nums2, n)
merge(nums1, m, nums2, n)
console.log(nums1)
