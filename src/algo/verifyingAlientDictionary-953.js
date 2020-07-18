
var isAlienSorted = function(words, order) {
  // iterate words.length -1
  for (let i = 0; i < words.length - 1; i++) {
    // check every char based on min(wordsA, wordsB)
    if (sorted(words[i], words[i + 1], order)) {
      continue;
    } else {
      return false;
    }
  }
  return true;
 };
  
 const sorted = (a, b, order) => {
   if (a.startsWith(b)) {
     return false;
   }
   for (let j = 0; j < Math.min(a.length, b.length); j++) {
     if (order.indexOf(a[j]) < order.indexOf(b[j])) {
       return true;
     } else if (order.indexOf(a[j]) > order.indexOf(b[j])) {
       return false;
     } else {
       continue;
     }
   }
   return true;
 };
