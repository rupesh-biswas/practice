class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = new Node(value);
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = new Node(value);
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  remove(val) {
    if (!this.root) return undefined;

    function minValue(tree) {
      let current = tree;
      while (current.left !== null) {
        current = current.left;
      }
      return current.value;
    }

    function deleteNode(tree, val) {
      let current = tree,
        min;
      if (current.value > val) {
        current.left = deleteNode(current.left, val);
      } else if (current.value < val) {
        current.right = deleteNode(current.right, val);
      } else {
        if (!current.left) return current.right;
        if (!current.right) return current.left;

        min = minValue(current.right);
        current.value = min;
        current.right = deleteNode(current.right, min);
      }
      return current;
    }
    this.root = deleteNode(this.root, val);
    return this;
  }
}

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15).insert(20).insert(10).insert(12).insert(1).insert(5).insert(50);
// binarySearchTree.remove(50);
// binarySearchTree.root.right.value // 20
// binarySearchTree.root.right.right // null

// binarySearchTree.remove(5);
// binarySearchTree.root.left.left.value // 1
// binarySearchTree.root.left.left.right // null

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree
//     .insert(15)
//     .insert(20)
//     .insert(10)
//     .insert(12)
//     .insert(1)
//     .insert(5)
//     .insert(50);

// binarySearchTree.remove(1);
// binarySearchTree.root.left.left.value // 5
// binarySearchTree.root.left.left.left // null
// binarySearchTree.root.left.left.right // null

// binarySearchTree.remove(20);
// binarySearchTree.root.right.value // 50
// binarySearchTree.root.right.right // null
// binarySearchTree.root.right.left // null

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree
//     .insert(15)
//     .insert(20)
//     .insert(10)
//     .insert(12)
//     .insert(1)
//     .insert(5)
//     .insert(50)
//     .insert(60)
//     .insert(30)
//     .insert(25)
//     .insert(23)
//     .insert(24)
//     .insert(70);

// binarySearchTree.remove(10);
// binarySearchTree.root.left.value // 12
// binarySearchTree.root.left.left.value // 1
// binarySearchTree.root.left.left.right.value // 5

// binarySearchTree.remove(50);
// binarySearchTree.root.right.value // 20
// binarySearchTree.root.right.right.value // 60
// binarySearchTree.root.right.right.left.value // 30

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree
//     .insert(22)
//     .insert(49)
//     .insert(85)
//     .insert(66)
//     .insert(95)
//     .insert(90)
//     .insert(100)
//     .insert(88)
//     .insert(93)
//     .insert(89)

// binarySearchTree.remove(85);
// binarySearchTree.root.right.right.value // 88
// binarySearchTree.root.right.right.right.left.left.value // 89
