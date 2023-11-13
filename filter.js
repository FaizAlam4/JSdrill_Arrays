export function filter(element, cb) {
    if (element == null) return undefined;
    let result=[];
    for (let ele of element) {
      if (cb(ele)) result.push(ele);
    }
    return result;
    
  }
  