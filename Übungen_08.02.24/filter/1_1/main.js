const words = [
    "Banane",
    "Kaktus",
    "Flausch",
    "Ente",
    "Apfel",
    "Auto",
    "Giraffe",
    "Schmetterling",
    "Krokodil",
    "Lampe"
];


console.log(words);

const filterWords = words.filter((shortWords) => {
    return shortWords.length <= 6;
})

console.log(filterWords);