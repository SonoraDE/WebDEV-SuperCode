const taxCalculator = (event) => {
    event.preventDefault();
    const input = document.querySelector("#betrag").value;
    const percentage = document.querySelector(
      "input[name=percent]:checked"
    ).value;
    const mwstBetrag = document.querySelector(".mwst-betrag");
    const endBetrag = document.querySelector(".end-betrag");
    const brutNet = document.querySelector(
      "input[name='brutto-netto']:checked"
    ).value;
    const error = document.querySelector(".error");
    console.log(input.length);
  
    if (input.length > 0) {
      error.innerHTML = " ";
      if (brutNet == "netto-to-brutto") {
        if (percentage === "nineteen") {
          let result = input * 1.19;
          endBetrag.innerHTML = result.toFixed(2);
          let diff = result - input;
          mwstBetrag.innerHTML = diff.toFixed(2);
        } else {
          let result = input * 1.07;
          endBetrag.innerHTML = result.toFixed(2);
          let diff = result - input;
          mwstBetrag.innerHTML = diff.toFixed(2);
        }
      } else {
        if (percentage === "nineteen") {
          let result = input / 1.19;
          endBetrag.innerHTML = result.toFixed(2);
          let diff = input - result;
          mwstBetrag.innerHTML = diff.toFixed(2);
        } else {
          let result = input / 1.07;
          endBetrag.innerHTML = result.toFixed(2);
          let diff = input - result;
          mwstBetrag.innerHTML = diff.toFixed(2);
        }
      }
    } else {
      error.innerHTML = "Bitte geben Sie einen Betrag ein!";
    }
  };
  
  // Brutto to netto and otherway around change function
  const change = () => {
    const brutNet = document.querySelector(
      "input[name='brutto-netto']:checked"
    ).value;
  
    const labelBrut = document.querySelector('label[for="betrag"]');
    const endbetrag = document.querySelector(".endbetrag");
    console.log(labelBrut);
  
    if (brutNet == "brutto-to-netto") {
      labelBrut.innerHTML =
        "Bruttobetrag (Preis mit Mehrwertsteuer) in Euro <span>*</span>";
      endbetrag.innerHTML = "Nettobetrag";
    } else {
      labelBrut.innerHTML =
        "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro <span>*</span>";
      endbetrag.innerHTML = "Bruttobetrag (Endpreis)";
    }
  };