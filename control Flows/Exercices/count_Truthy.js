function CountTruthy(array) {
    let count = 0;
    for (value of array)       // value is a built-in-function that checks only true values 
        if (value) count++;   //  make note the 0 is not true value it's a false that is ain't countable 
    return count;
}
const array1 = [1, 2, 3, null, 0, undefined];
const CountTruthy1 = CountTruthy(array1);
console.log(CountTruthy1);