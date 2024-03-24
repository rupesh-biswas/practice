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
  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) {
      let current = this.head;
      let newHead = this.head.next;
      this.head = newHead;
      current.next = null;
      this.length--;
      if (this.length === 0) this.tail = null;
      return current;
    }
    let current = this.head;
    let prev = this.head;
    let counter = 0;
    while (counter < idx) {
      prev = current;
      current = current.next;
      counter++;
    }
    prev.next = current.next;
    current.next = null;
    if (idx === this.length - 1) this.tail = prev;
    this.length--;
    return current;
  }
}

var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20);
singlyLinkedList.remove(2).val; // 15
// singlyLinkedList.remove(100); // undefined
// singlyLinkedList.length // 3
// singlyLinkedList.head.val // 5
// singlyLinkedList.head.next.val // 10
// singlyLinkedList.head.next.next.val // 20
