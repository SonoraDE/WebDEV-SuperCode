function monatsName(datum) {
    const monatsNamen = [
        "Januar", "Februar", "März", "April", "Mai", "Juni",
        "Juli", "August", "September", "Oktober", "November", "Dezember"
    ];

    const date = new Date(datum);
    const monatIndex = date.getMonth();

    return monatsNamen[monatIndex];
}

console.log(monatsName("2001-3-4"));
console.log(monatsName("2019-12-24")); 
console.log(monatsName("1410-07-15")); 