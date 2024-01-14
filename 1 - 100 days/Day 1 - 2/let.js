// Penggunaan let
// 1. Deklarasi variabel dengan blok skop
if (true) {
  let x = 10;
  console.log(x); // 10
}
// console.log(x); // ReferenceError: x is not defined

// 2. Variabel dalam loop
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}
// console.log(i); // ReferenceError: i is not defined

// 3. Menetapkan nilai ulang
let y = 5;
y = 10;
console.log(y); // 10

// 4. Redeclaring dalam skop yang berbeda
let z = 20;
if (true) {
  let z = 30;
  console.log(z); // 30
}
console.log(z); // 20

// 5. Variable shadowing dalam fungsi
function example() {
  let a = 50;
  if (true) {
    let a = 60;
    console.log(a); // 60
  }
  console.log(a); // 50
}
example();

// 6. Temporal Dead Zone (TDZ)
// console.log(b); // ReferenceError: b is not defined
let b = 25;

// 7. Membuat array menggunakan let
let myArray = [1, 2, 3];

// 8. Penugasan properti objek
let person = {};
person.name = "John";
person.age = 30;

// 9. Pembuatan variabel dinamis
let dynamicVariable = "hello";
console.log(dynamicVariable); // hello

// 10. Mendeklarasikan variabel secara kondisional
let condition = true;
if (condition) {
  let result = "success";
  console.log(result); // success
} else {
  let result = "failure";
  console.log(result); // Blok ini tidak akan dieksekusi
}
