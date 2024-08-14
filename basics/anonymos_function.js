// anonymos function :
var s = function (x, y) {
    return x * y
}
var a = s
console.log(s(5, 4))
console.log(a(3, 2))
console.log(s(8, 2))

// arrow function :
var s = (a, b) => a + b
var b = s
console.log(s(10, 5))
console.log(s(1, 1))
