/* 
if (number/3) it is fizz
if (number/5) it is buzz
if (number/ both(3 and 5)) it is fizzbuzz
if (number !/ (3 and 5)) return number
if it's not a number return not a number
*/
function fizzbuzz(number) {
    if (typeof (number) !== 'number') {     // {number is also a data type}
        console.log(NaN);
    }
    else if ((number % 3 === 0) && (number % 5 === 0)) {
        console.log("fizzbuzz");
    }
    else if (number % 3 === 0) {
        console.log("fizz");
    }
    else if (number % 5 === 0) {
        console.log("buzz");
    }
    else {
        console.log(number)
    }
}
fizzbuzz(15);
fizzbuzz(6);
fizzbuzz(20);
fizzbuzz(4);
fizzbuzz("abc"); // it is a string so it return a (if-statement)
