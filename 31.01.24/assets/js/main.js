// * ======================================
// !             if / else
// * ======================================
// Conditionals (Bedingungen) sind in der Programmierung die Möglichkeit, bestimmte Code Blöcke auf Basis einer Bedingung auszuführen oder auch überspringen zu lassen.
// Eine der Möglichkeiten ist "if" (wenn) und "else" (sonst)

// 2. switch -> vllt heute, sonst morgen
// 3. ternary operator -> heute nicht, später im Kurs

// * ======================================
// !            Grundsyntax
// * ======================================

//? if (hier drin steht die Bedingung) {
//? Dieser Block wird ausgeführt wenn die Bedingung true ist   
//? } else {
//? Dieser Block wird ausgeführt wenn die Bedingung false ist   
//? }

// Wir benötigen für eine Bedingung, in der Regel, fast immer einen Vergleich (Comparison) !!!

let time = 9;
console.log(time >= 8); //false

if(time >= 8){
    console.log("Ich führe das if aus, weil mein Vergleich true ist.")
    //else ist der Ausschlussfall und wird ausgeführt wenn keine Bedingung true ist (Ist keine Pflicht aber sollte genutzt werden)
} else {
    console.log("Ich führe das else aus, weil mein Vergleich false ist.")
}

let salary = 2000;

if(salary <= 1000){
    console.log("Du verdienst wenig.");
} else  if (salary <= 1500) {
    console.log("Du verdienst gut!");
} else if (salary <= 2000){
    console.log("Du bist Spitzenverdiener.");
} else if (salary <= 4000){
    console.log("Gehalt to the moon.");
} else {
    console.log("Gehalt nicht mehr messbar #Elon.");
}

let schuelerPunkte = 91;

if (schuelerPunkte <= 20) {
    console.log("Die Note 6");
} else if (schuelerPunkte <= 40) {
    console.log("Die Note 5");
} else if (schuelerPunkte <= 60) {
    console.log("Die Note 4");
} else if (schuelerPunkte <= 70) {
    console.log("Die Note 3");
} else if (schuelerPunkte <= 90) {
    console.log("Die Note 2");
} else {
    console.log("Die Note 1");
}

// * ======================================
// !          logical operators
// * ======================================
//? Es gibt 2 logical operators
//? && operator -> logische und, hier müssen beide Bedingungen true sein
//? || operator -> logische oder, hier muss nur eine der beiden Bedingungen true sein
//? ! operator -> logische nein ->

let numOne = 5;
let numTwo = 7;

console.log("false weil beide Bedingungen nicht eintreffen");
console.log(numOne === 5 && numTwo === 8); //false
console.log("true weil eine der beiden Bedingungen eintrifft");
console.log(numOne === 5 || numTwo === 8); //true

//Warum immer am besten mit === vergleichen und nicht nur mit == ?
// Weil die === einen stabileren und robusteren Code bauen, weil wir hier im strikten Vergleich sind.
// Dadruch erlauben wir dem Code weniger Freiraum für Interpretationen durch User Eingaben und Datentypen.


// * ======================================
// !          fake login
// * ======================================

// fake Datenbank
const fakeDbUser = "tobi@super-code.de";
const fakeDbPassword = "tobi123";
let falseLogin = 1;

function login() {
    const inputEmail = document.body.querySelector("#mail").value;
    const inputPassword = document.body.querySelector("#pass").value;

    if(falseLogin < 5) {
        if(inputEmail === fakeDbUser && inputPassword === fakeDbPassword){
            console.log("Erfolgreich eingeloggt.");
        } else {
            console.log("Sie haben noch " + (5 - falseLogin) + "Versuche");
            ++falseLogin;
            console.log("Email und/oder Passwort falsch!");
        }
    } else {
        console.log("Sie haben sich " + falseLogin + " falsch angemeldet, bitte wenden Sie sich an den Admin!");
    }
}