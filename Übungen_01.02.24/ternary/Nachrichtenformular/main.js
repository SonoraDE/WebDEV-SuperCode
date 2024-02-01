function sendMessage() {
    message = document.querySelector("#input").value;
    document.querySelector("#lastMessage").innerHTML = message.length >= 1 ? message : "Du musst etwas eingeben!";
}