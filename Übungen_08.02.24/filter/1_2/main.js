const words = [
    "test",
    "Kaktus",
    undefined,
    "ichbintobi",
    "Apfel",
    "Auto",
    "Giraffe",
    null,
    "Krokodil",
    "hallo"
];


console.table(words);

words.splice(2, 1);
words.splice(6, 1);
console.table(words);