//! auslesen von inputs und in variablen schreiben
//- groesse
//- alter
//-gewicht
//- geschlecht
//- dropdownWert für betätigung

//- grundumsatz = 0

//! Rechnung
//- unterscheiden ob frau oder mann
//- grumsatz = umsatz berechnen nach formel mit den variablen groesse, alter, geschlecht

// nach der unterscheidung :
// grundumsatz * PAL Faktor (Basierend auf dropdown)

// ? Grundumsatz bei Männern (Kalorien je Tag):
// ? 66.47 + (13.7 * bodyWeight) + (5 * bodySize) – (6.8 * age) = grundUmsatz
// ? Grundumsatz bei Frauen (Kalorien je Tag):
// ? 655.1 + (9.6 * bodyWeight) + (1.8 * bodySize) – (4.7 * age) = grundUmsatz


//? 1 kcal = 4,184 kJ

const getResult = () => {
    //* VARIABLEN - VALUES
    const bodySize = document.querySelector("#bodysize").value;
    const age = document.querySelector("#age").value;
    const bodyWeight= document.querySelector("#weight").value;
    const gender = document.querySelector('input[name="geschlecht"]:checked');
    const optionValue = document.querySelector("#belastung").value;

    let grundUmsatz = 0;
    let grundKj = 0;
    let resultValue = 0;
    let resultKJ = 0;

    //* RECHNUNG
    if(gender === 1) {
        grundUmsatz = 655.1 + (9.6 * bodyWeight) + (1.8 * bodySize) - (4.7 * age);
    } else {
        grundUmsatz = 66.47 + (13.7 * bodyWeight) + (5 * bodySize) - (6.8 * age);
    }
    resultValue = grundUmsatz * optionValue;
    resultKJ = resultValue * 4.184;
    grundKJ = grundUmsatz * 4.184;

    document.querySelector("#umsatz-kcal").innerHTML = grundUmsatz.toFixed(2);
    document.querySelector("#gumsatz-kcal").innerHTML = resultValue.toFixed(2);
    document.querySelector("#umsatz-kj").innerHTML = grundKJ.toFixed(2);
    document.querySelector("#gumsatz-kj").innerHTML = resultKJ.toFixed(2);
}
