const inputs = document.querySelectorAll (".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
  }
)

function formvalidation() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let phone = document.getElementById('phone').value;
  let message = document.getElementById('message').value;

  if (name =="", email =="", phone =="", message =="") {
    alert ('not respond');
  }
  
  else {
  document.getElementById(result).innerHTML = name;
  document.getElementById(result).innerHTML = email;
  document.getElementById(result).innerHTML = phone;
  document.getElementById(result).innerHTML = message;
  }

  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(message);

}
