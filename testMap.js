import { map } from "./map.js";
const items = [1, 2, 3, 4, 5, 5];

function cb(ele, index) {
  return `Element[${index}] = ${ele}`;
}

let answer = map(items, cb);

console.log(answer);
