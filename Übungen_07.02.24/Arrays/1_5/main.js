const person = ["Javascript", "24 Jahre", "Wuppertal"];
const friends = ["Izel", "Stefan", "Reazy"];
const favoriteFood = ["Lasagne", "Pizza", "Chilli-Cheese-Nuggets"];

const deletePerson = person.pop(person[1]);
const deleteFood =  favoriteFood.pop(friends[2]);
const deleteFriends =  friends.pop(favoriteFood[3]);

console.table(person);
console.log(deletePerson);
console.table(friends);
console.log(deleteFriends);
console.table(favoriteFood);
console.log(deleteFood);


