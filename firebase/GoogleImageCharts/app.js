let submit = document.querySelector("#submit");

// attach click event on submit
submit.addEventListener("click", () => {
  // grab the labels
  let pl1 = document.querySelector("#pl1").value;
  let pv1 = document.querySelector("#pv1").value;
  let pl2 = document.querySelector("#pl2").value;
  let pv2 = document.querySelector("#pv2").value;

  // manipulate the URL
  // https://chart.googleapis.com/chart?cht=p3&chd=t:60,40&chs=250x100&chl=Hello|World

  let src = `https://chart.googleapis.com/chart?cht=p3&chd=t:${pv1},${pv2}&chs=250x100&chl=${pl1}|${pl2}`;
  let image = `<img src="${src}" alt="pie chart"/>`;
  document.querySelector("#chart").innerHTML = image;

  // reset the input elements

  document.querySelector("#pl1").value = "";
  document.querySelector("#pv1").value = "";
  document.querySelector("#pl2").value = "";
  document.querySelector("#pv2").value = "";
  // add 2 input elements to allow use to select actual values of those labels
});

function r_e(id) {
  return document.querySelector(`#${id}`);
}

// console.log(r_e("submit"));
r_e("submit").addEventListener("click", () => {
  let pl1 = r_e("pl1").value;
  let pl2 = r_e("pl2").value;
});
