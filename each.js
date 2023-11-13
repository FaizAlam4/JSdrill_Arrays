export function each(element, cb) {
  let i = 0;

  for (let ele of element) {
    console.log(cb(ele, i++));
  }
}
