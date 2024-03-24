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
            this.tail = null
        };
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
}

const list = new SinglyLinkedList;
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

console.log(list.unShift("2"))
