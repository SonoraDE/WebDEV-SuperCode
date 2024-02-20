function countdown() {
    console.log("Start: Warten für 3 Sekunden...");
    let count = 10;
  
    const interval = setInterval(() => {
      console.log(count);
      count--;
  
        if (count === 5) {
        console.log("Halbzeit");
      } else if (count === 0) {
        clearInterval(interval);
        console.log("Endlich Feierabend!");
      }
    }, 1000);
  
    setTimeout(() => {
      console.log("Erledigt. Du hast 3 Sekunden verschwendet.");
    }, 3000);
  }
  
  countdown();