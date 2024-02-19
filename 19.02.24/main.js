//! === DATE OBJECT ===
// 01.01.1970 -> Start der Zeit

//* Wenn wir keine Parameter mitgeben, bekommen wir die aktuelle Zeit + Datum zurück
let date1 = new Date()
console.log(date1);

//* Wenn wir Parameter mitgeben, wird ein Object erstellt mit den durchgereichten Zeiten.
let date2 = new Date(1993, 3, 10, 16, 12, 13);
console.log(date2);

//* Daten subtrahieren (Ergebnis kommt in Millisekunden)
let date3 = date1 - date2;
console.log(date3);

//? So können wir die Tage ausrechnen
//? 24h = Der Tag ist 24 Stunden lang
//? 60min = sind eine Stunde
//? 60sek = sind eine Minute
//? 1000ms = 1 Sekunde
let tage = date3 / (24 * 60 * 60 * 1000);
console.log(tage.toFixed(0));

//* Object in String umwandeln
let date4 = date2.toString();
console.log(date4);

//* toUTCString() - gibt ein Datum in UTC Zeit aus
// UTC - The Universal Coodinated ist der standard bei den Welt Uhren
// Wandelt in String um
let date5 = date1.toUTCString();
console.log(date5);

//* toLocalDateString - gibt ein Datum in einer lokalisierten Darstellung zurück
//Datum
let date6 = new Date().toLocaleDateString()
console.log(date6);

//* toLocalString - gibt ein Datum und Uhrzeit in lokaler Darstellung zurück
let date7 = new Date().toLocaleString()
console.log(date7);

//* toLocaleTimeString - gibt eine Uhrzeit in lokaler Darstellung zurück
let date8 = new Date().toLocaleTimeString()
console.log(date8);

//* getFullYear() - gibt uns nur das Jahr zurück
let date9 = new Date().getFullYear()
console.log(date9);

//* getMonth() gibt uns nur den Monat zurück
// Monate starten bei index 0 => Jan => 0
let date10 = new Date().getMonth()
console.log(date10);

//* getDate() - gibt uns nur den Tag zurück
let date11 = new Date().getDate()
console.log(date11);

//* getHours() - gibt uns nur die Stunden zurück
let date12 = new Date().getHours()
console.log(date12);

//* getMinutes() - gibt uns nur die Minuten zurück
let date13 = new Date().getMinutes()
console.log(date13);

//* getSeconds() - gibt uns nur die Sekunden zurück
let date14 = new Date().getSeconds()
console.log(date14);

//! Uhrzeit zusammen gebaut:
let date15 = (date12 + ":" + date13 + ":" + date14)
console.log(date15);


//!
const überschreiben = new Date();
console.log(überschreiben);

//* setDate
überschreiben.setDate(28);
console.log(überschreiben);

//* setMonth
überschreiben.setMonth(11);
console.log(überschreiben);

//* setFullYear()
// SO Können wir das ganze Jahr anpassen
überschreiben.setFullYear(2000);
console.log(überschreiben);

//! Name vom Wochentag herausfinden

//? "long" = Montag
//? "short" = Mo
//? "narrow" = M

let weekDay = new Date().toLocaleString("default", {weekday: "long"})
console.log(weekDay);

//! Öffnungszeiten

const date = [
    {day: "Montag", time: "9:00 - 18:00"},
    {day: "Dienstag", time: "9:00 - 18:00"},
    {day: "Mittwoch", time: "9:00 - 18:00"},
    {day: "Donnerstag", time: "9:00 - 18:00"},
    {day: "Freitag", time: "9:00 - 18:00"},
    {day: "Samstag", time: "10:00 - 20:00"},
    {day: "Sonntag", time: "12:00 - 15:00"},
];

const outputData = document.querySelector(".oeffnungszeiten");

date.forEach((weekDayItem) => {
    outputData.innerHTML = `
    <div>
    <h1>${weekDayItem.day}</h1>
    <p>${weekDayItem.time}</p>
    </div>
    `
});
