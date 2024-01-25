// ! console.log ist dafür da um einen WErt in die Console auszugeben,
// ! wird zum Beispiel beim debuggen wichtig.
// ! Mit Semikolon Befehl beenden ;
console.log(30);
console.log(50);

// ! ===== Variablen ===== ! //

// ? const ? //
// * sollte für Werte genutzt werden die sich nicht ändern.
// - const name = "Marzio";
// ? let ? //
// * sollte für Werte genutzt werden, die sich später ggf. ändern.
// - let score = 0;
// ? var ? //0

let score = 0;
score = 11;
console.log("score: ", score);

// ! Konventionen ! //
// * Sollten selbsterklärend sein
// * Nicht zu kurz und nicht zu lang

// * JS ist Case-Sensitive
// * -> Groß und Kleinschreibung wird beachtet

// ! CamelCase ! //
//* Erstes wort klein und zweites Wort groß

// ! Modulo -> Restwert ! //
console.log(6 % 3);


// - ==== OUTPUT ==== - //
// ! document.write() ! //
//* Damit schreiben wir immer Daten an das Ende vom HTML
document.write("Ich komme jetzt ins Dokument");
//* Ummanteltes HTML Element hinzugefügt 
document.write("<h2 class='test'> Test H2 </h2>");

// ! window.alert() ! //
//*Sendet eine Alert beim aktualisieren der Seite
window.alert("Glückwunsch! Sie haben 1.000.000€ gewonnen !!!");


// - ==== INPUT ==== - //
// ! window.promt() ! //
//* Damit öffnet sich ein Popup, in dem der Nutzer etwas eingeben kann
window.prompt("Bitte gebe eine Zahl ein!", "Placeholder");

