function myDrinks(drinks) {
  // Sortiere das Array alphabetisch
  drinks.sort();
  
  // Gib jedes Element des Arrays in der Konsole aus und schreibe es in die HTML-Seite
  drinks.forEach(drink => {
      console.log(drink);
      document.write(drink + "<br>");
  });
}

// Array mit Getränken
const getraenke = [
  "Coca-Cola",
    "Apfelsaft",
    "Pepsi",
    "Traubensaft",
    "Sprite",
    "Orangensaft",
    "Red Bull Energy Drink",
    "Fanta"
];

// Aufruf der Funktion
myDrinks(getraenke);