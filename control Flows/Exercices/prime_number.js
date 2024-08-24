var find_prime = function (number) {
    if (number <= 1) {
        console.log(number + " is not a prime number");
        return;
    }
    for (let iteration = 2; iteration < number; iteration++) {
        if (number % iteration === 0) {  // it's verify the given number is devisible by between (2 and before the number)
            console.log(number + " is not a prime number");
            return;
        }
    }
    console.log(number + " is a prime number");  // else statement
}

var a = find_prime;
var s = a;

a(5);
s(12);
s(9); 
