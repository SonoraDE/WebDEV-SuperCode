function checkInput() {
    let valueOne = document.querySelector("#input-one").value;
    let valueTwo = document.querySelector("#input-two").value;
    let checked = document.querySelector('input[name="radio"]:checked').value;

    let cut = valueOne .indexOf(valueTwo);
    let cutPosition = cut + valueTwo.length;

    if(checked === "1") {
        document.querySelector("#ausgabe-one").innerHTML = valueOne.slice(0, cut);
        document.querySelector("#ausgabe-two").innerHTML = valueOne.slice(cut); 
    } else {
        document.querySelector("#ausgabe-one").innerHTML = valueOne.slice(0, cutPosition);
        document.querySelector("#ausgabe-two").innerHTML = valueOne.slice(cutPosition); 
    }
}

