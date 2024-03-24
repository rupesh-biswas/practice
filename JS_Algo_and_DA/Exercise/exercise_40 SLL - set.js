// The Question examples are incorrect in udemy
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  set(idx, val) {
    let foundNode = this.get(idx);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
}

// var singlyLinkedList = new SinglyLinkedList();

// singlyLinkedList.set(0,10) // true
// singlyLinkedList.set(1,2) // true
// singlyLinkedList.length // 2
// singlyLinkedList.head.val // 10

// singlyLinkedList.set(10,10) // false

// singlyLinkedList.set(3,100) // true
// singlyLinkedList.head.next.next.next.val; // 10
