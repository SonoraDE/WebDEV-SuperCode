//! Variablen für Spieler und CPU Auswahl --------------
let playerChoose;
let computerChoose;
let wins = 0;
let looses = 0;
let draws = 0;

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
        wins++;
    } else if(chooseWeapon === "Schere" && computerChoose === "Papier") {
        document.querySelector("#result").innerHTML = `Ergebnis : <span style = "color: green; text-shadow: none"> Du gewinnst!</span>`;
        wins++;
    } else if(chooseWeapon === "Stein" && computerChoose === "Schere") {
        document.querySelector("#result").innerHTML = `Ergebnis : <span style = "color: green; text-shadow: none"> Du gewinnst!</span>`;
        wins++;
    } else if(chooseWeapon === computerChoose) {
        document.querySelector("#result").innerHTML = `Ergebnis : <span style = "color: lightblue; text-shadow: none"> Unentschieden!</span>`;
        draws++;
    } else {
        document.querySelector("#result").innerHTML = `Ergebnis : <span style = "color: red; text-shadow: none"> Du verlierst!</span>`;
        looses++;
    }
    //! Anzeige von Siegen, Niederlagen und Unentschieden --------------
    document.querySelector("#showWins").innerHTML = `<span style = "color: green; text-shadow: none"> Siege gegen CPU : ${wins} </span>`;
    document.querySelector("#showLooses").innerHTML = `<span style = "color: red; text-shadow: none"> Niederlage gegen CPU : ${looses} </span>`;
    document.querySelector("#showDraws").innerHTML = `<span style = "color: lightblue; text-shadow: none"> Unentschieden : ${draws} </span>`;
}

const resetGame = () => {
    playerChoose = null;
    computerChoose = null;
    wins = 0;
    looses = 0;
    draws = 0;
    document.querySelector("#playerselect").innerHTML = `Spieler Auswahl :`;
    document.querySelector("#cpuselect").innerHTML = `CPU Auswahl :`;
    document.querySelector("#result").innerHTML = `Ergebnis :`;
    document.querySelector("#showWins").innerHTML = `<span style = "color: green; text-shadow: none"> Siege gegen CPU : ${wins} </span>`;
    document.querySelector("#showLooses").innerHTML = `<span style = "color: red; text-shadow: none"> Niederlage gegen CPU : ${looses} </span>`;
    document.querySelector("#showDraws").innerHTML = `<span style = "color: lightblue; text-shadow: none"> Unentschieden : ${draws}`;
}
