// function Average_Calculator(array) it's reuseable  see line 21 it's there
function find_Grade(marks) {
    const average = Average_Calculator(marks);
    if (average < 60) {
        return "F";
    }
    else if (average < 70) {
        return "D";
    }
    else if (average < 80) {
        return "C";
    }
    else if (average < 90) {
        return "B";
    }
    return "A";
}
console.log(find_Grade([80, 80, 50]));


function Average_Calculator(array) {
    let sum = 0;
    for (let value of array) {
        sum += value;
    }
    ave = (sum / array.length);
    return ave;
}
