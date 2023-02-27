function weekday(x) {
    if ( x == 0) {
        console.log("Sunday")
    }
    else if (x == 1 ) {
        console.log("Monday")
    }
    else if (x == 2 ) {
        console.log("Tuesday")
    }
    else if (x == 3 ) {
        console.log("Wednesday")
    }
    else if (x == 4 ) {
        console.log("Thursday")
    }
    else if (x == 5 ) {
        console.log("Friday")
    }
    else if (x == 6 ) {
        console.log("Saturday")
    }
    else {
        console.log("No such day of the week")
    }
}
function between0and1(y) {
    if  (y > 0 && y < 1) {
        console.log("The given number is between 0 and 1")
    }
    else {
        console.log("The given number isn't between 0 and 1")
    }
}
function sum_squares(a, b) {
 var ss = a**2 + b**2;
 console.log(ss)
}
function main() {
    weekday (3);
    between0and1(0.5);
    sum_squares(6, 8);
}