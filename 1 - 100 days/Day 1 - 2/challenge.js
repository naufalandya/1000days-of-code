/*
CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

Your task is to write some code to help them:

Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

Log the value of BMIMark and BMIJohn to the console.

BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.



👋 OPTIONAL: You can watch my solution in video format in the next lecture
*/

let massMark= 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
const BMIMark = massMark / (heightMark * heightMark)
const BMIJohn = massJohn / (heightJohn * heightJohn)

const markHigherBMI = BMIMark > BMIJohn
console.log(BMIMark, BMIJohn, markHigherBMI)

/*




CHALLENGE #2

There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:

1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

2. Compare the team's average scores to determine the winner of the competition, and print to the console:

"Dolphins win the trophy" if Dolphins win, or

"Koalas win the trophy" if Koalas win, or

"Both win the trophy" if their average scores are equal.



TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.


👋 OPTIONAL: You can watch my solution in video

*/

const scoreDolphins = (96 + 108 + 89)/3
const scoreKoalas = (88 + 91 + 110)/3

if (scoreDolphins === scoreKoalas){
    console.log("Both win the trophy")
} else if (scoreDolphins < scoreKoalas){
    console.log("Koalas win the trophy")
} else if (scoreKoalas < scoreDolphins){
    console.log("Dolphins win the trophy")
} else {
    console.log("Data type is not valid")
}

/*
CHALLENGE #3
Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

Your tasks:

Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

Example: The bill was 275, the tip was 41.25, and the total value 316.25.

Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

TEST DATA: Test with different bill values: 275, 40, and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

👋 OPTIONAL: You can watch my solution in video format in the next lecture
*/
const bill = 275
const tip = bill >= 50 && bill <= 300 ? bill*15/100 : bill*20/100
const finalvalue = bill + tip
console.log(finalvalue)