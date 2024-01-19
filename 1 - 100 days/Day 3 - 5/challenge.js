/*
CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. 

Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.
Ignore draws this time. Instead, log No team wins... to the console if there is no winner.
TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
👋 OPTIONAL: You can watch my solution in video format in the next lecture
*/


const calcAverage = (score1, score2, score3) => {
    const averageall = (score1 + score2+ score3)/3;
    return averageall;
}

const scoreDolphins = calcAverage(44, 23, 71)
const scoreKoalas = calcAverage(100, 50, 100)

console.log(scoreDolphins)
console.log(scoreKoalas)

const checkWinner = function (scoreDolphins, scoreKoalas) {
    if (scoreDolphins >= 2 * scoreKoalas) {
        console.log("Dolphin Team Wins");
    } else if (scoreKoalas >= 2 * scoreDolphins) {
        console.log("Koalas Team Wins");
    } else {
        console.log("No Team Wins");
    }
}

checkWinner(scoreDolphins, scoreKoalas);

/*


CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.
*/

const calcTip = function (billValue){
    if (billValue <= 300 && billValue >= 50){
        return 0.15 * billValue
    } else {
        return 0.20 * billValue 
    }
}

const bills = [125, 555, 44]
const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(bills, tip)

const totals =[bills[0] + bills[1] + bills[2]]
console.log(bills, tip, totals)

/*

CHALLENGE #3
Let's go back to Mark and John comparing their BMIs!

This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

Your tasks:

For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property, and also return it from the method.

Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.



👋 OPTIONAL: You can watch my solution in video format in the next lecture



IMPORTANT: The ** operator is not supported in this editor. Please make sure to use exactly this formula mass / (height * height), and not this one mass / (height ** 2).
*/

const Mark = {
    firstName: "Mark",
    lastname : "Miller",
    mass : 78,
    height : 1.69,
    calcBMI : function(){
        const BMI = this.mass / (this.height * this.height)
        return BMI
    }
}

const John = {
    firstName: "John",
    lastname : "Smith",
    mass : 92,
    height : 1.95,
    calcBMI : function(){
        const BMI = this.mass / (this.height * this.height)
        return BMI
    }
}

const higherBMI = function(){
    if(Mark.calcBMI() > John.calcBMI()){
        console.log(`${John.firstName + " " + John.lastname}'s BMI (${John.calcBMI()}) is lesser than ${Mark.firstName + " " + Mark.lastname}'s (${Mark.calcBMI()})`)
    } else {
        console.log(`${John.firstName + " " + John.lastname}'s BMI (${John.calcBMI()}) is higher than ${Mark.firstName + " " + Mark.lastname}'s (${Mark.calcBMI()})`)
    }
}

higherBMI();





