const numbers = [
  18,
  16,
  80,
  51,
  47,
  38,
  95,
  42,
  68,
  61,
  34,
  51,
  20,
  17,
  56,
  31,
  100,
  6,
  5,
  30,
  74,
  97,
  28,
  99,
  91,
  27,
  73,
  12,
  92,
  6,
  27,
  71,
  26,
  15,
  78
];

function sortAndDouble(numbers) {
  
      // Sortiere das Array von klein nach groß
      numbers.sort((a, b) => a - b);
      
      // Multipliziere jede Zahl im Array mit 2
      const doubledArray = numbers.map(num => num * 2);
      
      // Gib das Ergebnis in der Konsole aus
      console.log(doubledArray);
}

sortAndDouble(numbers);