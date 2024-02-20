const button = document.querySelector("#btn");
    const zeitAnzeige = document.querySelector(".zeit");

    let percent = 100;
    let interval;

    button.onclick = function() {
      if (interval) {
        clearInterval(interval);
      }
      interval = setInterval(() => {
        if (percent > 0) {
          percent--;
          zeitAnzeige.textContent = percent + "%";
        } else {
          clearInterval(interval);
        }
      }, 100);
    };