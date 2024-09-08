function add_Delete1(value, obj) {
    obj.value = value;
    obj.one = "hello";
    obj.color = "red";
    obj.final = true;
    delete obj.value;
    obj.value = value;
}

let myObj = {};
add_Delete1(5, myObj);
console.log(myObj);
add_Delete1(6, myObj);
console.log(myObj);

// direct object addDelete method
const Add_Delete2 = {
    value: 9,
    string: "Hello",
    fun: function inside(val) {
        console.log(val);
    }
}
Add_Delete2.color = "Blue";
Add_Delete2.bool = false;
Add_Delete2.dele = "hi";
delete Add_Delete2.dele;
console.log(Add_Delete2)
Add_Delete2.fun(77);       // when we want to declare inside of object a one function we should call key not value
                          //  if it is function or anything we must call key not value if ypu call value it makes error