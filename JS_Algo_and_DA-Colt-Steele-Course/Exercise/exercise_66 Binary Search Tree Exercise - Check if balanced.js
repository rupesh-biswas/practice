// Helpful aticle: https://www.digitalocean.com/community/tutorials/balanced-binary-tree-check
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
    // only accept numbers....watch out since NaN is typeof number!
    if (typeof value === "number" && !isNaN(value)) {
      // if there is nothing in the tree, start it off with a new node!
      if (this.root === null) {
        this.root = new Node(value);
        return this;
      } else {
        // current variable used for traversal, just like linked lists!
        var current = this.root;
        // keep looping till we get to the correct spot;
        while (true) {
          if (value < current.value) {
            // if there is nothing on the left
            if (current.left === null) {
              // make a new node and get out
              current.left = new Node(value);
              return this;
            } // otherwise, keep moving on!
            else {
              current = current.left;
            }
          } else if (value > current.value) {
            // if there is nothing on the right
            if (current.right === null) {
              // make a new node and get out
              current.right = new Node(value);
              return this;
            } else {
              current = current.right;
            }
          } // otherwise it must be a duplicate so let's get out of here
          else {
            return "duplicate!";
          }
        }
      }
    } else return "Please insert a number";
  }
  isBalanced() {
    function heightChecker(root) {
      if (!root) return 0;

      let leftHeight = heightChecker(root.left);
      if (leftHeight === -1) return -1;

      let rightHeight = heightChecker(root.right);
      if (rightHeight === -1) return -1;

      if (Math.abs(leftHeight - rightHeight) > 1) return -1;

      return Math.max(leftHeight, rightHeight) + 1;
    }
    return heightChecker(this.root) === -1 ? false : true;
  }
}

// var binarySearchTree = new BinarySearchTree();
// binarySearchTree.insert(15);
// binarySearchTree.insert(20);
// binarySearchTree.insert(10);
// binarySearchTree.insert(12);
// binarySearchTree.isBalanced(); // true

var binarySearchTree2 = new BinarySearchTree();
binarySearchTree2.insert(5);
binarySearchTree2.isBalanced(); // true
binarySearchTree2.insert(6);
binarySearchTree2.isBalanced(); // true
binarySearchTree2.insert(7);
binarySearchTree2.isBalanced(); // false
