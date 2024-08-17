const datetry = new Date();
console.log(datetry);

const date = new Date();  // In javascript Date() is a built-in-function
console.log(date.toString());
// toString() Gives the output Date format as to bassed on our current location

const date1 = new Date("Jul 15 2024 6:42");  // format-1
console.log(date1.toString());

const date2 = new Date(2024, 4, 11, 18)  //format-2
console.log(date2)
console.log(date.setFullYear(2024));

let date0 = new Date();  // Creates a new Date object with the current date and time
let timestamp = date0.setFullYear(2024);  // Sets the year to 2024 and returns the timestamp
console.log(timestamp);  // Outputs the timestamp

// There is a lot of methods in Date() constructor practice it with the help of Google