function find_Grades(marks) {
    let sum = 0;
    for (let mark of marks) {
        sum += mark;
    }
    average = (sum / marks.length);
    // return average;
    if (average <= 0) {
        return (0)
    }
    else if ((average>= 1)&&(average <= 59)) {
        return ("F")
    }
    else if ((average >= 60) && (average <= 69)) {
        return ("D")
    }
    else if ((average >= 70) && (average <= 79)) {
        return ("D")
    }
    else if ((average >= 80) && (average <= 89)) {
        return ("B")
    }
    else {
        return ("A")
    }
    // return Math.floor(average);
}
const marks = [80,80,50];
console.log(find_Grades(marks))

