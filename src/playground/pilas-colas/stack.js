class Stack {
  constructor() {
    this.elements = [];
    this.length = 0;
  }

  add(item) {
    this.elements.push(item);
    return ++this.length;
  }

  remove() {
    return this.elements.pop();
  }
}

module.exports = Stack;
