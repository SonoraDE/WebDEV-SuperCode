function checkAge() {
    let age = document.querySelector("#inputAge").value;

    document.querySelector("#result").innerHTML = age >= 18 ? "Du bist volljährig" : "Du bist minderjährig";
}
