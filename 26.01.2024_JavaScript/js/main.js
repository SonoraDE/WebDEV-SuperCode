// ! WIEDERHOLUNG VOM 25.01.24 ! //

// Checken ob JS richtig eingebunden ist
console.log(2);

// - Wie kann ich einen H1 einfügen?
document.write("<h1> TEST <h1>");

// - Welche Datentypen sind das?
let datentype = "10"; //String
let datentype1 = 10; // Number
let datentype2 = "text"; //string
let datentype3 = true; //Boolean
let datentype4 = 489789456465489; //Number
let datentype5 = false;

// - Unterschied zwischen let und const
//* let: wir können Werte der Variable überschreiben/verändern
//* const: Der Wert kann nicht überschrieben/verändert werden

// - Wie schreibe ich meine Variablen?
//* camelCase
//* nicht zu lang / nicht zu kurz
//* gerne englisch
//* selbsterklärend
//* Keine Zahlen am Anfang

// - Wie kann ich einen String zusammenfügen?
const firstName = "Marzio";
let age = 30;

// - Aritmetische Operationen
let a = 10;
let b = 20;
let c = 3;

//* Addieren von A und B
console.log(a + b);
//* Subtrahieren von A und B
console.log(a - b);
//* Dividieren von A und B
console.log(a / b);
//* Multiplizieren von B und C
console.log(b * c);
//* Checken ob es einen Restwert gibt - Modulo
console.log(b % a);

//* Wert um eins erhöhen - INCREMENT
b++
console.log(b);

//* Wert um eins verringern - DECREMENT
a--
console.log(a);

// ! NEUES THEMA 26.01.24 ! //

//- ======= COMPARISON =======

//? = nutzen wir als Zuweisung
//? == vergleicht nur den Wert
console.log(3 == 3); //true
console.log(3 == "3"); //true
console.log(2 == 5); //false
console.log(2 == "three"); //false
//? === vergleicht den Wert und Datentyp
console.log(3 === "3"); //false

//? != nicht gleicher Wert
//? !== nicht gleicher Wert oder Datentyp

console.log(3 != 3); //false
console.log(3 !== 3); //false
console.log(4 !== 3); //true

//?  > größer als
//?  < kleiner als
//?  >= größer gleich
//?  <= kleiner gleich
console.log(3 > 2); //true
console.log(4 < 6); //true
console.log(4 >= 6); //false
console.log(4 >= 4); //true
console.log(1 >= 2); //false

console.log("B" > "A"); //true

// - ======= ELEMENTE SELEKTIEREN =======

//* getElementById() - Damit sprechen wir die Elemente über ID an

const mainHeadline = document.getElementById("main-headline");
//console.log(mainHeadline);

//* So kann ich auf die einzelnen Werte zugreifen
console.log(mainHeadline.clientWidth);
console.log(mainHeadline.baseURL);

console.log(document.getElementById("main-headline"));

// - ======= querySelector() =======
//* Damit können wir alles ansprechen:
//* ID's (#) / Klassen (.) oder einfache Elemente (z.B h2)

const secondaryHeadline = document.querySelector("#secondary-headline");
const secondaryHeadline2 = document.querySelector(".div-container");
const secondaryHeadline3 = document.querySelector("h2");

console.log(secondaryHeadline);
console.log(secondaryHeadline2);
console.log(secondaryHeadline3);

// - ======= InnerHTML =======
//* Wir können innerHTML auch verwenden um den Inhalt zu überschreiben
mainHeadline.innerHTML = "ZACK - einfach so über JS geändert.";

//* Mit = überschreiben wir den Wert
//* mit += fügen wir was zum alten Text hinzu
secondaryHeadline.innerHTML = "Super";
secondaryHeadline.innerHTML += "Code";


// - ======= .style =======
//* mit .style können wir das Element stylen
// Schriftfarbe ändern
mainHeadline.style.color = "red";
// Hintergrund Farbe ändern
mainHeadline.style.backgroundColor = "blue";
mainHeadline.style.fontSize = "30px";

//* In Elemente schreiben
const divContainer = document.querySelector(".div-container");
divContainer.innerHTML = "<h2 class='supi'> Hallo ich komme über JS </h2>";

divContainer.style.backgroundColor = "yellow";

// Div Box Styling
const h2 = document.querySelector("div h2");
console.log(h2);


