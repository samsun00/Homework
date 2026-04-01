let holes = document.querySelectorAll(".hole");
let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

for (let i = 0; i < holes.length; i++) {
  holes[i].addEventListener("click", function () {
    if (this.classList.contains("hole_has-mole")) {
      this.classList.remove("hole_has-mole");
      dead.textContent = Number(dead.textContent) + 1;
    } else {
      lost.textContent = Number(lost.textContent) + 1;
    }

    if (Number(dead.textContent) === 10) {
      alert("Победа!");
      dead.textContent = 0;
      lost.textContent = 0;
    }

    if (Number(lost.textContent) === 5) {
      alert("Вы проиграли...");
      dead.textContent = 0;
      lost.textContent = 0;
    }
  });
}
