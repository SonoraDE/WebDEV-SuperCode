//! OBEJCT LITERALS
// Kann mit let oder const anfangen
//Wir benötigen immer {} bei einem Object

//! OBJECT ERSTELLEN

const person = {
    //* name: = KEY | "Max Mustermann" = VALUE
    name: "Max Mustermann",
    alter: 37,
    herkunft: "Deutschland",
    stadt: "Hamburg",
    groesse: "187CM",
    erwachsen: true
};

console.log(person);

// ? AUF EINZELNE ELEMENTE ZUGREIFEN
// dot notation
console.log(person.alter);

// bracket notation
// Wenn key ein String ist, sollten wir mit brackets arbeiten
console.log(person["stadt"]);
console.log(person["name"]);

//! WERTE EINES OBJECTS NEU ZUWEISEN
person.name = "Susi Meier";
console.log(person.name);

//! WERTE IM OBJECT HINZUFÜGEN
person.job = "Trainer";
console.log(person);

//! ARRAY IN EIN OBJECT HINZUFÜGEN
person.haustiere = ["Hund", "Katze", "Maus"];
console.log(person);

//! WERTE IM OBJECT LÖSCHEN
delete person.job;
console.log(person);
console.clear();

//! METHODEN IN OBJECTS
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    name: "Marzio",
    age: 30,
    sub: (a, b) => a - b,
};

console.log(calculator.name);
console.log(calculator.add(2, 5));
console.log(calculator.sub(7, 2));

//! METHODEN IN OBJECTS 2

const person2 = {
    name: "Sabine",
    age: 33,
    city: "Berlin",
    greet: function() {
        console.log(
        `Hallo mein Name ist ${person2.name} ich bin: ${person2.age} Jahre alt und wohne in ${person2.city}.`
        );
    },
};

person2.greet();

//! OBJECTS UND FOR SCHLEIFEN

const person3 = {
    name: "Marzio",
    age: 30,
    adult: true,
    city: "Tutzing",
};

for (let key in person3) {
    //So bekommen wir nur die keys raus
    //console.log(key);

    //So bekommen wir nur die values raus
    console.log(person3[key]);
}

//! OBJECTS => KEYS
// So bekommen wir aus einem Object die Keys raus (als array)
const keys = Object.keys(person3);
console.log(keys);

//! OBJECTS => VALUES
// So bekommen wir aus einem Object die Values raus (als array)
const values = Object.values(person3);
console.log(values);

//! OBJECTS => ENTRIES
// So wandeln wir ein Object in ein array um, wobei jedes Key/Value Paar ein eigenes array ist
const entries = Object.entries(person3);
console.log(entries);
//Über den index in das Array vom Object rein navigieren und etwas ausgeben
console.log(entries[0][1]);

//! OBJECTS INNERHALB VON OBJECTS

const person4 = {
    name: "Hakan",
    age: 16,
    city: "München",
    job: "Senior Fullstack Developer",
    socialMedia: {
        linkedIn: "www.linkedin.de",
        instagram: "www.instagram.de",
        facebook: {
            facebookFreunde: 1223,
            likesTotal: 15648,
        },
    },
    hobbys: ["coden", "zocken", "schlafen"], 
};

// Zugriff auf Values in Objects innerhalb eines Objects
console.log(person4.socialMedia.facebook.likesTotal);
console.log(person4.socialMedia.facebook.facebookFreunde);

const superTrainer = [
    {
        name: "Timo",
        city: "Berlin",
        socialMedia: {
            linkedIn: "www.linkedin.de",
            instagram: "www.instagram.de",
        },
        age: 41,
    },
    {
        name: "Achmed",
        city: "Essen",
        socialMedia: {
            linkedIn: "www.linkedin.de",
            instagram: "www.instagram.de",
        },
        age: 24,
    },
    {
        name: "Alex",
        city: "Frankfurt",
        socialMedia: {
            linkedIn: "www.linkedin.de",
            instagram: "www.instagram.de",
        },
        age: 38,
    },
    {
        name: "Sandra",
        city: "Hamburg",
        socialMedia: {
            linkedIn: "www.linkedin.de",
            instagram: "www.instagram.de",
        },
        age: 19,
    },
];

console.log(superTrainer[0].socialMedia.linkedIn);

const outputTrainer = document.querySelector(".trainer");

superTrainer.forEach((singleTrainerItem) => {
outputTrainer.innerHTML += `
    <h2>${singleTrainerItem.name}</h2>
    <p>Stadt: ${singleTrainerItem.city}</p>
    <p>Alter: ${singleTrainerItem.age}</p>
    <p>Instragram: ${singleTrainerItem.socialMedia.instagram}</p>
`
});
