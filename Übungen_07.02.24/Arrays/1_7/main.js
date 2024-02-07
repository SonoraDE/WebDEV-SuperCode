const person = ["Javascript", "24 Jahre", "Wuppertal"];
const friends = ["Izel", "Stefan", "Reazy"];
const favoriteFood = ["Lasagne", "Pizza", "Chilli-Cheese-Nuggets"];

person.unshift("Gaming","CSS");
favoriteFood.unshift("Mia","Zied");
friends.unshift("Burger","Pasta");

console.table(person); 
console.table("Hinzugefügt " + person[0],person[1]);
console.table(friends);
console.table("Hinzugefügt " + friends[0],friends[1]);
console.table(favoriteFood);
console.table("Hinzugefügt " + favoriteFood[0],favoriteFood[1]);


