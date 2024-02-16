let unsereHaustiere = [
    {
        tiertyp: "Katze",

        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]
    },
    {
        tiertyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy"
        ]
    }
];

console.log(unsereHaustiere);

console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);

for (let i = 0; i < unsereHaustiere[1].names.length; i++) {
    console.log(unsereHaustiere[1].names[i]);
}