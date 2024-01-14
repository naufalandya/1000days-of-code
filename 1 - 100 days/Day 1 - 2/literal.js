// 1. Penyisipan Variabel
let name = "John";
let greeting = `Hello, ${name}!`;
console.log(greeting);  // Output: Hello, John!

// 2. Ekspresi Matematika
let a = 5;
let b = 3;
let result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result);  // Output: The sum of 5 and 3 is 8.

// 3. Penggunaan Fungsi
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

let city = "paris";
let formattedCity = `I love visiting ${capitalize(city)}.`;
console.log(formattedCity);  // Output: I love visiting Paris.

// 4. Multi-line Strings
let multiLine = `
   This is a
   multi-line
   string using
   template literals.`;
console.log(multiLine);

// 5. Penggunaan Ternary Operator
let age = 25;
let message = `You are ${age >= 18 ? 'an adult' : 'a minor'}.`;
console.log(message);  // Output: You are an adult.

// 6. Penyisipan Objek
let person = { name: "Alice", age: 30 };
let details = `Person: ${person.name}, Age: ${person.age}`;
console.log(details);  // Output: Person: Alice, Age: 30

// 7. Penggunaan Tagged Template Literals
function currency(strings, ...values) {
  let result = "";
  strings.forEach((str, i) => {
    result += `${str}${values[i] ? values[i].toFixed(2) : ""}`;
  });
  return result;
}

let price = 19.99;
let taxRate = 0.1;
let formattedPrice = currency`Total: $${price} (Tax: ${taxRate * 100}%)`;
console.log(formattedPrice);  // Output: Total: $19.99 (Tax: 10%)

// 8. Penggunaan Backticks Dalam String Biasa
let regularString = 'This is a regular string using `backticks`.';
console.log(regularString);

// 9. Penyisipan Array
let colors = ["red", "green", "blue"];
let colorList = `Colors: ${colors.join(", ")}`;
console.log(colorList);  // Output: Colors: red, green, blue

// 10. Penyisipan HTML
let title = "Dynamic Content";
let content = `<div class="article">
                  <h1>${title}</h1>
                  <p>This is a dynamic content section.</p>
               </div>`;
console.log(content);

// 11. Penggunaan String Method
let word = "template";
let upperCaseWord = `${word.toUpperCase()} literals`;
console.log(upperCaseWord);  // Output: TEMPLATE literals

// 12. Penyisipan URL
let endpoint = "api/data";
let apiKey = "xyz123";
let url = `https://example.com/${endpoint}?key=${apiKey}`;
console.log(url);

// 13. Penyisipan Tanggal
let currentDate = new Date();
let formattedDate = `Today is ${currentDate.toDateString()}`;
console.log(formattedDate);

// 14. Penggunaan Escape Characters
let escapedCharacters = `Backticks: \` Single Quotes: ' Double Quotes: "`;
console.log(escapedCharacters);

// 15. Penyisipan Baris Baru
let newLines = `This string
    spans multiple
    lines.`;
console.log(newLines);

// 16. Penyisipan String Concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = `${firstName} ${lastName}`;
console.log(fullName);  // Output: John Doe

// 17. Penyisipan Nilai Boolean
let isEnabled = true;
let statusMessage = `The feature is ${isEnabled ? 'enabled' : 'disabled'}.`;
console.log(statusMessage);  // Output: The feature is enabled.

// 18. Penyisipan Nilai Null atau Undefined
let value = null;
//let message = `The value is ${value !== null ? value : 'undefined or null'}.`;
console.log(message);  // Output: The value is undefined or null.

// 19. Penyisipan Bilangan Desimal
let decimalNumber = 3.14159;
let formattedNumber = `The value of pi is approximately ${decimalNumber.toFixed(2)}.`;
console.log(formattedNumber);  // Output: The value of pi is approximately 3.14.

// 20. Penggunaan String Interpolation Dalam Fungsi
function greet(name) {
  return `Hello, ${name}!`;
}

let personName = "Alice";
console.log(greet(personName));  // Output: Hello, Alice!
