const color1 = document.querySelector("#grauTaste");
const color2 = document.querySelector("#weissTaste");
const color3 = document.querySelector("#blauTaste");
const color4 = document.querySelector("#gelbTaste");
const body = document.querySelector("body");


color1.addEventListener("click", () => {
    body.style.backgroundColor = "grey";
});
color2.addEventListener("click", () => {
    body.style.backgroundColor = "white";
});
color3.addEventListener("click", () => {
    body.style.backgroundColor = "blue";
});
color4.addEventListener("click", () => {
    body.style.backgroundColor = "yellow";
});


