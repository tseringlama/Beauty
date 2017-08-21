function save() {
  var einput = document.getElementById("email");
  localStorage.setItem("email", einput.value);
  var getemail = localStorage.getItem("email");
  console.log(getemail);
  var pinput = document.getElementById("pass");
  localStorage.setItem("pass", pinput.value);
  var getpass = localStorage.getItem("pass");
  console.log(getpass);
  var rpinput = document.getElementById("rpass");
  localStorage.setItem("rpass", rpinput.value);
  var getrpass = localStorage.getItem("rpass");
  console.log(getrpass);
  var rempinput = document.getElementById("rem");
  localStorage.setItem("rem", rempinput.value);
  var getrem = localStorage.getItem("rem");
  console.log(getrem);
}
