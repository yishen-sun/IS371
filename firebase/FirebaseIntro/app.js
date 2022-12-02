console.log(firebase);
/*
auth
  .signInAnonymously()
  .then((user) => {
    // Signed in..
    console.log(user.user.uid);
    document.querySelector(
      "#main"
    ).innerHTML = `welcome, your ID is ${user.user.uid}`;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
*/
/*
auth
  .createUserWithEmailAndPassword("email@email.com", "password")
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

/**
 * collection: a set of document
 * dockment: a JS boj with key value pairs
 *
 */
// add data to the db
// let kai = {
//   name: "kai",
//   age: 28,
//   friends: ["sally", "peter", "jackie"],
// };
// db.collection("people").add(kai);

// ask the user for name and age and store the data
/*
let name = window.prompt("please enter a name");
let age = window.prompt("please enter age");
let person = {
  name: name,
  age: parseInt(age),
};
db.collection("mypeople")
  .add(person)
  .then(() => {
    console.log(person);
  });
*/

let submit = document.querySelector("#submit");

// attach click event on submit
// submit.addEventListener("click", () => {
//   // grab the labels
//   let pl1 = document.querySelector("#pl1").value;
//   let pv1 = document.querySelector("#pv1").value;

//   // manipulate the URL
//   // https://chart.googleapis.com/chart?cht=p3&chd=t:60,40&chs=250x100&chl=Hello|World

//   //let src = `https://chart.googleapis.com/chart?cht=p3&chd=t:${pv1},${pv2}&chs=250x100&chl=${pl1}|${pl2}`;
//   //let image = `<img src="${src}" alt="pie chart"/>`;
//   document.querySelector("#chart").innerHTML = image;

//   // reset the input elements

//   // document.querySelector("#pl1").value = "";
//   // document.querySelector("#pv1").value = "";
//   // document.querySelector("#pl2").value = "";
//   // document.querySelector("#pv2").value = "";
//   // add 2 input elements to allow use to select actual values of those labels
// });

function r_e(id) {
  return document.querySelector(`#${id}`);
}
function addRes(name, loca) {
  let restaurant = {
    name: name,
    loca: loca,
  };
  db.collection("myrestaurant")
    .add(restaurant)
    .then(() => {
      console.log(restaurant);
    });
}

function showAll(mycoll) {
  // collection: myrestaurant
  db.collection(mycoll)
    //       field  operator   value
    .where("loca", "==", "madison")
    .where("name", "==", "globe")
    .get()
    .then((snapshot) => {
      // console.log(
      //   snapshot.docs[0].data().name + " is in " + snapshot.docs[0].data().loca
      // );
      let restaurants = snapshot.docs;
      restaurants.forEach((restaurant) => {
        // console.log(restaurant.data());
        r_e("all_restaurants").innerHTML += `
          <p> ${restaurant.data().name} is in ${restaurant.data().loca} </p>
        `;
      });
    });
}
showAll("myrestaurant");
// console.log(r_e("submit"));
r_e("add_r_btn").addEventListener("click", () => {
  let name = r_e("r_name").value;
  let loca = r_e("r_loc").value;
  console.log(name);
  console.log(loca);
  addRes(name, loca);
});

// db.collection("myrestaurant").where("loca", "==", "madison").get().then((snapshot) => {let restaurants = snapshot.docs; restaurants.forEach((restaurant) => {console.log(restaurant.data())})})