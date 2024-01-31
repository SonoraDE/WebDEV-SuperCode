function checkDifference(number) {
    const fixNumber = 27;
    let difference = number - fixNumber;
    let ergebnis = 0;

    if(number > fixNumber) {
        ergebnis = difference * 2;
    } else {
        ergebnis = fixNumber - number;
    }
    console.log(ergebnis);
}

checkDifference(12);
checkDifference(35);
checkDifference(74);
checkDifference(123);