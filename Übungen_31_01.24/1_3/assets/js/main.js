function checkAge() {
    const age = document.querySelector("#inputAge").value;
    //console.log(age); //CHECK

    if(age === 18 || age >= 18) {
        document.querySelector("#alter").innerHTML = "Du darfst Shisha rauchen!";
    } else {
        document.querySelector("#alter").innerHTML = "Du darfst noch keine Shisha rauchen!";
    }
}