export function reduce(element, cb, startingValue) {
  for (let ele of element) {
    startingValue = cb(startingValue, ele);
  }

  return startingValue;
}
