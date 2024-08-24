const object = {
    name: "Boopathiraja S",
    age: 21,
    status: "Nothing",
    number: 10
};
function toFindString(ob) {
    for (key in ob) {
        if (typeof (ob[key]) === "string")  // if you want the number then replace ( number instead of string )
            console.log(key, " : ", ob[key]);
    };
};
toFindString(object);
