const obj = {
    number: 5,
    string: "Hello",
    function_call: function insideObj(values) {
        console.log("insideObj value =", values);
    },
    boolean: true
};

obj.function_call(25); // inside function { insideObj(values) }

// clone an object by using (for in loop)
console.log("for in loop : ");
const clone = {};
for (let key in obj) {
    clone[key] = obj[key]
}
console.log(clone);
console.log();

// in this (Object.assign) method we can add properties into an object unlimitedly
console.log("Object.assign Method : ");
const cloneObj1 = Object.assign({name:"Boopathiraja S"},obj, {color: "Red", value: 888});
console.log(cloneObj1);
console.log();

// spread is good to implement more easy
// in this {...obj} (spread operator) this operator is more flexible and we can also add new properties too like assign
console.log("spread operator : ")
const cloneObj2 = {key:"Batman", ...obj, name:"Boopathiraja", color:"Black", value: 10};
console.log(cloneObj2);