let clicker__counter = document.getElementById("clicker__counter");
let cookie = document.getElementById("cookie");

let width = 20;
let height = 20;

cookie.onclick = function () {
  clicker__counter.textContent = Number(clicker__counter.textContent) + 1;
  cookie.width = cookie.width + width;
  cookie.height = cookie.height + height;
  width = width * -1;
  height = height * -1;
};
