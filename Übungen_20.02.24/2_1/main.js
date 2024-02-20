function countdown() {
  let count = 10;
  const countDisplay = document.getElementById("count");

  const interval = setInterval(() => {
    if (count > 0) {
      count--;
      countDisplay.textContent = count;
    } else {
      clearInterval(interval);
      countDisplay.textContent = "0";
      const message = document.querySelector(".message");
      message.classList.add("fade-out");
      console.log("Countdown abgeschlossen");
    }
  }, 1000);
}

countdown();