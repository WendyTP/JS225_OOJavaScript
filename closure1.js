function makeCounterLogger(num) {
  let startCount = num;
  return function(secondNum) {
    if (startCount >= secondNum) {
      for (let count = startCount; count >= secondNum; count -= 1) {
        console.log(count);
      }
    } else {
      for (let count = startCount; count <= secondNum; count += 1) {
        console.log(count);
      }
    }
  }
}

let countLog = makeCounterLogger(5);
//countLog(8);  // 5 6 7 8

countLog(2);  // 5 4 3 2
