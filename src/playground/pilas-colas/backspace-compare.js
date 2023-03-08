const backspaceCompare = (x, y) => {
  let xi = x.length - 1;
  let yi = y.length - 1;
  while (xi >= 0 || yi >= 0) {
    if (x[xi] === '#' || y[yi] === '#') {
      if (x[xi] === '#') {
        let spaces = 2;
        while (spaces > 0) {
          spaces--;
          xi--;
          spaces = x[xi] === '#' ? spaces + 2 : spaces;
        }
      }
      if (y[yi] === '#') {
        let spaces = 2;
        while (spaces > 0) {
          yi--;
          spaces = y[yi] === '#' ? spaces + 1 : spaces;
        }
      }
    } else {
      if (x[xi] !== y[yi]) return false;
      else {
        xi--;
        yi--;
      }
    }
  }
  return true;
};
