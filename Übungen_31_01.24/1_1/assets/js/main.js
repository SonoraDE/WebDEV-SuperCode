function checkAge() {
    const age = document.querySelector("#inputAge").value;
    //console.log(age); //CHECK

    if(age === 18 || age >= 18) {
        document.querySelector("#alter").innerHTML = "Volljährig";
    } else {
        document.querySelector("#alter").innerHTML = "Minderjährig";
    }
}