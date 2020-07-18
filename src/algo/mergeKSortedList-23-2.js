/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
[
1->4->5,
1->3->4,
2->6
]
*/

let lists = [
  new ListNode(1, new ListNode(4, new ListNode(5))),
  new ListNode(1, new ListNode(3, new ListNode(4))),
  new ListNode(2, new ListNode(6))
];

var listToArr = function (_lists) {
  let arr = _lists.map(el => {
    let list = [];
    let cur = el;
    list.push(cur.val);
    while (cur.next) {
        list.push(cur.next.val);
        cur = cur.next;
    }
    return list;
  });
  return arr;
};

var arrToList = function (arr = []) {
  let listNodes = arr.map((val, index) => new ListNode(val));
  listNodes.forEach((node, index) => {
    node.next = listNodes[index + 1]
  });
  return listNodes;
};

var mergeKLists = (_lists = []) => {
  let lists = [...listToArr(_lists)];
  let merged = [];
  while (lists.length > 1) {
    merged = mergeTwo(lists[0], lists[1]);
    lists.shift();
    lists.shift();
    lists.unshift(merged);
  }
  let result = arrToList(lists[0]);
  return result[0];
}

// arrA & arrB are sorted already
var mergeTwo = (A, B) => {
  let result = [];
  let a = [...A];
  let b = [...B];
  while (a.length && b.length) {
    // take out first element
    let fA = a[0] || 0;
    let fB = b[0] || 0;
    if (fA < fB) {
      result.push(fA);
      a.shift();
    } else {
      result.push(fB);
      b.shift();
    }
  }
  return result.concat(a, b);
}

var mergeKLists2 = function(lists) {
  if (!lists.length) return "";

  const arr = [];

  for( const head of lists){
      let tHead = head;
      while(tHead) {
          arr.push(tHead);
          tHead = tHead.next;
      }
  }

  // this effective functions like a priority queue...
  arr.sort( (a,b) => a.val - b.val)
  for(let i = 0; i < arr.length - 1; i++) {
    arr[i].next = arr[i+1];
  }

  if(arr.length) {
      arr[arr.length-1].next = null;
      return arr[0] ;
  }

  return "";
};




// console.log('#### merge ', mergeKLists(lists))
console.log('#### merge ', mergeKLists([[]]))
