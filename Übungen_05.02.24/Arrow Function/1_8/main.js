const age = (yearBorn) => {
    return 2024 - yearBorn;
}
console.log(age(1999));

//VERGLEICH MIT VARIABLE
const otherAge = (ageOne, ageTwo) => {
    let alterDiff = ageOne - ageTwo;
    return alterDiff;
}

console.log(otherAge(37,25)); 

//VERGLEICH OHNE VARIABLE
const otherAge2 = (ageOne, ageTwo) => {
    return ageOne - ageTwo;
}

console.log(otherAge2(37,30));

//TERNARY BONUS
const otherAge3 = (ageOne, ageTwo) => {
    return ageOne <= ageTwo ? ageTwo - ageOne : ageOne - ageTwo;
}

console.log(otherAge3(30,40));

