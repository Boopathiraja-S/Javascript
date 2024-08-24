function find_Odd_Or_Even(number) {
    for (i = 0; i <= number; i++) {
        console.log(i, (i % 2 !== 0) ? "Odd" : "Even")
    }
}
find_Odd_Or_Even(10);