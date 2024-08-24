function print_primes(limit) {
    for (let number = 2; number <= limit; number++) {
        let isprime = true;
        for (let factor = 2; factor < number; factor++) {
            if (number % factor === 0) {
                isprime = false;
                break;
            }
        }
        if (isprime === true) {
            console.log(number);
        }
    }
}
print_primes(20);