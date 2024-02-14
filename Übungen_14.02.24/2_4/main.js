buttonClick = document.querySelector("#button");
chooseColor = document.querySelector("#farbeAuswahlen");
bodyColor = document.querySelector("body");

const changeColor = () => {
    buttonClick.addEventListener("click", () => {
        const index = chooseColor.selectedIndex;
        const options = chooseColor.options;
        const result = options[index].text;
        const finishColor = result.toLowerCase().replace(" ", "")
        bodyColor.style.backgroundColor = finishColor;
    });
}

changeColor();
