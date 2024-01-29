// ! Wiederholung

//- Wie kann ich checken das JS richtig eingebunden ist?
// console.log(44);

//- Ich möchte mir ein Element selektieren mit der class "wdh" wie kann ich das machen?
const Wiederholung = document.querySelector(".wdh");

//- Welche Datentypen kennen wir?
// Number (Zahlen), String (Zeichen), Boolean (true, false)

//- Was ist der unterschied zwischen == und === ?
// == Nur Wert
// === Wert und Datentyp

//- <, <=, >, >= Was kann ich damit machen?
// kleiner, kleiner gleich, größer, größer gleich

//- Warum mögen wir den querySelector?
// Vielseitig einsetzbar, ID, Klasse, und HTML Tags

//- Wo ist der Unterschied zwischen innerHTML und document.write()
// innerHTML kann Elemente gezielt ins HTML platzieren
// document.write() kann nur ans Ende vons Dokument Elemente platzieren

//- Wie heißt das keyword mit dem wir in JS einzelne Werte stylen können 
// .style

//- Wie schreibe ich die CSS Eigenschaften in JS?
// fontSize
// CamelCase
// CSS => background-color:
// JS => backgroundColor:

//- Was ist eine Funktion
// Ein Aufgabenaufruf => Ablauf

//- Was sind Parameter
// Parameter sind Platzhalter um eine Funktion wiederverwendbarer zu gestalten

// ! ===== NEUES THEMA ===== ! //

// ? VALUES AUSLESEN 

//Form => onsubmit
//Button => onClick
function getInputValue(event){
event.preventDefault(); //Verhindert das die Seite neu geladen wird

    // mit .value lesen wir die Daten von input aus.
    const tobiName = document.querySelector("#name").value;

    //age
    const tobiAge = document.querySelector("#age").value;

    //range
    const tobiRange= document.querySelector("#range").value;

    //checkbox
    const tobiCheck= document.querySelector("#check").checked;

    //date
    const tobiDate= document.querySelector("#bday").value;

    console.log(
        tobiName,
        tobiAge,
        tobiRange,
        tobiCheck,
        tobiDate
    );

    const outputTobi = document.querySelector(".output-form");

    outputTobi.innerHTML = tobiName + tobiAge + tobiRange + tobiCheck + tobiDate;
}

// ! Add, Remove, Toggle Class

// * ADD
function addClass() {
    //class => .super-big
    const addClassTobi = document.querySelector(".add");

    addClassTobi.classList.add("super-big");
}

// * REMOVE
function removeClass() {
    //class => .super-crazy
    const removeClassTobi = document.querySelector(".remove");

    removeClassTobi.classList.remove("super-crazy");
}

// * TOGGLE
function darkLight(){
    const wrapper = document.querySelector(".wrapper");
    wrapper.classList.toggle("dark");
}

