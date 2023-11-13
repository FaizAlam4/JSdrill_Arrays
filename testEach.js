import { each } from "./each.js";
const items = [1, 2, 3, 4, 5, 5];

function cb(ele, index) {
  return `${ele} at index- ${index}`;
}

each(items, cb);
