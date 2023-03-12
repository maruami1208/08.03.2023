import userConfig from './UserConfig.js';


class User {
  constructor(name, email, avatar, role, loggedIn) {
    this.name = name;
    this.email = email;
    this.avatar = avatar;
    this.role = role;
    this.loggedIn = loggedIn;
  }

 
  getUserRole() {
    return this.role ? "admin" : "user";
  }

 
  isLoggedIn() {
    return this.loggedIn;
  }
}


let user = new User("maruami12", "m.marshanishvili22@itstep.ge", "img/avatar.png", userConfig.role, userConfig.loggedIn);
user.loggedIn = true; 


let userElement = document.querySelector("#user");

userElement.querySelector(".name").textContent = user.name;
userElement.querySelector(".avatar").src = user.avatar;


let statusCircle = userElement.querySelector(".status-circle");
if (user.isLoggedIn()) {
  statusCircle.classList.add("green");
  statusCircle.classList.remove("red");
} else {
  statusCircle.classList.add("red");
  statusCircle.classList.remove("green");
}


userElement.querySelector(".role").textContent = user.getUserRole();
