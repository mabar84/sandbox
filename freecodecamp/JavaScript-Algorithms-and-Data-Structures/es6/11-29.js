console.log(234);

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"],
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    failureItems[i] = `<li class=\"text-warning">${arr[i]}</li>`;
  }
  return failureItems;
}

const failuresList = makeList(result.failure);

console.log(failuresList);
