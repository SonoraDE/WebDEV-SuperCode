const selectMenu = document.querySelector("#farbeAuswahlen");
const removeColor = document.querySelector("#button");
let index = 0;

selectMenu.addEventListener("change", () => {
    index = selectMenu.selectedIndex;
});

removeColor.addEventListener("click", () => {
    selectMenu.remove(index);
});