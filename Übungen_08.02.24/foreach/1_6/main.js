let album = [
    "holidays.jpg",
    "Restaurant.jpg",
    "desktop",
    "rooms.GIF",
    "DOGATBEACH.jpg",
]

const modifiedFiles = album.map(file => {
    // Finde den Index des letzten Punktes im Dateinamen
    const dotIndex = file.lastIndexOf(".");
    
    // Wenn kein Punkt gefunden wurde oder der Punkt am Ende des Strings liegt, ist die Datei ungültig
    if (dotIndex === -1 || dotIndex === file.length - 1) {
        return "invalid";
    } else {
        // Extrahiere den Dateinamen ohne Dateiendung und wandele ihn in Kleinbuchstaben um
        return file.substring(0, dotIndex).toLowerCase();
    }
});

console.log(modifiedFiles);