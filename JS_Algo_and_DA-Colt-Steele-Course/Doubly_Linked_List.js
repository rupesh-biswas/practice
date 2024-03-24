class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let oldTail = this.tail;

    if (this.length === 1) {
      this.head = undefined;
      this.tail = undefined;
    } else {
      let newTail = oldTail.prev;
      newTail.next = null;
      this.tail = newTail;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }
  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;

    if (this.length === 1) {
      this.head = undefined;
      this.tail = undefined;
    } else {
      let newHead = this.head.next;
      newHead.prev = null;
      this.head = newHead;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let counter, current;
    if (idx <= this.length / 2) {
      counter = 0;
      current = this.head;
      while (current) {
        if (idx === counter) return current;
        current = current.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;
      while (current) {
        if (idx === counter) return current;
        current = current.prev;
        counter--;
      }
    }
  }
  set(idx, val) {
    let foundNode = this.get(idx);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unshift(val);
    if (idx === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let prevNode = this.get(idx - 1);

    newNode.next = prevNode.next;
    newNode.prev = prevNode;

    prevNode.next.prev = newNode;
    prevNode.next = newNode;

    this.length++;
    return true;
  }
  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    let deleteNode = this.get(idx);
    let prevNode = deleteNode.prev;
    let afterNode = deleteNode.next;

    prevNode.next = afterNode;
    afterNode.prev = prevNode;
    this.length--;

    deleteNode.next = null;
    deleteNode.prev = null;
    return deleteNode;
  }
  reverse() {
    if (!this.head) return undefined;
    if (this.length === 1) return this;

    let tempNode = this.head;
    this.head = this.tail;
    this.tail = tempNode;

    let current = this.head;
    let tempPrev;
    while (current) {
      tempPrev = current.prev;
      current.prev = current.next;
      current.next = tempPrev;

      current = current.next;
    }
    return this;
  }
}

const numList = new DoublyLinkedList();
numList.push(1);
numList.push(2);
numList.push(3);
numList.push(4);
numList.push(5);
