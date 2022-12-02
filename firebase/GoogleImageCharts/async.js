console.log("A");
setTimeout(() => {
  console.log("from the set time out function");
}, 1000);
console.log("B");
console.log("C");

setTimeout(1);

// promise

function signUpUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (1 == 1) {
        resolve("Success");
      } else {
        reject("Error");
      }
    }, 1000);
  });
}

signUpUser()
  .then((msg) => {
    console.log("msg is " + msg);
  })
  .catch((err) => {
    console.log(err);
  });
