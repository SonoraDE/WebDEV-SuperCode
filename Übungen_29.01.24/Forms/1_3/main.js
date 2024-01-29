function getAge(event) {
    const ageOne = document.querySelector("#age1").value;
    const ageTwo = document.querySelector("#age2").value;

    let ageDifference = ageOne - ageTwo;

    if(ageTwo > ageOne){
        ageDifference = ageTwo - ageOne;
    }
    
    document.querySelector("#altersunterschied").innerHTML = "Die Differenz beträgt " + ageDifference + " Jahre.";
}