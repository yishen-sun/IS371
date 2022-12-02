// declare function 1
function sayhello(name) {
  console.log("hello " + name);
}

sayhello("name");

// declare function 2 function expression
const sayhello2 = function (name) {
  console.log("hello " + name);
};

// arrow function, no function notation
const sayhello3 = (name) => {
  console.log("hello " + name);
};

function printArray(arr, n) {
  if (n in arr) return 1;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function checkIfExists(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (val == arr[i]) {
      console.log(val + " found in the array");
      return;
    }
  }
  console.log(val + " not found in the array");
}
let ones = [1, 1, 1, 1];
checkIfExists(ones, 1);
// let arr1 = new Array(2);
// arr1.push(1);
// console.log(arr1);

function getSize(arr) {
  return arr.length;
}

let num = getSize(ones);
// string templete notation
let position = [];
console.log(`${name} hello`);
console.log(position);
position.push(2);
console.log(position);
