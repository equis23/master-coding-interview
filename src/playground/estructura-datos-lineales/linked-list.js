class Node {
  constructor(value) {
    this.value = value;
    this.previous = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  prepend(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.length++;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      node.prev = current;
      this.length++;
    }
  }

  shift() {
    if (!this.head) return;
    this.head = this.head.next;
    this.head.prev = null;
    this.length--;
  }

  pop() {}

  getAt(index) {
    if (index >= 0 || index < this.length) {
      let current = this.head;
      while (index > 0) {
        current = current.next;
        index--;
      }
      return current;
    }
    return;
  }

  clear() {
    this.head = null;
    this.length = 0;
  }

  display() {
    let str = '';
    let current = this.head;
    while (current) {
      str += `[ ${current} ] -->`;
      current = current.next;
    }
    return str.trimEnd(' -->');
  }

  toList() {
    let list = [];
    let current = this.head;
    while (current) {
      list.push(current.value);
      current = current.next;
    }
    return list;
  }
}

module.exports = LinkedList;
