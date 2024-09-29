import { LinkedList } from "./linkedList.js";

class HashMap {
    constructor(size, loadFactor) {
        this.data = new Array(Math.floor(size));
        this.loadFactor = loadFactor;
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber1 = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber1 * hashCode + key.charCodeAt(i);
        }
        return hashCode % this.data.length;
    }

    set(key, val) {
        let hashCode = this.hash(key);
        if (this.data[hashCode] === undefined) {
            const list = new LinkedList();
            this.data[hashCode] = list;
            list.append([key, val]);
            return list.head;
        }
        else if (this.data[hashCode]) {
            let node = this.data[hashCode].head;
            if (node.value[0] === key) {
                node.value = [key, val];
                return node;
            }
            else {
                while (node.nextNode !== null) {
                    node = node.nextNode;
                    if (node.value[0] === key) {
                        node.value = [key, val];
                        return node;
                    }
                }
                if (this.length() / this.data.length > this.loadFactor) {
                    const newKeys = this.keys();
                    const newValues = this.values();
                    this.data = new Array(this.data.length + 47);
                    for (let i = 0; i < newKeys.length; i++) {
                        this.set(newKeys[i], newValues[i]);
                    }
                    this.set(key, val);
                }
                else {
                    this.data[hashCode].append([key, val], null);
                    return this.data[hashCode].head;
                }
            }
        }
    }

    get(key) {
        const hashCode = this.hash(key);
        const node = this.data[hashCode].head;
        if (node === undefined) {
            return null;
        } else if (node) {
            if (node.value[0] === key) {
                return node.value[1];
            }
            else {
                while (node.nextNode !== null) {
                    node = node.nextNode;
                    if (node.value[0] === key) {
                        return node.value[1];
                    }
                }
                return null;
            }
        }
    }

    has(key) {
        const hashCode = this.hash(key);
        const node = this.data[hashCode].head;
        if (node === undefined) {
            return false;
        } else if (node) {
            if (node.value[0] === key) {
                return true;
            }
            else {
                while (node.nextNode !== null) {
                    node = node.nextNode;
                    if (node.value[0] === key) {
                        return true;
                    }
                }
                return false;
            }
        }
    }

    remove(key) {
        const hashCode = this.hash(key);
        let node = this.data[hashCode].head;
        if (node === undefined) {
            return false;
        } else if (node) {
            if (node.value[0] === key) {
                this.data[hashCode] = null;
                return true;
            }
            else {
                while (node.nextNode !== null) {
                    if (node.nextNode.value[0] === key) {
                        node.nextNode = node.nextNode.nextNode;
                        return true;
                    }
                    else {
                        node = node.nextNode;
                    }
                }
                return false;
            }
        }
    }

    length() {
        let count = 0;
        for (let entry of this.data) {
            if (entry) {
                let node = entry.head;
                count++;
                while (node.nextNode !== null) {
                    node = node.nextNode;
                    count++;
                }
            }
        }
        return count;
    }

    clear() {
        for (let entry of this.data) {
            if (entry) {
                entry.head = null;
            }
        }
    }

    keys() {
        let arr = [];
        for (let entry of this.data) {
            if (entry) {
                let node = entry.head;
                arr.push(node.value[0]);
                while (node.nextNode !== null) {
                    node = node.nextNode;
                    arr.push(node.value[0]);
                }
            }
        }
        return arr;
    }

    values() {
        let arr = [];
        for (let entry of this.data) {
            if (entry) {
                let node = entry.head;
                arr.push(node.value[1]);
                while (node.nextNode !== null) {
                    node = node.nextNode;
                    arr.push(node.value[1]);
                }
            }
        }
        return arr;
    }

    entries() {
        let arr = [];
        for (const entry of this.data) {
            if (entry && entry.head) {
                let node = entry.head;
                arr.push(node.value);
                while (node.nextNode !== null) {
                    node = node.nextNode;
                    arr.push(node.value);
                }
            }
        }
        return arr;
    }
}

export { HashMap };