let i= 1;
while (i <= 10) {
    if (i % 2 === 0) {  // it prints odd numbers because of the continue statement
        i++;
        continue;
    }
    console.log(i);
    i++;
}