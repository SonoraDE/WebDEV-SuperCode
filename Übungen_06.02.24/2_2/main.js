function numberQuiz() {
    let randomNumber = Math.ceil(Math.random() * 10);
    console.log(randomNumber);
    checkNumber = prompt('Du musst eine Zahl zwischen 1 und 10 erraten!', '');
    if (checkNumber != randomNumber) {
    alert('Du hast falsch geraten, tut mir leid!');
    } else {
    alert('Du hast richtig geraten! Glückwunsch!');
    }
}

numberQuiz();
