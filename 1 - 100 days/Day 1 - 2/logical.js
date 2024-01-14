// Operator Perbandingan
let num1 = 5;
let num2 = "5";

// 1. Equal To (==)
if (num1 == num2) {
  console.log("Equal");
} else {
  console.log("Not Equal");
}
// Output: Equal (nilai sama setelah konversi tipe data)

// 2. Equal Value and Equal Type (===)
if (num1 === num2) {
  console.log("Equal");
} else {
  console.log("Not Equal");
}
// Output: Not Equal (nilai sama tetapi tipe data berbeda)

// 3. Not Equal (!=)
let value1 = 8;
let value2 = "8";
if (value1 != value2) {
  console.log("Not Equal");
} else {
  console.log("Equal");
}
// Output: Not Equal (nilai sama setelah konversi tipe data)

// Operator Ternary
let age = 25;

// 1. Ternary Operator (?)
let result1 = (age >= 18) ? "Adult" : "Minor";
console.log(result1);
// Output: Adult

// 2. Ternary Operator (?)
let result2 = (num1 > num2) ? "Greater" : "Not Greater";
console.log(result2);
// Output: Not Greater (nilai tidak lebih besar)

// 3. Ternary Operator (?)
let result3 = (value1 <= value2) ? "Less or Equal" : "Not Less or Equal";
console.log(result3);
// Output: Less or Equal (nilai kurang dari atau sama dengan)


//contoh 4
const punyaSIM = true;
const punyaMataBagus = true;

console.log(punyaMataBagus && punyaMataBagus)
console.log(punyaMataBagus || punyaSIM)
console.log(!punyaMataBagus)
console.log(!punyaSIM)

if (punyaMataBagus && punyaSIM){
  console.log("Boleh ngendarain mobil")
} else {
  console.log("Ga boleh ngendarain mobil")
}

const capek = false;

console.log(punyaMataBagus || punyaSIM || capek)
console.log(punyaMataBagus && punyaSIM || capek)
console.log(punyaMataBagus && punyaSIM && capek)

if (punyaMataBagus && punyaSIM && !capek){
  console.log("Boleh ngendarain mobil")
} else {
  console.log("ga boleh")
}
