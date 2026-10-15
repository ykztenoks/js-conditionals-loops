let volume = 50;

if (volume >= 90) {
  volume--; //volume = volume - 1
}

if (volume >= 50) {
  console.log("TURN DOWN THE VOLUME ITS TOO LOUD");
} else {
  console.log("Ok... you can turn up the volume a bit more");
}

let score = 45;
let grade;

if (score >= 90) {
  grade = "A";
} else if (score >= 80) {
  grade = "B";
} else if (score >= 70) {
  grade = "C";
} else if (score < 50) {
  grade = "you should study";
}

console.log(`Your score is ${score} and your grade will be ${grade}`);

const age = 21;
const canDrink = age >= 21 ? "yes" : "no"; //ternary operator REQUIRES ELSE statement

console.log(`your age is ${age}, can you drink? ${canDrink}`);

const day = "jupiter";
let isWeekend = false;


// RARELY USED > PREFER IF/ELSE, ternary, etc...

switch (day) {
  case "saturday":
  case "sunday":
    console.log("ITS WEEKEND!!");
    isWeekend = true;
  break;
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    console.log("not the weekend")
    isWeekend = false
    break;

    default:
        console.log("i dont think its any day of the week")
}
