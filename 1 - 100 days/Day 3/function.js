function inifungsisaya(){
    console.log("Nama gue Andya")
}

inifungsisaya()

function inibuah(apel, jeruk){
    console.log(apel, jeruk)
    const jus = `ini jus apel ada ${apel} tapi kalo jeruk ada ${jeruk}`
    return jus
}

inibuah(7,  9);
let ambilvalue1 = inibuah(7,  9);
console.log(ambilvalue1)
let ambilvalue2 = inibuah(2,  6);
console.log(ambilvalue2)


//declaration
function itungUmur(tahunlahir){
    let tahunini = 2023
    const umur = tahunini - tahunlahir
    return umur
}

const umursaya = itungUmur(2002);
console.log(umursaya)

//expression
const itungjajan = function (uanggue){
    const ongkos = 2000
    const jajan = uanggue - ongkos
    return jajan
}

const ambiljajan = itungjajan(5000)
console.log(ambiljajan)


//contoh lain

// 1. Basic function
function greet(name) {
    return "Hello, " + name + "!";
}

// 2. Function with default parameter
function multiply(a, b = 2) {
    return a * b;
}

// 3. Function with multiple parameters
function addNumbers(x, y) {
    return x + y;
}

// 4. Function with no parameters
function sayHello() {
    return "Hello!";
}

// 5. Function with a callback
function performOperation(a, b, callback) {
    return callback(a, b);
}

// 6. Function with a conditional statement
function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// 7. Function with a loop
function printNumbers(n) {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

// 8. Function with a local variable
function calculateSquareArea(side) {
    let area = side * side;
    return area;
}

// 9. Function with a return statement
function subtract(a, b) {
    return a - b;
}

// 10. Function with rest parameters
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

// 11. Function with a try-catch block
function divide(x, y) {
    try {
        if (y === 0) {
        throw new Error("Cannot divide by zero");
        }
        return x / y;
    } catch (error) {
        console.error(error.message);
    }
}

// 12. Function with recursion
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// 13. Function with a switch statement
function dayOfWeek(dayNumber) {
    switch (dayNumber) {
        case 1:
        return "Monday";
        case 2:
        return "Tuesday";
        // ... (continue for other days)
        default:
        return "Invalid day";
    }
}

// 14. Function with a closure
function outerFunction(x) {
    function innerFunction(y) {
        return x + y;
    }
    return innerFunction;
}

// 15. Function with a this keyword
function Car(make, model) {
    this.make = make;
    this.model = model;
    this.displayInfo = function () {
        return this.make + " " + this.model;
    };
}

// 16. Function with a prototype method
Car.prototype.startEngine = function () {
    return "Engine started!";
};

// 17. Function with a callback and setTimeout
function delayedGreeting(name, callback) {
    setTimeout(function () {
        callback("Hello, " + name + "!");
    }, 1000);
}

// 18. Function with destructuring assignment
function getPersonInfo(person) {
    const { name, age, city } = person;
    return `${name} is ${age} years old and lives in ${city}.`;
}

// 19. Function with a Map
function squareMap(numbers) {
    return numbers.map(function (num) {
        return num * num;
    });
}

// 20. Function with a Promise
function fetchData(url) {
    return new Promise(function (resolve, reject) {
        // Fetch data from the URL and resolve/reject the promise
    });
}

// 21. Function with a generator
function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

// 22. Function with a memoization technique
function memoize(fn) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        } else {
        const result = fn(...args);
            cache[key] = result;
        return result;
        }
    };
}

// 23. Function with the bind method
const person = {
    name: "John",
    sayHello: function () {
        return "Hello, " + this.name + "!";
    },
};

const greetJohn = person.sayHello.bind(person);

// 24. Function with a higher-order function
function multiplyBy(factor) {
    return function (number) {
        return number * factor;
    };
}

// 25. Function with the map method and arrow function
function squareMapArrow(numbers) {
    return numbers.map((num) => num * num);
}

// 26. Function with a try-catch block for asynchronous code
async function fetchDataAsync(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error.message);
    }
}

// 27. Function with a closure and counter
function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

// 28. Function with the reduce method
function concatenateStrings(strings) {
    return strings.reduce((result, str) => result + str, "");
}

// 29. Function with destructuring and default parameters
function printPersonInfo({ name = "Anonymous", age = 0 }) {
    console.log(`Name: ${name}, Age: ${age}`);
}

// 30. Function with the every method
function areAllPositive(numbers) {
    return numbers.every((num) => num > 0);
}

// 31. Function with the some method
function hasNegativeNumber(numbers) {
    return numbers.some((num) => num < 0);
}

// 32. Function with the filter method
function filterEvenNumbers(numbers) {
    return numbers.filter((num) => num % 2 === 0);
}

// 33. Function with a recursive setTimeout
function countdown(seconds) {
    if (seconds > 0) {
        console.log(seconds);
        setTimeout(() => countdown(seconds - 1), 1000);
    } else {
        console.log("Countdown complete!");
    }
}

// 34. Function with a rest parameter and spread operator
function mergeArrays(...arrays) {
    return [].concat(...arrays);
}

// 35. Function with the find method
function findFirstEven(numbers) {
    return numbers.find((num) => num % 2 === 0);
}

// 36. Function with async/await and Promise.all
async function fetchDataFromMultipleSources(urls) {
    const promises = urls.map((url) => fetch(url).then((response) => response.json()));
    return await Promise.all(promises);
}

// 37. Function with a proxy
const handler = {
    get: function (target, prop) {
        return prop in target ? target[prop] : "Property not found";
    },
};

const proxyObject = new Proxy({ name: "John" }, handler);

// 38. Function with a recursive deep clone
function deepClone(obj) {
if (obj === null || typeof obj !== "object") {
    return obj;
}

const cloned = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloned[key] = deepClone(obj[key]);
        }
    }
    return cloned;
}

// 39. Function with the Array.from method
function convertToArray(string) {
    return Array.from(string);
}

// 40. Function with the Intl.DateTimeFormat object
function formatDateTime(date) {
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
}
