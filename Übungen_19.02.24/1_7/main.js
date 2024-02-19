function istWochenende(datum) {
    const tag = datum.getDay();
    // 0 steht für Sonntag, 6 für Samstag
    if (tag === 0 || tag === 6) {
        return "Weekend";
    } else {
        return "Arbeitstag";
    }
}

// Testdaten
const datum1 = new Date(2019, 11, 15);
const datum2 = new Date(2001, 1, 16);
const datum3 = new Date(2020, 1, 1);
const datum4 = new Date(2020, 1, 29);

// Ergebnisse in der Konsole überprüfen
console.log(istWochenende(datum1));
console.log(istWochenende(datum2)); 
console.log(istWochenende(datum3));
console.log(istWochenende(datum4)); 