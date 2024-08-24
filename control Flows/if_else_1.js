// if hour between 6 and 12 good morning
// if hour between 12 and 18 good afternoon
// else good evening
let hour = 12
if (hour >= 6 && hour < 12) {
    console.log("Good morning")
}
else if (hour >= 12 && hour < 18) {
    console.log("Good afternoon")
}
else {
    console.log("Good evening")
}
