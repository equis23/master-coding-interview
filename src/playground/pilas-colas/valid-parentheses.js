const Stack = require('./stack');

const validParentheses = (str) => {
  const stack = new Stack();
  const pairs = new Map();
  pairs.set('(', ')');
  pairs.set('[', ']');
  pairs.set('{', '}');
  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    if (pairs.has(current)) stack.add(current);
    else {
      let last = stack.remove();
      if (pairs.get(last) !== current) {
        return false;
      }
    }
  }
  return stack.length === 0;
};
