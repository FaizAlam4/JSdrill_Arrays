import { reduce } from "./reduce.js";
const items = [1, 2, 3, 4, 5, 5];

function cb(startingValue, ele) {
  return ele + startingValue;
}

console.log(reduce(items, cb, 0));
