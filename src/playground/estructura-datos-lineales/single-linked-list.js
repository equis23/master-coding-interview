class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return ++this.length;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    return ++this.length;
  }

  reverse() {
    if (this.head) {
      let current = this.head;
      let prev;
      let next;
      while (current) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
      this.head = prev;
    }
  }

  oddEvenList() {
    if (!this.head) return;
    let odd = this.head;
    let even_head = this.head.next;
    let even = this.head.next;
    while (even && even.next) {
      odd.next = even.next;
      odd = odd.next;
      even.next = odd.next;
      even = even.next;
    }
    odd.next = even_head;
  }

  display() {
    let current = this.head;
    let str = '';
    while (current) {
      str += `[ ${current.value} ]->`;
      current = current.next;
    }
    return str.substring(0, str.length - 2);
  }
}
