function checkBundesland() {

    const bundesland = document.querySelector("#bundeslandInfo").value;

    switch(bundesland) {
        case "baden":
          document.querySelector("#bundeslandInfoErgebnis").innerHTML = "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
          break;
        case "bayern":
            document.querySelector("#bundeslandInfoErgebnis").innerHTML = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
          break;
        case "berlin":
            document.querySelector("#bundeslandInfoErgebnis").innerHTML = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
          break;
        case "brandenburg":
            document.querySelector("#bundeslandInfoErgebnis").innerHTML = "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
          break;
        case "bremen":
            document.querySelector("#bundeslandInfoErgebnis").innerHTML = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt";
          break;
        case "hamburg":
         document.querySelector("#bundeslandInfoErgebnis").innerHTML = "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt";
          break;
        case "hessen":
         document.querySelector("#bundeslandInfoErgebnis").innerHTML = "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
          break;
        case "mecklenburg":
         document.querySelector("#bundeslandInfoErgebnis").innerHTML = "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt";
          break;
        case "niedersachsen":
         document.querySelector("#bundeslandInfoErgebnis").innerHTML = "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt";
          break;
        case "nordrhein":
         document.querySelector("#bundeslandInfoErgebnis").innerHTML = "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt";
          break;
        case "rheinland":
         document.querySelector("#bundeslandInfoErgebnis").innerHTML = "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt";
          break;
        case "saarland":
         document.querySelector("#bundeslandInfoErgebnis").innerHTML = "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt";
          break;
        case "sachsen":
           document.querySelector("#bundeslandInfoErgebnis").innerHTML = "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt";
            break;
        case "sachsenanhalt":
           document.querySelector("#bundeslandInfoErgebnis").innerHTML = "Sachsen-Anhalt hat 2,245 Mio Einwohner und Magdeburg ist die Hauptstadt";
            break;
        case "schleswig":
           document.querySelector("#bundeslandInfoErgebnis").innerHTML = "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt";
            break;
        case "thuringen":
         document.querySelector("#bundeslandInfoErgebnis").innerHTML = "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt";
            break;
        default:
         document.querySelector("#bundeslandInfoErgebnis").innerHTML = "Ein solches Bundesland gibt es in Deutschland nicht.";
      }
}