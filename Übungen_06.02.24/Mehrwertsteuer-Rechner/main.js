function getTax() {
    const taxUpOrDown = Number(document.querySelector("input[name=mwst-radio]:checked").value);
    const getTax = Number(document.querySelector("input[name=prozent-radio]:checked").value);
    const inputValue = Number(document.querySelector("#input").value);
    let taxValue = 0;
    let resultValue = 0;
    
    if(inputValue === 0) {
        alert("Bitte gib etwas ein bevor du berechnest!"); 
        return;
    }

    if(taxUpOrDown === 1) {
        if(getTax === 1) {
            taxValue = inputValue * 0.19
        } else {
            taxValue = inputValue * 0.07
        }
        resultValue = inputValue + taxValue;
    } else {
        if(getTax === 1) {
            taxValue = inputValue / 1.19 * 0.19
        } else {
            taxValue = inputValue / 1.07 * 0.07
        }
        resultValue = inputValue - taxValue;
    }
    document.querySelector("#mwst-betrag").innerHTML = taxValue.toFixed(2);
    document.querySelector("#result-value").innerHTML = resultValue.toFixed(2); 
}
