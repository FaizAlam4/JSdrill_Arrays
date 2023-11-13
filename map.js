export function map(element, cb) {
  let index = 0;
  let arr = [];
  for (let ele of element) {
    arr.push(cb(ele, index++));
  }

  return arr;
}
