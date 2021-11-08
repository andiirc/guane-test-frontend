function* chunks(arr, n) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}

function merge(arr) {
  const characters = [];
  Object.keys(arr).forEach((key) => characters.push(...arr[key].results));
  return characters;
}

function resolveTimeout(component, delay) {
  return new Promise((resolve) => setTimeout(() => resolve(component), delay));
}

export {
  chunks,
  merge,
  resolveTimeout,
};
