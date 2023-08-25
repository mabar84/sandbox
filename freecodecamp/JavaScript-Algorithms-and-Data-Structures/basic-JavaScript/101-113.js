let myMin = 2,
  myMax = 4;

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
console.log(randomRange(myMin, myMax));
