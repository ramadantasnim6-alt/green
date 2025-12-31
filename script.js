const correctUsername = "username";
const correctPassword = "seoerot";

const form = document.getElementById("loginForm");

form.addEventListener("submit" , function(e) {
  e.preventDefault();
  
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  
  if(username === correctUsername && password === correctPassword) {
    window.location.href = "https://ramadantasnim6-alt.github.io/testt/";
  } else {
    alert("Incorrect username or password!");
  }
});
