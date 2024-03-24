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
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0 || index === this.length) return !!this.push(val);

    const newNode = new Node(val);
    let counter = 0;
    let current = this.head;
    while (current) {
      counter++;
      if (counter === index) {
        break;
      }
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    this.length++;
    return true;
  }
}

var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20);
singlyLinkedList.insert(2, 12); // true
// singlyLinkedList.insert(100,12); // false
// singlyLinkedList.length // 5
// singlyLinkedList.head.val // 5
// singlyLinkedList.head.next.val // 10
// singlyLinkedList.head.next.next.val // 12
// singlyLinkedList.head.next.next.next.val // 15
// singlyLinkedList.head.next.next.next.next.val // 20

// singlyLinkedList.insert(5,25); // true
// singlyLinkedList.head.next.next.next.next.next.val //25
// singlyLinkedList.tail.val // 25
