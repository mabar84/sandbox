// function countdown(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArr = countdown(n - 1);
//     countArr.unshift(n);
//     return countArr;
//   }
// }

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const countArr = rangeOfNumbers(startNum, endNum - 1);
    countArr.push(endNum);
    // console.log(countArr);
    return countArr;
  }
}
console.log(rangeOfNumbers(6, 6));
