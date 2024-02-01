function checkPW() {
    let password = document.querySelector("#inputPW").value;
    console.log(`${password} ${password.length}`);
    document.querySelector("#result").innerHTML = password.length >= 8 ? "Das Passwort ist sicher" : "Das Passowrt ist nicht sicher genug!";
}