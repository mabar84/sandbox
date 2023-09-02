function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const countArr = rangeOfNumbers(startNum, endNum - 1);
    countArr.push(endNum);
    return countArr;
  }
}
console.log(rangeOfNumbers(6, 6));
