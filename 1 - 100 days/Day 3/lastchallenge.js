/*

CHALLENGE #4
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Create an array called bills containing all 10 test bill values.

Create empty arrays for the tips and the totals (tips and totals)

Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

BONUS:

Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

Call the function with the totals array.

👋 OPTIONAL: You can watch my solution in video format in the next lecture

*/


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []



const calcTip = function (bill) {
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    const total = bill + tip
    totals.push(total)
    tips.push(tip)
}

for (let ulang = 0; ulang < bills.length; ulang++){
    calcTip(bills[ulang])
}

console.log(tips)
console.log(totals)
console.log(bills)
console.log(bills.length)

const calcAverage = function () {
    let sum = 0;
    for (let ulang = 0; ulang < totals.length; ulang++){
        sum = sum + totals[ulang]
    }
    const average = sum/totals.length;
    return average
}

console.log(calcAverage())


//last challenge 2

const data1 = [17, 21, 23]
const data2 = [12, 5, -5, 0, 4]

console.log(`... ${data1[0]} C ... ${data1[1]} C ... ${data1[2]} C ...`)

const printForecast = function(arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++){
        str = str + `${arr[i] } C in ${i + 1} days..., `;
    }
    console.log('...' + str)
}

printForecast(data1)