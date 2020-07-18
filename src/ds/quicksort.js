function QuickSortCheapMemory(arr, left, right) {
  if(!arr || arr.length == 0 ) {
      return arr;
  }
  left = left || 0;
  right = right || arr.length - 1;
  let pivot = partition(arr, left, right); // first index of right hand side : P
  if (left < (pivot - 1)) { // # of ramaining on left is not 1
      QuickSortCheapMemory(arr, left, pivot - 1);
  }
  if (pivot < right) {
      QuickSortCheapMemory(arr, pivot, right);
  }
  function partition(arr, left, right) {
      let median = arr[Math.floor((left + right) / 2)];
      while (left <= right) {
          while (arr[left] < median) left++;
          while (median < arr[right]) right--;
          if (left <= right) {
              let temp = arr[left];
              arr[left] = arr[right];
              arr[right] = temp;
              left++;
              right--;
          }
      }
      return left;
  }
  return arr;
}
