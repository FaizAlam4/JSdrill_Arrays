export function find(element, cb) {
  for (let ele of element) {
    if (cb(ele)) return ele;
  }
  return undefined;
}
