function anzeigenAktuellesDatum() {
    const jetzt = new Date();
    const tag = jetzt.getDate();
    const monat = jetzt.getMonth() + 1;
    const jahr = jetzt.getFullYear();

    const datum = tag + "/" + monat + "/" + jahr;
    document.querySelector("#datumAnzeige").textContent = datum;
}

anzeigenAktuellesDatum();