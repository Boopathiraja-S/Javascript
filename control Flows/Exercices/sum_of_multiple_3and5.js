function sum_of_multiple_of_3_5(limit) {
    sum = 0;
    for (i = 0; i <= limit; i++) {
        if ((i % 3 === 0) || (i % 5 === 0)) {
            sum += i;  // it return which numbers are multiple of the 3 and 5 to the limit
                      //  and add those numbers and return the sum of all numbers
        }            //   3:(3,6,9,...) and 5:(5,10,15,...)
    }
    console.log(sum);
}
sum_of_multiple_of_3_5(10)
sum_of_multiple_of_3_5(20)

/* 
Here is a smart idea to do with this code in a diffrent way, get two input from the user, 
for replace of 3 and 5. and also get the limit set it to the limit.
so totaly we want 3 input from the user (1st one for replacement of 3), (2nd one for replacement of 5) and 
(3rd one for the set the limit to iterate the for loop...)
*/