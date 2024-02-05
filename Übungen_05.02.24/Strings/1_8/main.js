const text = "Sam is going to school";

// Erstes Ergebnis: SAM is going to SCHOOL
let result1 = text.slice(0, 3).toUpperCase() + text.slice(3, 15).toLowerCase() + text.slice(15, 22).toUpperCase();
console.log(result1);

// Zweites Ergebnis: sam IS GOING TO school
let result2 = text.slice(0, 3).toLowerCase() + text.slice(3, 15).toUpperCase() + text.slice(15, 22).toLowerCase();
console.log(result2);

// Drittes Ergebnis: Sam Is Going To School
let result3 = text.slice(0, 1).toUpperCase() + text.slice(1, 3).toLowerCase() //Sam
+ text.slice(3, 5).toUpperCase() + text.slice(5, 7).toLowerCase() //Is
+ text.slice(7, 8).toUpperCase() + text.slice(8, 13).toLowerCase() //Going
+ text.slice(13, 14).toUpperCase() + text.slice(14, 16).toLowerCase() //To
+ text.slice(16, 17).toUpperCase() + text.slice(17, 22).toLowerCase() //School
console.log(result3);

document.querySelector("#one").innerHTML = text.toUpperCase();
document.querySelector("#two").innerHTML = text.toLowerCase();
document.querySelector("#three").innerHTML = result1;
document.querySelector("#four").innerHTML = result2; 
document.querySelector("#five").innerHTML = result3;

