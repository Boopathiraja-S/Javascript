floatNumber = 4.454323465;    // I want (4.45) like this
limitedFloatNumber = parseFloat(floatNumber.toFixed(2));
//( .toFixed(2) convert the float number to (2 limited float string) )
//  and the (parseFloat) convert that String to Float number
console.log(limitedFloatNumber);

//another way
console.log(parseFloat(3.43423423.toFixed(2)));   