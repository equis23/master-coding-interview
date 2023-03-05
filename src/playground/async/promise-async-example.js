const func = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve('> it works!');
        }, 2000)
      : reject(new Error('> something went wrong!'));
  });
};

const main = async () => {
  console.log('start');
  console.log(await func());
  console.log('end ...');
};

main();
