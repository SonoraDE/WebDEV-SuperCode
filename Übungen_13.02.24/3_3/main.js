function generateOutput() {
    var inputNumber = document.querySelector("#inputNumber").value.trim(); // Leerzeichen entfernen
    var outputText = "";

    if (inputNumber === "" || inputNumber <= 0 || inputNumber.indexOf('.') !== -1 || inputNumber.indexOf('e') !== -1) {
        outputText = "Fehler: Bitte gib eine gültige positive ganze Zahl ein.";
    } else {
        inputNumber = Number(inputNumber); // Eingabe als Zahl behandeln

        outputText = "L";

        if (inputNumber % 2 === 0) { // gerade Zahl
            for (let i = 0; i < inputNumber; i++) {
                outputText += "o";
            }
            outputText += "p";
        } else { // ungerade Zahl
            for (let i = 0; i < inputNumber; i++) {
                outputText += (i % 2 === 0) ? "o" : "0";
            }
            outputText += "p";
        }
    }

    document.querySelector("#outputText").textContent = outputText;
}