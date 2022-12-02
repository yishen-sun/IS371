// global variables

let signupbtn = document.querySelector("#signupbtn");
let signup_modal = document.querySelector("#signup_modal");
let signup_modalbg = document.querySelector("#signup_modalbg");

let signinbtn = document.querySelector("#signinbtn");
let signin_modal = document.querySelector("#signin_modal");
let signin_modalbg = document.querySelector("#signin_modalbg");

let postRecipeBtn = document.querySelector("#postRecipeBtn");

let hidden_form = document.querySelector("#hidden_form");
let content = document.querySelector("#content");

// functions
function r_e(id) {
  return document.querySelector(`#${id}`);
}
function configure_message_bar(msg) {
  r_e("message_bar").innerHTML = msg;
  r_e("message_bar").classList.remove("is-hidden");
  setTimeout(() => {
    r_e("message_bar").classList.add("is-hidden");
    r_e("message_bar").innerHTML = "";
  }, 2000);
}
// sign-up modal link
signupbtn.addEventListener("click", () => {
  signup_modal.classList.add("is-active");
});

signup_modalbg.addEventListener("click", () => {
  signup_modal.classList.remove("is-active");
});

// sign-in modal link
signinbtn.addEventListener("click", () => {
  signin_modal.classList.add("is-active");
});

signin_modalbg.addEventListener("click", () => {
  signin_modal.classList.remove("is-active");
});

// post recipe nav bar link
postRecipeBtn.addEventListener("click", () => {
  // show the form
  hidden_form.classList.remove("is-hidden");

  // hide the content div
  content.classList.add("is-hidden");
});
console.log(firebase);

//sign up users
// click -> button; submit -> form default after submit page will be refreshed
r_e("signup_form").addEventListener("submit", (e) => {
  e.preventDefault(); // prevent the page from auto refresh
  // alert("hello");
  // get the email and password
  let email = r_e("email").value;
  let password = r_e("password").value;
  // console.log(email, password);
  // send email and password to firebase to create the user
  auth.createUserWithEmailAndPassword(email, password).then((user) => {
    // console.log("user created");
    configure_message_bar(`Welcome ${auth.currentUser.email}`);
    // clear the form
    r_e("signup_form").reset();
    // hide the model
    r_e("signup_modal").classList.remove("is-active");
  });
});

r_e("signoutbtn").addEventListener("click", () => {
  auth.signOut().then(() => {
    configure_message_bar(`You have successfully signed out!`);
    console.log("User signed out!");
    r_e("currentuser").innerHTML = "";
  });
});

r_e("signin_form").addEventListener("submit", (e) => {
  e.preventDefault(); // prevent the page from auto refresh
  let email = r_e("email").value;
  let password = r_e("password").value;
  auth.signInWithEmailAndPassword(email, password).then((user) => {
    configure_message_bar(`${user.user.email} has successfully signed in!`);
    r_e("currentuser").innerHTML = user.user.email;
    r_e("signin_form").reset();
    r_e("signin_modal").classList.remove("is-active");
  });
});

auth.onAuthStateChanged((user) => {
  if (user) {
    alert("user signed in");
  } else {
    alert("user signed out");
  }
});
