const asyncFunc = () => {
  return new Promise((resolve, reject) => {
    true ? resolve('yeah!') : reject(new Error('something went wrong!'));
  });
};
