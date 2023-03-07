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
    return ++this.length;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      node.previous = current;
    }
    return ++this.length;
  }

  shift() {
    if (!this.head) return;
    this.head = this.head.next;
    this.head.previous = null;
    return --this.length;
  }

  pop() {
    if (!this.head) return;
    if (!this.head.next) this.head = null;
    else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.previous.next = null;
    }
    return --this.length;
  }

  getAt(index) {
    if (index >= 0 && index < this.length) {
      let current = this.head;
      while (index > 0) {
        current = current.next;
        index--;
      }
      return current;
    }
    return;
  }

  deleleAt(index) {
    if (index === 0) this.shift();
    else if (index === this.length - 1) this.pop();
    else if (index >= 0 && index < this.length) {
      let current = this.getAt(index);
      current.previous.next = current.next;
      return --this.length;
    }
  }

  clear() {
    this.head = null;
    this.length = 0;
  }

  reverse() {
    if (!this.head) return;
    let current = this.head;
    let prev;
    let next;
    while (current) {
      next = current.next;
      current.next = prev;
      current.previous = next;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  display() {
    let str = '';
    let current = this.head;
    while (current) {
      str += `[ ${current.value} ]-->`;
      current = current.next;
    }
    return str.substring(0, str.length - 3);
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
