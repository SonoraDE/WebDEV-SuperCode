function generateOutput() {
    var inputNumber = parseInt(document.querySelector("#inputNumber").value);
    var outputText = "";

    if (inputNumber > 0) {
        for (var i = 0; i < inputNumber; i++) {
            outputText += "Tobi";
        }
        outputText = "Tobi" + outputText;
    } else {
        outputText = "Bitte gib eine gültige positive Zahl ein.";
    }

    document.querySelector("#outputText").textContent = outputText;
}
