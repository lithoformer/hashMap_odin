class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        let head = new Node(null, null);
        head.value = null;
        head.nextNode = null;
    }

    prepend(value) {
        if (this.head === undefined) {
            this.head = new Node(value, null);
        }
        else {
            this.head = new Node(value, this.head);
        }
    }

    append(value) {
        let node = new Node(value, null);
        let traverse = this.head;
        if (traverse === undefined) {
            this.prepend(value);
        }
        else {
            while (traverse.nextNode !== null) {
                traverse = traverse.nextNode;
            }
            traverse.nextNode = node;
        }
    }

    size() {
        let traverse = this.head;
        let count = 0;
        while (traverse !== null) {
            traverse = traverse.nextNode;
            count++;
        }
        return count;
    }

    getHead() {
        return this.head.value;
    }

    tail() {
        let traverse = this.head;
        while (traverse.nextNode !== null) {
            traverse = traverse.nextNode;
        }
        return traverse.value;
    }

    at(index) {
        let traverse = this.head;
        for (let i = 0; i < index; i++) {
            traverse = traverse.nextNode;
        }
        return traverse.value;
    }

    pop() {
        let traverse = this.head;
        while (traverse.nextNode.nextNode !== null) {
            traverse = traverse.nextNode;
        }
        traverse.nextNode = null;
    }

    contains(value) {
        let traverse = this.head;
        while (traverse !== null) {
            if (traverse.value === value) {
                return true;
            }
            traverse = traverse.nextNode;
        }
        return false;
    }

    find(value) {
        let traverse = this.head;
        let idx = 0;
        while (traverse !== null) {
            if (traverse.value === value) {
                return idx;
            }
            traverse = traverse.nextNode;
            idx++;
        }
        return null;
    }

    toString() {
        let traverse = this.head;
        while (traverse !== null) {
            console.log(`( ${traverse.value} ) -> `);
            traverse = traverse.nextNode;
        }
        console.log('null');
    }

    insertAt(value, index) {
        if (index === 0) {
            this.prepend(value);
        }
        else {
            let traverse = this.head;
            for (let i = 0; i < index; i++) {
                traverse = traverse.nextNode;
            }
            let node = new Node(value, traverse);
            traverse = this.head;
            for (let i = 0; i < index - 1; i++) {
                traverse = traverse.nextNode;
            }
            traverse.nextNode = node;
        }
    }

    removeAt(index) {
        if (index === 0) {
            this.head = this.head.nextNode;
        }
        else {
            let traverse = this.head;
            for (let i = 0; i < index - 1; i++) {
                traverse = traverse.nextNode;
            }
            traverse.nextNode = traverse.nextNode.nextNode;
        }
    }
}

export { LinkedList };