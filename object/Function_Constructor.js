function Constructor(value) {
    this.value = value;
    this.functionDeclaration = function () {
        console.log("Iam inside of a function");
    }
}
const another = new Constructor(5);  // new is created a new empty object and (this) keyword return the value of key
console.log(another);               //  inside the new object
// Constructor.functionDeclaration;