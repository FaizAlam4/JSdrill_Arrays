export function find(element, cb) {
  if (element == null) return undefined;

  for (let ele of element) {
    if (cb(ele)) return ele;
  }
  return false;
}
