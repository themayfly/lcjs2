/**
 * @param {number[]} nums
 * @return {number[]}
 
 nums = [ 1,  2,  3,  4]
 prod = [24, 12,  8,  6]
 
 left   [1   1    2   6]        
 right  [24  12   4   1]
 
 
 i=0    
 left   []
 right  [2*3*4]  
 
 i=1    
 left   [1]
 right  [3*4]
 
 i=2
 left   [1*2]
 right  [4]
 
 i=3
 left   [1*2*3]
 right  []
 
 */
var productExceptSelf = function(nums) {
  let left = new Array(nums.length).fill(1);
  let right = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i-1] * nums[i-1];
  }
  for (let i = nums.length-2; i >= 0; i--) {
    right[i] = right[i+1] * nums[i+1];
  }
  return nums.map((v, i) => left[i]*right[i]);
};

var productExceptSelfWithDivision = function(nums) {
  let zeroPositions = [];
  nums.forEach((el, i) => {
    if (el === 0) {
      zeroPositions.push(i)
    }
  });
  let production = zeroPositions.length > 1 ? 0 : nums.reduce((acc, cur) => {
    if (cur === 0) {
      return acc;
    } else {
      return acc * cur;
    }
  }, 1);

  return nums.map((num, i) => {
      if (zeroPositions.indexOf(i) === -1) {
        if (zeroPositions.length > 0) {
          return 0;
        } else {
          return production / num;
        }
      } else {
        return production;
      }
  });
};





const input = [1,2,3,4, 0];
console.log('#### productExceptSelf  in', input)
console.log('#### productExceptSelf out', productExceptSelf(input))
