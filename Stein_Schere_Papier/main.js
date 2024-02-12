//! Variablen für Spieler und CPU Auswahl --------------
let playerChoose;
let computerChoose;

//! CPU Funktion für random Auswahl --------------
const cpuPlay = (chooseWeapon) => {
    const chooseOptions = ["Stein", "Schere", "Papier"];
    const randomChoose = chooseOptions [Math.floor(Math.random() * chooseOptions.length)];
    computerChoose = randomChoose;
    document.querySelector("#cpuselect").innerHTML = `CPU Auswahl : ${randomChoose}`;

//! Ausgabe von CPU Auswahl zum checken ob random klappt --------------
    console.log(randomChoose);

//! Auswahl des Spielers --------------
document.querySelector("#playerselect").innerHTML = `Spieler Auswahl : ${chooseWeapon}`;

if(chooseWeapon === "Papier" && computerChoose === "Stein") {
    document.querySelector("#result").innerHTML = `Ergebnis : <span style = "color: green; text-shadow: none"> Du gewinnst!</span>`;
    } else if(chooseWeapon === "Schere" && computerChoose === "Papier") {
        document.querySelector("#result").innerHTML = `Ergebnis : <span style = "color: green; text-shadow: none"> Du gewinnst!</span>`;
    } else if(chooseWeapon === "Stein" && computerChoose === "Schere") {
        document.querySelector("#result").innerHTML = `Ergebnis : <span style = "color: green; text-shadow: none"> Du gewinnst!</span>`;
    } else if(chooseWeapon === computerChoose) {
        document.querySelector("#result").innerHTML = `Ergebnis : <span style = "color: lightblue; text-shadow: none"> Unentschieden!</span>`;
    } else {
        document.querySelector("#result").innerHTML = `Ergebnis : <span style = "color: red; text-shadow: none"> Du verlierst!</span>`;
    } 
}

const resetGame = () => {
    playerChoose = null;
    computerChoose = null;
    document.querySelector("#playerselect").innerHTML = `Spieler Auswahl :`;
    document.querySelector("#cpuselect").innerHTML = `CPU Auswahl :`;
    document.querySelector("#result").innerHTML = `Ergebnis :`;
}
