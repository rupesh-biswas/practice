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
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  traverse() {
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = this.head;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current.val;
  }
  shift() {
    if (!this.head) return undefined;
    let currHead = this.head;
    this.head = currHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currHead.val;
  }
  unShift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let count = 0;
    let current = this.head;
    while (count !== idx) {
      current = current.next;
      count++;
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
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) return !!this.unShift(val);
    if (idx === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let prevNode = this.get(idx - 1);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }
  remove(idx) {
    if (idx < 0 || idx >= this.length) return false;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    let prevNode = this.get(idx - 1);
    let tobeDeletedNode = prevNode.next;
    prevNode.next = tobeDeletedNode.next;
    tobeDeletedNode.next = null;
    this.length--;
    return tobeDeletedNode;
  }
  reverse() {
    if (this.length === 1) return this;

    let tempNode = this.head;
    this.head = this.tail;
    this.tail = tempNode;

    let prev = this.tail;
    let next = this.tail.next;
    while (next) {
      let current = next;
      next = current.next;

      current.next = prev;
      prev = current;
    }
    this.tail.next = null;
    return this;
  }
}

// const list = new SinglyLinkedList;
// list.push("Hello")
// list.push("Goodbye")
// list.push("!")
// console.log(list.push("Goodbye"))
// console.log(list)
// console.log(list.head.next.next)

// list.traverse();

// console.log(list.pop());
// console.log(list);
// console.log("**********************");
// console.log(list.pop());
// console.log(list);
// console.log("**********************");
// console.log(list.pop());
// console.log(list);

// console.log(list.shift())
// console.log(list.shift())
// console.log(list.shift())
// console.log(list.shift())
// list.push(100);
// list.push(1000);
// console.log(list.pop())
// console.log(list.shift())
// console.log(list)

// console.log(list.unShift("2"))

const numList = new SinglyLinkedList();
numList.push(1);
numList.push(2);
numList.push(3);
numList.push(4);
numList.push(5);
