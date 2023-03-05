class Node {
  constructor(value) {
    this.current = value;
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
    if (!this.head) {
      this.head = node;
      this.length++;
    } else {
      this.head.previous = node;
      node.next = this.head;
      this.head = node;
      this.length++;
    }
    this.display();
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.length++;
    } else {
      let current = this.head;
      let prev;
      while (current) {
        prev = current;
        current = current.next;
      }
      node.prev = prev;
      this.length++;
    }
    this.display();
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current);
      current = current.next;
    }
  }
}
