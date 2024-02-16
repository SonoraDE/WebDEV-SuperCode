const person = {
    name: "Tobias",
    alter: 25,
    sagNameAlter: function() {
        alert(`Hallo mein Name ist ${person.name} ich bin ${person.alter} Jahre.`);
        console.log(`Hallo mein Name ist ${person.name} ich bin ${person.alter} Jahre.`);
    },
};

person.sagNameAlter();