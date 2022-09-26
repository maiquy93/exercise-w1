const users = [
  {
    username: "john",
    password: 1234,
  },
];

function login(event) {
  event.preventDefault();
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (
    users.find(user => user.username === username && user.password == password)
  ) {
    window.location.href = "dashboard.html";
  } else {
    const loginWarning = document.querySelector(".loginwarning");
    console.log(loginWarning);
    loginWarning.classList.add("nocshow");
  }
}

//fake Mac
function genMAC() {
  var colours = new Array(
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F"
  );
  // Make variable to hold 6 character HEX array
  var partA = new Array(1);
  var partB = new Array(1);
  var partC = new Array(1);
  var partD = new Array(1);
  var partE = new Array(1);
  var partF = new Array(1);
  var mac_address = "";
  for (i = 0; i < 2; i++) {
    partA[i] = colours[Math.round(Math.random() * 14)];
  }
  for (i = 0; i < 2; i++) {
    partB[i] = colours[Math.round(Math.random() * 14)];
  }
  for (i = 0; i < 2; i++) {
    partC[i] = colours[Math.round(Math.random() * 14)];
  }
  for (i = 0; i < 2; i++) {
    partD[i] = colours[Math.round(Math.random() * 14)];
  }
  for (i = 0; i < 2; i++) {
    partE[i] = colours[Math.round(Math.random() * 14)];
  }
  for (i = 0; i < 2; i++) {
    partF[i] = colours[Math.round(Math.random() * 14)];
  }
  mac_address =
    partA[0] +
    partA[1] +
    ":" +
    partB[0] +
    partB[1] +
    ":" +
    partC[0] +
    partC[1] +
    ":" +
    partD[0] +
    partD[1] +
    ":" +
    partE[0] +
    partE[1] +
    ":" +
    partF[0] +
    partF[1];
  return mac_address;
}

//format date
function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join(":");
}

//random color
function randomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

//Color du phong
const defaultColor = [
  "rgb(255, 99, 132)",
  "rgb(255, 205, 86)",
  "rgb(253, 228, 0)",
  "rgb(54, 162, 235)",
  "rgb(54, 162, 189)",
  "rgb(54, 122, 189)",
  "rgb(253, 228, 22)",
  "rgb(233, 128, 0)",
  "rgb(213, 128, 233)",
  "rgb(23, 128, 233)",
  "rgb(123, 128, 123)",
  "rgb(33, 128, 33)",
  "rgb(23, 128, 33)",
  "rgb(133, 128, 133)",
  "rgb(213, 128, 200)",
];
