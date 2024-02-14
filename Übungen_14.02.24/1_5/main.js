let clickUp = 0;
const clickMe = document.querySelector("#clickMe");

clickMe.addEventListener("click", () => {
    clickMe.innerHTML = `Click me: ${++clickUp}`;
});
