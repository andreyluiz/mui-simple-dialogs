export default () => {
  let _resolve, _reject;
  const promise = new Promise((resolve, reject) => {
    _resolve = resolve;
    _reject = reject;
  });

  return Object.freeze(Object.create({}, {
    resolve: {
      value: _resolve,
      enumerable: true
    },
    reject: {
      value: _reject,
      enumerable: true
    },
    promise: {
      value: promise,
      enumerable: true
    }
  }));
}