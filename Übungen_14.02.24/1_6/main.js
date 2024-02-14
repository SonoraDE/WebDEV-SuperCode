const change = document.querySelector("#select-input");
let para = document.querySelector("#para");

    change.addEventListener("change", () => {
        changeEvent();
    });

const changeEvent = () => {
    let option = document.querySelector("#select-input").value;
    para.innerHTML = `Du hast ${option} ausgewählt.`;
}

changeEvent();