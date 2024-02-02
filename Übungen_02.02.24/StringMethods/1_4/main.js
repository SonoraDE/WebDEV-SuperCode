let A = 'Susi is going to codingschool';
let B = A.slice(0, 4);
let C = A.slice(5, 7);
let D = A.slice(5, 17);
let D2 = A.slice(23, 29)
let F = A.slice(1);

console.log(B);
console.log(C);
console.log(D + D2);
console.log(D2);
console.log(B + " " + C + " " + D2);

document.querySelector("#content").innerHTML = B + "<br/>" + C + "<br/>" + D + D2 + "<br/>" + D2 + "<br/>" + B + " " + C + " " + D2;