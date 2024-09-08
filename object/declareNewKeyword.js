function val(value, string) {
    // return {
    //     value,
    //     string
    // }
    this.value = value,
    this.string = string
};
const without_new = val(123, "zero");  // without new keyword we didn't access the function which contain an object
console.log(without_new)              //  so this output is undefined when we use {this} keyword

const Value = new val(55, 'first');  // in this statement we call the object iside of values 
console.log(Value.value);
console.log(Value.string);

const Value1 = new val(56, "second"); // in this statement we call entier object statement
console.log(Value1);

console.log("................................... ");  // for space

function reval(num, name) {
    this.num = num
    this.name = name
};
const reval1 = new reval(10, "Boopathiraja");
  //  without built-in function we did not able to iterate object { using for of loop }
 //   vist ( object_for_in_Loop.js ) file for more information
//    without built-in function we can iterate Object using { for in loop }
console.log(reval1);
for (let i in reval1) {
    console.log(i, reval1[i]);
};