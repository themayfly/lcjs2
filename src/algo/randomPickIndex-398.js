/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.nums = nums;
  this.map = {};
  this.org = {};
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
  if (!this.nums) {
    return null;
  }
  if (this.nums.length === 1) {
    return 0;
  }
  let idxs = [];
  for (let i = 0; i < this.nums.length; i++) {
    if (this.nums[i] === target) {
      idxs.push(i);
    }
  }
  this.map[target] = idxs;
  this.org[target] = [...idxs];
  
  let ranIdx = Math.round(Math.random()*idxs.length - 1);
  let result = this.map[target].splice(ranIdx, 1); // use ranIdx's
  if (this.map[target].length === 0) {
    this.map[target] = [...this.org[target]]; // refill if empty
  }
  return result[0];
};