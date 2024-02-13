let numArr = [5, 22, 15, 100, 55];
const output = document.querySelector("#output");

const results = [];

for (let i = 0; i < numArr.length; i++) {
    const divisors = [];
    for (let j = 2; j < numArr[i]; j++) {
        if (numArr[i] % j === 0) {
            divisors.push(j);
        }
    }
    results.push("Die Zahl " + numArr[i] + " ist durch " + divisors.join(", ") + " teilbar (außer durch 1 und sich selbst).");
}

output.innerHTML = results.join("<br>");