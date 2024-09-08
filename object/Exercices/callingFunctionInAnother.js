function static() {
    return {
        a: "a",
        b: "b",
        c: 2,
        d: true
    };
}

function call(call1) {
    let call0 = static(); // call0 is assigned the object returned by static()
    console.log(call0); // Logging the object
    // Optionally, you can use call1 if needed within this function
}

// Calling the call function
call();
