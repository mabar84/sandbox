const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;

  makeServerRequest.then((result) => {
    console.log(result);
  });
});
console.log(12);
