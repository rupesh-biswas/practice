class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(val){
       this.head = null;
       this.tail = null;
       this.length = 0;
    }
    push(val){
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    get(idx){
        if(idx < 0 || idx >= this.length) return undefined;
        let counter, current;
        if(idx <= this.length/2){
            counter=0;
            current=this.head;
            while(idx !== counter){
                current = current.next
                counter++;
            }
        } else {
            counter = this.length-1;
            current = this.tail;
            while(idx !== counter){
                current = current.prev;
                counter--;
            }
        }
        return current;
    }
}
var doublyLinkedList = new DoublyLinkedList();
 
doublyLinkedList.push(5).push(10).push(15).push(20);
doublyLinkedList.get(0).val // 5