function Declare(Name, Age, Id) {
    return {
        Name,
        Age,
        Id
    };
}
const person1 = Declare("Luffy", 19, "King")
const person2 = Declare("Luffy", 19, "King")                    //Declare("Zoro", 21, "Swordsman")
// console.log(person1);
// console.log(person2);
function areSame() {
    return person1 === person2;    // this checks if the objects are same its not same so return false
}
console.log(areSame(person1,person2));

function areEqual() {
    return (person1.Name === person2.Name && person1.Age === person2.Age && person1.Id === person2.Id);
    // this checks if the key values are same it's same so return true
}
console.log(areEqual(person1,person2));