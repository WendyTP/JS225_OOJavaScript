function makeMultipleLister(num) {
  let startNum = num;
  return function() {
    let multiple = 1;
    while ((startNum * multiple) < 100) {
      console.log(startNum * multiple);
      multiple += 1;
    }
  }
}

let lister = makeMultipleLister(13);
lister();