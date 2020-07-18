/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (!prices || !prices.length) {
    return 0;
  }
  let maxDiff = 0;
  let curMin = prices[0];
  for (let i = 0; i < prices.length; i++) {
    curMin = Math.min(curMin, prices[i]);
    maxDiff = Math.max(maxDiff, prices[i]-curMin);
  }
  return maxDiff;
};