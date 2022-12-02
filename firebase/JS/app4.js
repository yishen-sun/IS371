let wrapper = document.querySelector("#wrapper");
console.log(wrapper);
console.log(wrapper.className);
console.log(wrapper.classList);

console.log(wrapper.innerHTML);

// reference for the fname input field
let fname = document.querySelector("#fname");
console.log(fname.placeholder);
fname.value = "sally";

let hw5 = document.querySelector("#q1c");
hw5.innerHTML += "aaaaa";
hw5.innerHTML += "bbbbb";

//
let btn = document.querySelector("#btn");
// attach a click event on the button
let cnt = 0;
btn.addEventListener("click", () => {
  // alert("hello");
  cnt += 1;
  if (cnt == 1) {
    document.querySelector("#counter").innerHTML = `button was clicker 1 time`;
    return;
  }
  //wrapper.innerHTML = "click me was clicked " + cnt + " times";
  document.querySelector(
    "#counter"
  ).innerHTML = `button was clicker ${cnt} times`;
});

let clearbtn = document.querySelector("#clear");
clearbtn.addEventListener("click", () => {
  // alert("hello");
  wrapper.innerHTML = "";
});
