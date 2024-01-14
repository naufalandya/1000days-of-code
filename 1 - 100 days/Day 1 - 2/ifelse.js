////pemeriksaan Nilai Sebuah Variabel:
let age = 25;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}


//Penanganan Dua Kasus:
let temperatur = 22;

if (temperatur < 0) {
  console.log("Freezing weather");
} else if (temperatur >= 0 && temperatur <= 20) {
  console.log("Cool weather");
} else {
  console.log("Warm weather");
}


////pemeriksaan Tipe Data: 
let valuesatu = "Hello";

if (typeof valuesatu === "number") {
  console.log("It's a number.");
} else if (typeof valuesatu === "string") {
  console.log("It's a string.");
} else {
  console.log("It's neither a number nor a string.");
}

////pemeriksaan Kondisi Boolean:
let isLogged = false;

if (isLogged) {
  console.log("Welcome, user!");
} else {
  console.log("Please log in.");
}

////pemeriksaan String Kosong:
let username1 = "";

if (username1 !== "") {
  console.log(`Hello, ${username1}!`);
} else {
  console.log("Please enter a username.");
}


////pemeriksaan Array Kosong:
let fruitsbuah = [];

if (fruitsbuah.length > 0) {
  console.log("There are fruits in the basket.");
} else {
  console.log("The basket is empty.");
}

////pemeriksaan Nilai Null atau Undefined:
let inputValue;

if (inputValue !== null && inputValue !== undefined) {
  console.log("The value is defined.");
} else {
  console.log("The value is null or undefined.");
}

//Penanganan Kasus Khusus:
let dayOfWeek = "Sunday";

if (dayOfWeek === "Saturday" || dayOfWeek === "Sunday") {
  console.log("It's a weekend!");
} else {
  console.log("It's a weekday.");
}


////pemeriksaan Bilangan Ganjil/Genap:
let numbersatu = 7;

if (numbersatu % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

//pemeriksaan Rentang Nilai: 
let scoresatu = 75;

if (scoresatu >= 90) {
  console.log("A");
} else if (scoresatu >= 80) {
  console.log("B");
} else if (scoresatu >= 70) {
  console.log("C");
} else {
  console.log("Fail");
}

//pemeriksaan Bilangan Negatif/Positif: 
let numberdua = -5;

if (numberdua > 0) {
  console.log("Positive");
} else if (numberdua < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

//pemeriksaan Tahun Kabisat:
let yearaku = 2024;

if ((yearaku % 4 === 0 && yearaku % 100 !== 0) || yearaku % 400 === 0) {
  console.log(`${yearaku} is a leap year.`);
} else {
  console.log(`${yearaku} is not a leap year.`);
}

//pemeriksaan String Case-Sensitive:
let userInput1 = "OpenAI";

if (userInput1 === "OpenAI") {
  console.log("Correct!");
} else {
  console.log("Incorrect!");
}

//Penanganan String Tanpa Memperdulikan Case:
let userInput = "OpEnAi";

if (userInput.toLowerCase() === "openai") {
  console.log("Correct!");
} else {
  console.log("Incorrect!");
}

//pemeriksaan Multiple Conditions:
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn && isAdmin) {
  console.log("Welcome, Admin!");
} else if (isLoggedIn) {
  console.log("Welcome, User!");
} else {
  console.log("Please log in.");
}

//pemeriksaan Tanggal dan Waktu: 
let currentDate = new Date();
let currentHour = currentDate.getHours();

if (currentHour < 12) {
  console.log("Good morning!");
} else if (currentHour < 18) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}

//pemeriksaan Ketersediaan Nilai: 
let valuenilai = 42;
if (valuenilai) {
  console.log(`The value is ${valuenilai}.`);
} else {
  console.log("No value available.");
}

//pemeriksaan Tipe Data dan Nilai: 
let dataku = 10;

if (typeof dataku === "number" && dataku > 0) {
  console.log("It's a positive number.");
} else if (typeof dataku === "number" && dataku < 0) {
  console.log("It's a negative number.");
} else {
  console.log("Invalid data.");
}

//pemeriksaan Kesamaan Objek: 
let user1 = { name: "John", age: 25 };
let user2 = { name: "Jane", age: 25 };

if (JSON.stringify(user1) === JSON.stringify(user2)) {
  console.log("The users are identical.");
} else {
  console.log("The users are different.");
}

//pemeriksaan Ketersediaan Properti Objek:
let personku = { name: "Alice", age: 30 };

if ("address" in personku) {
  console.log(`The address is ${personku.address}.`);
} else {
  console.log("Address not available.");
}

//pemeriksaan Bilangan Prima:
let numku = 11;
let isPrimeku = true;

for (let i = 2; i < numku; i++) {
  if (numku % i === 0) {
    isPrimeku = false;
    break;
  }
}

if (isPrimeku) {
  console.log(`${numku} is a prime number.`);
} else {
  console.log(`${numku} is not a prime number.`);
}

//pemeriksaan Kesamaan Tiga Nilai (Strict Equality): 
let value_1 = 5;
let value_2 = "5";

if (value_1 === value_2) {
  console.log("The values are equal in type and value.");
} else {
  console.log("The values are not equal in type or value.");
}

//pemeriksaan Kondisi Lainnya: 
let conditionwoi = false;

if (conditionwoi) {
  console.log("The condition is true.");
} else {
  console.log("The condition is false.");
}

//pemeriksaan Kondisi Lainnya (Alternative Syntax): 
let conditionhei = false;

if (conditionhei)
  console.log("The condition is true.");
else
  console.log("The condition is false.");

//pemeriksaan Kondisi Lainnya dengan Ternary Operator:
let conditionhoi = true;
let resulthi = conditionhoi ? "The condition is true." : "The condition is false.";
console.log(resulthi);

//pemeriksaan Kesamaan Tiga Nilai dengan Ternary Operator: 
let value__1 = 5;
let value__2 = "5";
let result__ = value__1 === value__2 ? "Equal" : "Not Equal";
console.log(result__);

//pemeriksaan Rentang Nilai dengan Ternary Operator: 
let scoresaya = 75;
let gradesaya = scoresaya >= 90 ? "A" : scoresaya >= 80 ? "B" : scoresaya >= 70 ? "C" : "Fail";
console.log(gradesaya);
//pemeriksaan Bilangan Positif/Negatif dengan Ternary Operator:


 
let numberini = -5;
let resultini = numberini > 0 ? "Positive" : numberini < 0 ? "Negative" : "Zero";
console.log(resultini);

//pemeriksaan Bilangan Ganjil/Genap dengan Ternary Operator: 
let numbercuy = 7;
let resultcuy = numbercuy % 2 === 0 ? "Even" : "Odd";
console.log(resultcuy);

//pemeriksaan String Kosong dengan Ternary Operator:
let usernamenya = "";
let greeting = usernamenya !== "" ? `Hello, ${usernamenya}!` : "Please enter a username.";
console.log(greeting);

//pemeriksaan Tahun Kabisat dengan Ternary Operator:
let year = 2024;
let leapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? "Leap" : "Not Leap";
console.log(`${year} is ${leapYear} year.`);

//pemeriksaan Bilangan Prima dengan Ternary Operator:
let num = 11;
let isPrime = num > 1 && Array.from({ length: num - 1 }, (_, i) => i + 2).every(n => num % n !== 0);
console.log(isPrime ? `${num} is a prime number.` : `${num} is not a prime number.`);

//pemeriksaan Bilangan Bulat dengan Ternary Operator:
let numberkaka = 7.5;
let resultkaka = Number.isInteger(numberkaka) ? "Integer" : "Not Integer";
console.log(resultkaka);

//pemeriksaan Tipe Data dengan Ternary Operator:
let dataheyo = "Hello";
let resultlah = typeof dataheyo === "string" ? "It's a string." : "It's not a string.";
console.log(resultlah);

//pemeriksaan Ketersediaan Properti Objek dengan Ternary Operator:
let personAh = { name: "Bob", age: 25 };
let hasAddress = "address" in personAh ? `The address is ${personAh.address}.` : "Address not available.";
console.log(hasAddress);

//pemeriksaan Kondisi Lainnya dengan Ternary Operator: 
let conditionabang = false;
let resultabang = conditionabang ? "The condition is true." : "The condition is false.";
console.log(resultabang);

//pemeriksaan Kesamaan Tiga Nilai dengan Ternary Operator: 
let value1 = 5;
let value2 = "5";
let result = value1 === value2 ? "Equal" : "Not Equal";
console.log(result);

//pemeriksaan Rentang Nilai dengan Ternary Operator:
let scorekuh = 75;
let grade = scorekuh >= 90 ? "A" : scorekuh >= 80 ? "B" : scorekuh >= 70 ? "C" : "Fail";
console.log(grade);


// 1. Kondisi Sederhana
let isTrue = true;

if (isTrue) {
  console.log("It's true!");
} else {
  console.log("It's false!");
}

// 2. Kondisi Bilangan
let number = 10;

if (number > 0) {
  console.log("Number is positive.");
} else if (number < 0) {
  console.log("Number is negative.");
} else {
  console.log("Number is zero.");
}

// 3. Kondisi String
let text = "Hello";

if (text === "Hello") {
  console.log("Greeting is Hello.");
} else {
  console.log("Greeting is not Hello.");
}

// 4. Kondisi Lebih dari Satu Statement
let condition = true;

if (condition) {
  console.log("Condition is true.");
  console.log("This statement also executes.");
} else {
  console.log("Condition is false.");
}

// 5. Kondisi Berbeda Tipe Data
let value = "5";

if (value == 5) {
  console.log("Value is equal to 5 (loose equality).");
} else {
  console.log("Value is not equal to 5 (loose equality).");
}

// 6. Kondisi Strict Equality
if (value === 5) {
  console.log("Value is equal to 5 (strict equality).");
} else {
  console.log("Value is not equal to 5 (strict equality).");
}

// 7. Kondisi Lebih dari Satu Kriteria
let score = 85;

if (score >= 90) {
  console.log("Excellent!");
} else if (score >= 70) {
  console.log("Good job!");
} else {
  console.log("Keep practicing.");
}

// 8. Kondisi Logika AND
let x = 5;
let y = 10;

if (x > 0 && y > 0) {
  console.log("Both x and y are positive.");
} else {
  console.log("At least one of them is not positive.");
}

// 9. Kondisi Logika OR
let temperature = 25;

if (temperature < 0 || temperature > 30) {
  console.log("Extreme temperature!");
} else {
  console.log("Temperature is moderate.");
}

// 10. Kondisi Ternary Operator
let isEven = (number % 2 === 0) ? true : false;
console.log(isEven);

// 11. Kondisi Menggunakan String
let username = "admin";
let password = "pass123";

if (username === "admin" && password === "pass123") {
  console.log("Login successful!");
} else {
  console.log("Invalid username or password.");
}

// 12. Kondisi Menggunakan Array
let fruits = ["apple", "orange", "banana"];
let fruitToCheck = "orange";

if (fruits.includes(fruitToCheck)) {
  console.log(`${fruitToCheck} is in the fruit basket.`);
} else {
  console.log(`${fruitToCheck} is not in the fruit basket.`);
}

// 13. Kondisi Menggunakan Objek
let person = {
  name: "John",
  age: 25,
  isAdmin: false
};

if (person.isAdmin) {
  console.log(`${person.name} has admin privileges.`);
} else {
  console.log(`${person.name} does not have admin privileges.`);
}

// 14. Kondisi Nested (If dalam If)
let num1 = 8;
let num2 = 5;

if (num1 > 0) {
  console.log("num1 is positive.");
  
  if (num2 > 0) {
    console.log("num2 is also positive.");
  } else {
    console.log("num2 is not positive.");
  }
} else {
  console.log("num1 is not positive.");
}

// 15. Kondisi Menggunakan Nilai Truthy atau Falsy
let valueToCheck = 0;

if (valueToCheck) {
  console.log("Value is truthy.");
} else {
  console.log("Value is falsy.");
}

// 16. Kondisi Menggunakan Nilai Null atau Undefined
let someValue = null;

if (someValue !== null && someValue !== undefined) {
  console.log("Value is defined.");
} else {
  console.log("Value is null or undefined.");
}

// 17. Kondisi Menggunakan Bilangan Desimal
let decimalValue = 3.14;

if (decimalValue > 3) {
  console.log("Value is greater than 3.");
} else {
  console.log("Value is not greater than 3.");
}

// 18. Kondisi Menggunakan Bilangan Negatif
let negativeNumber = -7;

if (negativeNumber < 0) {
  console.log("Number is negative.");
} else {
  console.log("Number is not negative.");
}

// 19. Kondisi Menggunakan Kombinasi Operator
let umur = 20;
let hasLicense = true;

if (umur >= 18 && hasLicense) {
  console.log("You can drive!");
} else {
  console.log("You are not eligible to drive.");
}

// 20. Kondisi Menggunakan Nilai NaN
let notANumber = NaN;

if (isNaN(notANumber)) {
  console.log("It's not a number.");
} else {
  console.log("It's a number.");
}

// 21. Kondisi Menggunakan Bilangan Bulat
let integerNumber = 42;

if (Number.isInteger(integerNumber)) {
  console.log("It's an integer.");
} else {
  console.log("It's not an integer.");
}

// 22. Kondisi Menggunakan Bilangan Genap atau Ganjil
let anotherNumber = 7;

if (anotherNumber % 2 === 0) {
  console.log("It's an even number.");
} else {
  console.log("It's an odd number.");
}

// 23. Kondisi Menggunakan Operator NOT
let isLoggedOut = false;

if (!isLoggedOut) {
  console.log("User is logged in.");
} else {
  console.log("User is logged out.");
}

// 24. Kondisi Menggunakan String yang Tidak Kosong
let nonEmptyString = "Hello, World!";

if (nonEmptyString) {
  console.log("String is not empty.");
} else {
  console.log("String is empty.");
}

// 25. Kondisi Menggunakan Bilangan Negatif atau Nol
let nonPositiveNumber = 0;

if (nonPositiveNumber <= 0) {
  console.log("Number is non-positive.");
} else {
  console.log("Number is positive.");
}

// 26. Kondisi Menggunakan Perbandingan String
let fruit1 = "apple";
let fruit2 = "orange";

if (fruit1.localeCompare(fruit2) === 0) {
  console.log("Fruits are equal.");
} else {
  console.log("Fruits are not equal.");
}

// 27. Kondisi Menggunakan Nilai Truthy
let truthyValue = "Some text";

if (truthyValue) {
  console.log("Value is truthy.");
} else {
  console.log("Value is falsy.");
}

// 28. Kondisi Menggunakan Nilai Falsy
let falsyValue = "";

if (!falsyValue) {
  console.log("Value is falsy.");
} else {
  console.log("Value is truthy.");
}

// 29. Kondisi Menggunakan Nilai NaN (Variabel)
let someVariable = NaN;

if (isNaN(someVariable)) {
  console.log("It's not a number.");
} else {
  console.log("It's a number.");
}

// 30. Kondisi Menggunakan Bilangan Desimal (Variabel)
let someDecimal = 2.5;

if (someDecimal % 1 === 0) {
  console.log("It's a whole number.");
} else {
  console.log("It's a decimal number.");
}

// 31. Kondisi Menggunakan Bilangan Ganjil
let oddNumber = 13;

if (oddNumber % 2 !== 0) {
  console.log("It's an odd number.");
} else {
  console.log("It's an even number.");
}

// 32. Kondisi Menggunakan Bilangan Bulat Negatif
let negativeInteger = -15;

if (negativeInteger < 0 && Number.isInteger(negativeInteger)) {
  console.log("It's a negative integer.");
} else {
  console.log("It's not a negative integer.");
}

// 33. Kondisi Menggunakan Objek Dengan Properti Tertentu
let car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022
};

if (car.brand === "Toyota" && car.year === 2022) {
  console.log("It's a Toyota from 2022.");
} else {
  console.log("It's not a Toyota from 2022.");
}

// 34. Kondisi Menggunakan Operator Logika AND
let isTrue1 = true;
let isTrue2 = true;

if (isTrue1 && isTrue2) {
  console.log("Both conditions are true.");
} else {
  console.log("At least one condition is false.");
}

// 35. Kondisi Menggunakan Operator Logika OR
let isTrue3 = true;
let isFalse = false;

if (isTrue3 || isFalse) {
  console.log("At least one condition is true.");
} else {
  console.log("Both conditions are false.");
}

// 36. Kondisi Menggunakan Kombinasi Operator Logika
let isLoggedMasuk = true;
let isAdminMin = false;

if (isLoggedMasuk && !isAdminMin) {
  console.log("User is logged in but not an admin.");
} else {
  console.log("User is either not logged in or an admin.");
}

// 37. Kondisi Menggunakan Bilangan Negatif atau Nol (Variabel)
let negativeOrZero = -5;

if (negativeOrZero <= 0 && Number.isInteger(negativeOrZero)) {
  console.log("It's a non-positive integer.");
} else {
  console.log("It's not a non-positive integer.");
}

// 38. Kondisi Menggunakan String dengan Panjang Tertentu
let longString = "This is a long string.";

if (longString.length > 10) {
  console.log("String is longer than 10 characters.");
} else {
  console.log("String is not longer than 10 characters.");
}

// 39. Kondisi Menggunakan Objek Dengan Properti Boolean
let product = {
  name: "Laptop",
  inStock: true
};

if (product.inStock) {
  console.log("Product is in stock.");
} else {
  console.log("Product is out of stock.");
}

// 40. Kondisi Menggunakan Objek Dengan Properti String
let fruitObject = {
  type: "Apple",
  color: "Red"
};

if (fruitObject.color === "Red") {
  console.log("It's a red fruit.");
} else {
  console.log("It's not a red fruit.");
}
