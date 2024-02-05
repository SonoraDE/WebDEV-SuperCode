const findWords = () => {
    let textInput = document.querySelector("#search-input").value;
    let content = document.querySelector("article").innerText;

    let textReplace = "<span style = 'font-weight: 800'>" + textInput + "</span>";

    let result = content.replaceAll(textInput, textReplace);
    document.querySelector("article").innerHTML = result;


}