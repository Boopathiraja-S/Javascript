//  if we declare one function and inside of the function we can declare the object
//  and we can modify n number of times it's called function factory

function factory(declare_Object) {
    return {
        declare_Object,
        inside_Function(key, value) {
            return {
                key,
                value
            };
},
    }
}
// object1
let declare_Object1 = factory("Iam the Object1 Now you see I am declared");
console.log(declare_Object1);
console.log(declare_Object1.inside_Function(1, "Hello Iam one"));


// object2
let declare_Object2 = factory("Iam the Object2 Now you see I am declared");
console.log(declare_Object2);
console.log(declare_Object2.inside_Function(2, "Hello Iam Two"));