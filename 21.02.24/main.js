//! ====== API ======
//* Eine API ist eine Schnitt stelle zwischen front- und backend.
//* API kommunizieren in der Regel mit dem Server wiederrum mit den Daten antwortet.

//? ====== JSON ======
//* JSON (JavaScript Object Notation) ist ein gängiges Format um Daten zu speichern.
//* Unterstützt verschiedene Dateitypen, wie z.B String, Zahlen, Boolean, Array, Objects
//* Objects können Objects beinhalten.
//* Gibt es in verschiedenen Programmiersprachen
//* Sehr weit verbreitet
//* "JSON Formatter"

// So schaut ein JSON aus (Wie ein Object nur mit "key" auch in "")
// {
//     "id": 1,
//     "name": "Max"
// }

//? ====== Promise & Fetch ======
console.log(fetch("./fakeData.json"));
//* 1. Ein Fetch ist ein Promise
//* 2. Ein Promise ist ein Object
//- ----> Ein Promise ist ein Versprechen das den eventuellen Abschluss repräsentiert. Der kann erfolgreich sein oder auch nicht, aber wir bekommen auf jeden Fall etwas zurück. (Daten oder Fehler)

//? Ein Promise hat drei Zustände
//* ---> <pending> (Wir haben noch keine Antwort erhalten.)
//* ---> <resolved> (Antwort erhalten, alles ging gut.)
//* ---> <rejected> (Antwort erhalten, wir haben einen Error.)

//* 3. Fetch ist asynchron, heißt es läuft parallel zu anderen Funktionen. Andere Funktionen müssen daher nicht auf den Fetch warten.

//* 4. Ein Promise kann mit einer Methode .then() und .catch() behandelt werden, um auf das Ergebnis oder den Fehler zu reagieren.

// ----> ".then()" - Methode wird aufgerufen, wenn wir einen positiven Promise erhalten (resolved)
// ----> ".catch()" - Methode wird aufgerufen, wenn wir einen negativen Promise erhalten (rejected)

//? ====== LOKALE DATEN FETCHEN ======

fetch("./fakeData.json")
.then((response) => response.json()) //response wird in json umgewandelt
.then((movieData) => console.log(movieData)) //Die JSON Datei befindet sich nun in "movieData" (frei wählbar)
.catch((error) => console.log("Fehler beim laden der JSON :-(", error));

//? ====== API FETCHEN ======
fetch("https://fakestoreapi.com/products")
.then((response) => response.json())
.then((apiData) => {
    console.log(apiData);
    apiData.forEach((singleProduct) => {
        let productItem = document.createElement("div");
        productItem.style = "border: solid 3px black; border-radius: 20px; margin: 2vw 2vw; padding: 1vw 1vw"

        //Title
        let titleProduct = document.createElement("h2");
        titleProduct.textContent = singleProduct.title;
        productItem.appendChild(titleProduct);

        //Beschreibung
        let descriptionProduct = document.createElement("p");
        descriptionProduct.textContent = singleProduct.description;
        productItem.appendChild(descriptionProduct);

        //Preis
        let priceProduct = document.createElement("p");
        priceProduct.textContent = singleProduct.price + "€";
        productItem.appendChild(priceProduct);

        //Bild
        let imgProduct = document.createElement("img");
        imgProduct.setAttribute("src", singleProduct.image);
        productItem.appendChild(imgProduct);

        // Button
        let moreInfoBtn = document.createElement("button");
        moreInfoBtn.textContent = "Mehr Infos";

        // EventListener für Button
        moreInfoBtn.addEventListener("click", () => {
            //console.log(`Produkt mit der ${singleProduct.id} wurde angeklickt`);
            fetch(`https://fakestoreapi.com/products/${singleProduct.id}`)
            .then(response => response.json())
            .then(dataSingleFetch => console.log(dataSingleFetch))
            .catch((error) => console.log("Fehler beim single Fetch", error));
        })

        productItem.appendChild(moreInfoBtn);
        
        document.querySelector(".product").appendChild(productItem);

        //https://fakestoreapi.com/products/1
    });
})
.catch((err) => console.log("Fehler beim Laden der Daten", err));


