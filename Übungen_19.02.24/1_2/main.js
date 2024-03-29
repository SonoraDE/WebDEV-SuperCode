function anzeigenUhrzeit() {
    const time = new Date();
    const stunden = time.getHours().toString().padStart(2, '0');
    const minuten = time.getMinutes().toString().padStart(2, '0');
    const sekunden = time.getSeconds().toString().padStart(2, '0');
    document.getElementById("time").textContent = `${stunden}:${minuten}:${sekunden}`;
}

function anzeigenDatum() {
    const time = new Date();
    const wochentag = time.toLocaleDateString('de-DE', { weekday: 'long' });
    const tag = time.getDate();
    const monat = time.toLocaleDateString('de-DE', { month: 'long' });
    const jahr = time.getFullYear();
    document.getElementById("date").textContent = `${wochentag}, ${tag}. ${monat} ${jahr}`;
}

anzeigenUhrzeit();
anzeigenDatum();

setInterval(anzeigenUhrzeit, 1000);