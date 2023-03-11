const isAlienSorted = (words, order) => {
  const mapOrder = new Map();
  for (let i = 0; i < order.length; i++) {
    mapOrder.set(order[i], i);
  }
  for (let i = 0; i < words.length - 1; i++) {
    let current = words[i];
    let next = words[i + 1];
    let j = 0;
    while (j < current.length && j < next.length) {
      if (current[j] !== next[j]) {
        if (mapOrder.get(current[j]) > mapOrder.get(next[j])) {
          return false;
        } else {
          break;
        }
      } else {
        j++;
      }
    }
    if (j === next.length && j < current.length) {
      return false;
    }
  }
  return true;
};
