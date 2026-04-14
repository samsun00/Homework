document.addEventListener("DOMContentLoaded", () => {
  const rotators = document.querySelectorAll(".rotator");

  rotators.forEach((rotator) => {
    const rotatorCase = rotator.querySelectorAll(".rotator__case");
    let currentIndex = 0;

    function rotate() {
      rotatorCase[currentIndex].classList.remove("rotator__case_active");
      currentIndex = (currentIndex + 1) % rotatorCase.length;
      rotatorCase[currentIndex].classList.add("rotator__case_active");
    }

    setInterval(rotate, 1000);
  });
});
