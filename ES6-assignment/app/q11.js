class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    addLast(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        }
        let tail = this.head;
        while (tail.next !== null) {
            tail = tail.next;
        }
        tail.next = newNode;
    }

    lengthOfList() {
        var count = 1;
        let tail = this.head;
        while (tail.next !== null) {
            tail = tail.next;
            count += 1;
        }
        return count;
    }

    getLast() {
        let tail = this.head;
        while (tail.next != null){
            tail = tail.next;
        }
        return tail.data;
    }

    getFirst() {
        return this.head.data;
    }
}

export{LinkedList}