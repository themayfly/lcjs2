/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

 /**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersection = function(nums1, nums2) {
  let map = {}, map2 = {},
      result = [];
  for (let num of nums1) {
    if (num in map === false) {
      map[num] = num;
    }
  }
  
  for (let num of nums2) {
    if (num in map === true && num in map2 === false) {
      result.push(num);
      map2[num] = num;
    }
  }
  return result;
};

var intersectionMap = function(nums1, nums2) {
  let map1 = {};
  let map2 = {};
  nums1.forEach(el => {
      if (!map1[el]) {
          map1[el] = el;
      }
  });
  nums2.forEach(el => {
      if (!map2[el]) {
          map2[el] = el;
      }
  });
  // console.log('#### map1 ', map1)
  // console.log('#### map2 ', map2)
  let mapCommon = {};
  for (let key1 in map1) {
    if (!mapCommon[key1]) {
      mapCommon[key1] = 0;
    }
    mapCommon[key1] += 1;
  }
  for (let key2 in map2) {
    if (!mapCommon[key2]) {
      mapCommon[key2] = 0;
    }
    mapCommon[key2] += 1;
  }
  return Object.keys(mapCommon).filter(el => mapCommon[el] > 1).map(el => el*1);
};

var intersectionIndexOf = function(nums1, nums2) {
  if (!nums1 || !nums2 || !nums1.length || !nums2.length) {
    return [];
  }
  nums1.sort();
  nums2.sort();
  let resultMap = {};
  let result = [];
  let outer = nums1.length > nums2.length ? nums1 : nums2;
  let inner = nums1.length <= nums2.length ? nums1 : nums2;
  // outer=[1,1,2,2], inner=[2,2]
  for (let i = 0; i < inner.length; i++) {
    let startIdx = outer.indexOf(inner[i]);
    if (startIdx === -1) {
      continue;
    }
    if (inner[i] in resultMap === false) {
      resultMap[inner[i]] = inner[i];  
      result.push(inner[i]);
    }
    
  }
  return result;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersectionBS = function(nums1, nums2) {
  if (!nums1 || !nums2 || !nums1.length || !nums2.length) {
    return [];
  }
  nums1.sort();
  nums2.sort();
  let resultMap = {};
  let result = [];
  let [large, small] = nums1.length > nums2.length ? [nums1, nums2] : [nums2, nums1];
  // large=[1,1,2,2], small=[2,2]
  let min = 0;
  for (let i = 0; i < small.length; i++) {
    // let startIdx = large.indexOf(small[i]);
    let startIdx = findIdxBS(large, small[i], min, large.length-1);
    // console.log('#### small[i]=%s, startIdx=%s', small[i], startIdx)
    if (startIdx === -1) {
      continue;
    }
    min = startIdx;
    if (small[i] in resultMap === false) {
      resultMap[small[i]] = small[i];  
      result.push(small[i]);
    }
  }
  return result;
};

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

console.log('#### intersection = ', intersectionBS([1,2,2,1], [2,2]))
// console.log('#### intersection = ', intersectionBS([4,9,5], [9,4,9,8,4]))
// console.log('#### intersection = ', intersectionBS([3,1,2], [1,1]))
