class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BST {
  constructor(value) {
    this.root = new Node(value)
    this.count = 1
  }

  size() {
    return this.count
  }

  insert(value) {
    this.count++
    const newNode = new Node(value)
    const searchTree = (node) => {
      // if value is less than node's value
      if (value < node.value) {
        // no left child
        if (!node.left) {
          node.left = newNode
        } else {
          searchTree(node.left)
        }
      } else if (value > node.value) {
        if (!node.right) {
          node.right = newNode
        } else {
          searchTree(node.right)
        }
      }
    }
    searchTree(this.root)
  }

  min() {
    const currentNode = this.root
    while (currentNode) {
      currentNode = currentNode.left
    }
    return currentNode.value
  }

  max() {
    const currentNode = this.root
    while (currentNode) {
      currentNode = currentNode.right
    }
    return currentNode.value
  }

  // left node right
  dfsInOrder() {
    const result = []
    function traverse(node) {
      if (node.left) {
        traverse(node.left)
      }
      result.push(node.value)
      if (node.right) {
        traverse(node.right)
      }
    }
    return result
  }
  
  // node, left, right
  dfsPreOrder() {
    const result = []
    function traverse(node) {
      result.push(node.value)
      if (node.left) {
        traverse(node.left)
      }
      if (node.right) {
        traverse(node.right)
      }
    }
    return result
  }

  // left, right, node
  dfsPostOrder() {
    const result = []
    function traverse(node) {
      if (node.left) {
        traverse(node.left)
      }
      if (node.right) {
        traverse(node.right)
      }
      result.push(node.value)
    }
    return result
  }

  // queue
  bfs() {
    const result = []
    const queue = [this.root]
    while (queue.length) {
      const cur = queue.shift()
      result.push(cur)
      if (cur.left) {
        queue.push(cur.left)
      }
      if (cur.right) {
        queue.push(cur.right)
      }
    }
    return result
  }
}

// 15,3,2,12,36,28,39
const bst = new BST(15)

bst.insert(3)
bst.insert(2)
bst.insert(12)
bst.insert(36)
bst.insert(28)
bst.insert(39)

console.log('#### size = ', bst.size())