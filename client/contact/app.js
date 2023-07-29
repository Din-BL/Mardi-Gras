let form = document.querySelector("form");
// Error Msg
let fError = document.querySelector("#fName-error");
let lError = document.querySelector("#lName-error");
let emailError = document.querySelector("#email-error");
let textError = document.querySelector("#text-error");
let formSent = document.querySelector(".form-sent");

//   Validations //
form.addEventListener("submit", (e) => {
  let { fName, lName, email, text } = form.elements;
  e.preventDefault();

  // first name
  let valueF = fName.value;
  if (!valueF.match(/^.{3,7}$/) || !valueF.match(/^[a-zA-Z]+$/)) {
    fError.innerText = "First Name Is Not Valid";
    return false;
  }
  fError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

  // last name
  let valueL = lName.value;
  if (!valueL.match(/^[a-zA-Z ,.'-]+$/g) || !valueL.match(/^.{2,9}$/)) {
    lError.innerText = "Last Name Is Not Valid";
    return false;
  }
  lError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

  // email
  let valueE = email.value;
  if (!valueE.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
    emailError.innerText = "Email Is Not Valid";
    return false;
  }
  emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

  // text area
  let valueT = text.value;
  if (!valueT.match(/^.{50,300}$/)) {
    textError.innerText = "Message is not valid";
    return false;
  }
  textError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';

  //Reset
  fName.value = "";
  fError.innerHTML = "";

  lName.value = "";
  lError.innerHTML = "";

  email.value = "";
  emailError.innerHTML = "";

  text.value = "";
  textError.innerHTML = "";

  formSent.innerText = "Your request has been sent successfully";
  setTimeout(() => {
    formSent.innerText = "";
  }, 2000);
});
