const text = "Sam is good at codingschool"

const String1 = "Sam is bad at school";
const String2 = "Sam is good at school";
const String3 = "Sam is good at tennis";

document.querySelector("h1").innerHTML = text.replace(text, String1);
document.querySelector("h2").innerHTML = text.replace(text, String2);
document.querySelector("h3").innerHTML = text.replace(text, String3);