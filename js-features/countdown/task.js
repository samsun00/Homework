let timer = document.getElementById("timer");

let intervalId = setInterval(() => {
  currentValue = Number(timer.textContent);

  if (currentValue <= 0) {
    alert("Вы победили в конкурсе!");
    clearInterval(intervalId);
  } else {
    timer.textContent = currentValue - 1;
  }
}, 1000);
