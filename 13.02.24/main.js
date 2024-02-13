// ! ---------------- for loop ----------------- ! //
//i ist frei wählbar. Es wird aber meistens i = index benutzt
// ? Klassischer for Loop 

for(let i = 1; i <= 10; i++) {
    console.log("Test");
}

// ! ---------------- ACHTUNG vor INFINITY LOOPS ----------------- ! //
// for(let i = 4; i >= 6; i++) {
//     console.log(i);
// }

// ! ---------------- RUNTER ZÄHLEN ----------------- ! //
for(let i = 50; i >= 1; i--) {
    console.log(i);
}

// ! ---------------- Schleife in einer Schleife (Nested Loops) ----------------- ! //

for(let i = 1; i <= 3; i++) {
    for (let j = 0; j <= 5; j++) {     
        console.log("Innere Schleife"); 
    }
    console.log("Äußere Schleife");
}

// ! ---------------- for Schleife mit Array ----------------- ! //
let countrys = ["france","germany","italy","norway"];

console.log(countrys);
console.log(countrys[3]);
console.log(countrys[1]);
console.log(countrys[0]);

for(let i = 0; i < countrys.length; i++) {
    console.log(i);
    console.log(countrys[i].toUpperCase());
}

// ! ---------------- Checken ob eine Zahl gerade oder ungerade ist ----------------- ! //

let zahlen = [1,3,6,3,4,9,14,15,17,18,25,23,86,45,32];

let geradeZahlen = [];

for (let i = 0; i < zahlen.length; i++) {
    if(zahlen[i] % 2 === 0) {
        geradeZahlen.push(zahlen[i]);
    }
}

console.table(geradeZahlen);

// ! ---------------- Berechnung der Durchschnittsnote ----------------- ! //
let noten = [1, 3, 2, 5, 4, 3, 1, 3, 6, 2, 2, 2, 3, 1, 1, 5, 4, 5, 1, 1, 1, 2, 2, 1, 2, 3];
let maxNoten = [1, 4, 5, 1, 1, 3, 2, 2, 1, 2, 3];

//Funktion zur Berechnung der Noten
const durchschnittsNote = (noten) => {
    let summe = 0;

    for (let i = 0; i < noten.length; i++) {
        summe += noten[i];
    }
    console.log(summe);
    //Berechnen

    let durchschnitt = summe / noten.length;
    return Number(durchschnitt.toFixed(2));
}

let durchschnittsNotenVariable = durchschnittsNote(noten);
let maxNotenDurch = durchschnittsNote(maxNoten);

console.log(`Der Notendurchschnitt der Schüler ist: ${durchschnittsNotenVariable}`);
console.log("Max seine Noten: ", maxNotenDurch);

// ! ---------------- String in For Loop ----------------- ! //

let stringText = "Deutschland";

for (let i = 0; i < stringText.length; i++) {
    console.log(stringText[i]);
}

// ! ---------------- for of Schleife ----------------- ! //
// wir benötigen ein array / string

let colors = ["greed" , "red", "blue", "black"];

for(let i of colors) {
    console.log(i);
}

let superString = "Text";

for(let i of superString) {
    console.log(i);
}

// ! ---------------- Wann welcher Loop ----------------- ! //
//Wenn ich über ein Array, String iterieren will benutzen wir map(), forEach(), for of(), for()
//Wenn ich eine Schleife benötige die nicht von einem index abhängig ist, benutzen wir eine for Schleife. Hier kann ich den Start und End Punkt manuell auswählen.

