//! onclick()

const sayHallo = () => {
    console.log("Hallo!");
}

//! EventListener()

//* Welches Element soll beobachtet werden?
//? EventListener hinzufügen
//? sayHiBtn.addEventListener()

//* Event definieren
//? sayHiBtn.addEventListener("click")

//* Definieren was bei dem Event passieren soll

const halloOutput = document.querySelector("#hello-output");
const sayHiBtn = document.querySelector("#say-hi-button");

sayHiBtn.addEventListener("click", () => {
    halloOutput.innerHTML = "Hallo vom Event";
});

//! mouseover

//* Erkennt ob die Maus über das Element gehovert wird

const textInput = document.querySelector("#text-input");

textInput.addEventListener("mouseover", () => {
    console.log("Mouse wurde drüber gehovert!");
});

//! Change

const selectInput = document.querySelector("#select-input");

selectInput.addEventListener("change", () => {
    console.log("Option Feld wurde geändert");
    halloOutput.innerHTML = selectInput.value;
});

//! Externer EventListener

const inputFunc = () => {
    console.log("In mich wurde was eingetragen.");

    halloOutput.innerHTML = textInput.value;
}

//* Funktion aufrufen

textInput.addEventListener("input", inputFunc);

//! Remove
submitBtn.addEventListener("click" , (event) => {
        // Verhindert das neu laden der Seite
    event.preventDefault();
    console.log("Es wurde submit geklickt, Eventliustener wurde gemovet");

        // Event wieder löschen / "removen"
        // WICHTIG: Das geht nur, wenn wir die Funktion auslagern
    textInput.removeEventListener("input", inputFunc);
});