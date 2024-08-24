function max_of_two(number1, number2) {
    return (
        number1 > number2 ?
        number1 + ", number 1 is max" : // it return which number is max
        number2 + ", number 2 is max"
    );
}
console.log(max_of_two(2, 3));
let max = max_of_two(6, 5);
console.log(max);
let s = max_of_two;
console.log(s(8, 6));