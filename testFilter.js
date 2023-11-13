import { filter } from "./filter.js";
const items = [1, 2, 3, 4, 5, 5];

function cb(ele) {
  if (ele > 3) return true;
  else return false;
}

console.log(filter(items, cb));
