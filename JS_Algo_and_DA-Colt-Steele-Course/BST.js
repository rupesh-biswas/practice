class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (val === current.val) return undefined;
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }
  find(val) {
    if (!this.root) return false;
    let current = this.root;
    while (current) {
      if (current.val === val) {
        return current;
      } else if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  contains(val) {
    if (!this.root) return false;
    let current = this.root;
    while (current) {
      if (current.val === val) {
        return true;
      } else if (val < current.val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  bfsTraverse() {
    if (!this.root) return [];
    let q = [];
    let result = [];
    let current;

    q.push(this.root);
    while (q.length !== 0) {
      current = q.shift();
      result.push(current.val);
      current.left && q.push(current.left);
      current.right && q.push(current.right);
    }
    return result;
  }
  dfsPreOrderTraverse() {
    if (!this.root) return [];
    let result = [];
    function helper(node) {
      result.push(node.val);
      node.left && helper(node.left);
      node.right && helper(node.right);
    }
    helper(this.root);
    return result;
  }
  dfsPostOrderTraverse() {
    if (!this.root) return [];
    let result = [];
    function helper(node) {
      node.left && helper(node.left);
      node.right && helper(node.right);
      result.push(node.val);
    }
    helper(this.root);
    return result;
  }
  dfsInOrderTraverse() {
    if (!this.root) return [];
    let result = [];
    function helper(node) {
      node.left && helper(node.left);
      result.push(node.val);
      node.right && helper(node.right);
    }
    helper(this.root);
    return result;
  }
}

let numBST = new BinarySearchTree();
numBST.insert(10);
numBST.insert(5);
numBST.insert(13);
numBST.insert(11);
numBST.insert(2);
numBST.insert(16);
numBST.insert(7);

let emptyBST = new BinarySearchTree();

let coltTree = new BinarySearchTree();
coltTree.insert(10);
coltTree.insert(6);
coltTree.insert(15);
coltTree.insert(3);
coltTree.insert(8);
coltTree.insert(20);
