function r_e(id) {
  return document.querySelector(`#${id}`);
}

// attach click events on all the links
r_e("home").addEventListener("click", () => {
  r_e("content").innerHTML = `
        <h1 class="hello"> This is home page</h1>
    `;
});

r_e("about").addEventListener("click", () => {
  r_e("content").innerHTML = `
          <h1 class="hello"> This is about us page</h1>
      `;
});

r_e("contact").addEventListener("click", () => {
  r_e("content").innerHTML = `
            <h1 class="hello"> This is contact us page</h1>
        `;
});

// calculate

// attach a click event on
r_e("btn").addEventListener("click", () => {
  // alert("hello");
  let num1 = parseInt(r_e("num1").value);
  // console.log(num1 + 10);
  let num2 = parseInt(r_e("num1").value);
  let op = r_e("op").value;
  let result = num1 + op + num2; // string concatenation
  result = eval(result);
  r_e("result").value = result;
});
