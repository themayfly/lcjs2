/*

      1
    /   \
  2       3
 / \
4   5


  Binary tree traversals

  in-order ( left, root, right ) - 4 2 5 1 3
  pre-order ( root, left, right ) - 1 2 4 5 3
  post-order ( left, right, root ) - 4 5 2 3 1

*/

var Node = function(left, val, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

var Tree = function(node) {
  this.root = node;
}
Tree.prototype.makeNode = function(left, val, right) {
  return new Node(left, val, right);
}
Tree.prototype.setRoot = function(node) {
  this.root = node;
}
Tree.prototype.printBFS = function() {
  let queue = [this.root];
  let result = [];
  while (queue.length) {
    let cursor = queue.shift();
    if (result.indexOf(cursor.val) === -1) {
      result.push(cursor.val);
    }
    if (cursor.left) {
      queue.push(cursor.left);
    }
    if (cursor.right) {
      queue.push(cursor.right);
    }
  }
  return result;
}
Tree.prototype.printDFS = function() {
  let stack = [this.root];
  let result = [];
  while (stack.length) {
    let cursor = stack.pop();
    if (cursor.right) {
      stack.push(cursor.right);
    }
    if (cursor.left) {
      stack.push(cursor.left);
    }
    if (result.indexOf(cursor.val) === -1) {
      result.push(cursor.val);
    }
  }
  return result;
}

Tree.prototype.inOrder = function(node) {
  if (node) {
    this.inOrder(node.left);
    console.log(node.val);
    this.inOrder(node.right);
  }
}

Tree.prototype.preOrder = function(node) {
  if (node) {
    console.log(node.val);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }
}

Tree.prototype.postOrder = function(node) {
  if (node) {
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.val);
  }
}

Tree.prototype.getMaxDepth = function(root) {

  let queue = [this.root];
  let level = 1;
  queue.push(null); // https://www.youtube.com/watch?v=MHiHfW4iPlk
  while (queue.length) {
    let cur = queue.shift();
    if (cur === null) {

    }
  }
}

let t = new Tree();
let n4 = t.makeNode(null, 4, null);
let n5 = t.makeNode(null, 5, null);
let n2 = t.makeNode(n4, 2, n5);
let n3 = t.makeNode(null, 3, null);
let n1 = t.makeNode(n2, 1, n3);
t.setRoot(n1);
// t.inOrder(t.root);
// t.preOrder(t.root);
// t.postOrder(t.root);
// console.log(t.printBFS());
// console.log(t.printDFS());
