//! STARTEN EINER REACT APP ====================================================================================================================

// https://vitejs.dev/guide/

// 1. NPM create vite@latest
// 2. y -> eintippen um weiter zu machen
// 3. Projekt-Name erstellen ohne leerzeichen und umlaute etc.
// 4. React auswählen
// 5. JS auswählen
// 6. cd <projektname> //? navigiert in unser react Projekt
// 7. npm install //? installiert alle Pakete die wir für React benötigen
// 8. npm run dev //? Startet das Projekt

//! Ordnerstruktur in React ====================================================================================================================

// node_modules //? Dort befinden sich alle Pakete die für React benötigt werden (wir können auch Pakete dazu installieren)

// public //? Dort werden alle Dateien gespeichert die unverändert ausgegeben werden => Bild / Fonts

// src //? Hier werden wir 98% unserer Zeit verbringen. Hier programmieren wir. idR erstellen wir in dem src Ordner noch mal 2 Ordner mit pages & components.

//.gitignore //? Da kommen die Ordner/Dateien rein, die nicht mit auf Github hochgeladen werden sollen (Wird grau hinterlegt bei VS Code)

// index.html //? ist der Startpunkt unserer App. In unserem div mit der ID root wird alles rein gerendert.

// package-lock.json //? Hier befinden sich alle benötigten npm Pakete (dependencies)

// package.json //? Infos über unsere App. Interne  wie z.B Version, Name etc.

// README.md //? Infos über unsere App (Beschreibungen etc.)

// vite.config.js //? Hier kann man vite anpassen

// JSX = JavaScript Syntax Extension

//!  App.css vs Index.css ====================================================================================================================

// In die index.css kommen alle generellen stylings wie fontFamily h1-h6. In die Appcss machen wir nur stylings für die page App.jsx

import './App.css'
import Home from './page/Home/Home';

function App() {
  return <Home />;
}

export default App
