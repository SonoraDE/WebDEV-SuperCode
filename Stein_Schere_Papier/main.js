// Variablen für Spieler- und Computerauswahl
let spielerAuswahl;
let cpuAuswahl;

// Funktion zur Generierung der Computerauswahl
function computerPlay() {
    const auswahl = ["Schere", "Stein", "Papier"];
    const randomAuswahl = auswahl[Math.floor(Math.random() * auswahl.length)];
    cpuAuswahl = randomAuswahl;
}

// Funktion zur Auswertung des Spiels
function playRound(playerChoice) {
    spielerAuswahl = playerChoice;
    computerPlay();
    if (spielerAuswahl === cpuAuswahl) {
    } else if (
        (spielerAuswahl === "Schere" && cpuAuswahl === "Papier") ||
        (spielerAuswahl === "Stein" && cpuAuswahl === "Schere") ||
        (spielerAuswahl === "Papier" && cpuAuswahl === "Stein")
    ) {
        console.log("Du gewinnst! " + spielerAuswahl + " besiegt " + cpuAuswahl);
        document.querySelector("#playerselect").innerHTML = "You choose : " + spielerAuswahl;
        document.querySelector("#cpuselect").innerHTML = "CPU choose : " + cpuAuswahl;
        document.querySelector("#result").innerHTML = "Du gewinnst! " + spielerAuswahl + " besiegt " + cpuAuswahl;
    } else {
        document.querySelector("#result").innerHTML = "Du verlierst! " + cpuAuswahl + " besiegt " + spielerAuswahl;
    }
}

// Funktion zum Zurücksetzen des Spiels
function resetGame() {
    playerSelection = null;
    computerSelection = null;
    document.querySelector("#playerselect").innerHTML = "You choose : ";
    document.querySelector("#cpuselect").innerHTML = "CPU choose : ";
    document.querySelector("#result").innerHTML = "Result : ";
}