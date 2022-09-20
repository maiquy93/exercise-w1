const users = [
  {
    username: "john",
    password: 1234,
  },
];

function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (
    users.find(user => user.username === username && user.password == password)
  ) {
    alert("dang nhap thanh cong");
  } else {
    alert("dang nhap that bai");
  }
}

function sum() {
  console.log("run");
}
