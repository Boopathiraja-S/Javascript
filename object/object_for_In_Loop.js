// object decaration:
const obj = {
    number: 5,
    string: "Hello",
    function: function insideObj(values) {
        console.log(values);
    },
    boolean: true
};
obj.function(55); // inside function ( insideObj(values) )
// for in loop implementation:   best for implement the object by using (for in loop)
console.log("for in loop : ");
for (let key in obj) {
    console.log(key, obj[key]);
};
obj.function(1000); // call an obj inside function redeclared value
console.log();     //  just for space between (for in loop) and (for of loop)

/*
output:
    number 5
    string Hello
    function [Function: insideObj]
    boolean true
    1000
*/

// for of loop implementation:
console.log("for of loop : ")
for (let val of Object.entries(obj)) {  // just to know how to implement object with (for of loop)
    console.log(val);
};

/* 
output:
    [ 'number', 5 ]
    [ 'string', 'Hello' ]
    [ 'function', [Function: insideObj] ]
    [ 'boolean', true ]
*/

for (key of Object.keys(obj)){
    console.log(key); 
}
/*
output:
    number
    string
    function
    boolean
*/