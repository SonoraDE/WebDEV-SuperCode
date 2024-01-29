function getAge(event) {
    event.preventDefault();

    const myAge = document.querySelector("#age").value;
    const ageErgebnis = 2024 - myAge;

    document.querySelector("#Ergebnis").innerHTML = "Du bist " + ageErgebnis + " Jahre alt.";
    //console.log(myAge);
}