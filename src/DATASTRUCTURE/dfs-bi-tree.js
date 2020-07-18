function dfs(root) {
  let stack = [root]
  let res = []

  while (stack.length) {
    let curr = stack.pop()
    res.push(curr.key)

    if (curr.right){
      stack.push(curr.right)
    }

    if (curr.left){
      stack.push(curr.left)
    }
  }

  return res.reverse()
}

function bfs(root) {
  let queue = [root]
  let res = []

  while (queue.length) {
    let curr = queue.shift()
    res.push(curr.key)

    if (curr.right){
      queue.push(curr.right)
    }

    if (curr.left){
      queue.push(curr.left)
    }
  }

  return res
}


// 1. pop one
// 2. put children into stack
// 3. insert that into visited
// repeat 1,2,3

function Node(value) {
  this.value = value;
  this.children = {};
}

function dfsTree(root) {
  let stack = [root]
  let visited = {}
  while (stack.length) {
    // 1. pop
    let cur = stack.pop()

    // 2. insert that into visited
    if (cur.value in visited === false) {
      visited[cur.value] = cur
    }

    // 3. put children into stack
    for (let childKey of Object.keys(cur.children).reverse()) {
      let child = cur.children[childKey]
      if (child.value in visited === false) {
        stack.push(child)
      }
    }

  }
  return Object.keys(visited)
}


function dfsTree(root) {
  let queue = [root]
  let visited = {}
  while (queue.length) {
    // 1. pop
    let cur = queue.shift()

    // 2. insert that into visited
    if (cur.value in visited === false) {
      visited[cur.value] = cur
    }

    // 3. put children into stack
    for (let childKey of Object.keys(cur.children).reverse()) {
      let child = cur.children[childKey]
      if (child.value in visited === false) {
        queue.push(child)
      }
    }

  }
  return Object.keys(visited)
}


function connect(parent, child) {
  parent.children[child.value] = child;
}

/*
                25


      20                  36
      /  \
     /
   10     22          30      40

*/

var n25 = new Node(25);
var n20 = new Node(20);
var n36 = new Node(36);
var n10 = new Node(10);
var n22 = new Node(22);
var n30 = new Node(30);
var n40 = new Node(40);

connect(n25, n20)
connect(n25, n36)
connect(n20, n10)
connect(n20, n22)
connect(n36, n30)
connect(n30, n40)

console.log(JSON.stringify(n25, null, 4))
// console.log(dfsTree(n25));
