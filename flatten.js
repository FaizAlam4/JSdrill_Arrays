//considering we are flattening to infinity i.e. upto we get a 1-D
let resultant=[];
export function flatten(myarray) {
  for (let element of myarray) {
    if (Array.isArray(element)) {
      flatten(element);
    } else {
      resultant.push(element);
    }
  }
  return resultant;
}
