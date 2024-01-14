// 1. Deklarasi variabel dengan var
var numberVar = 5;
console.log(numberVar); // 5

// 2. Redeclaration menggunakan var
var numberVar = 10;
console.log(numberVar); // 10

// 3. Hoisting: Deklarasi diangkat ke atas (tetapi tidak inisialisasi)
console.log(hoistedVar); // undefined
var hoistedVar = 20;

// 4. Variabel dalam fungsi
function exampleFunction() {
  var localVar = 30;
  console.log(localVar);
}
exampleFunction(); // 30
// console.log(localVar); // ReferenceError: localVar is not defined

// 5. Variabel di luar blok
if (true) {
  var outsideBlock = 40;
}
console.log(outsideBlock); // 40

// 6. Hoisting di luar fungsi
console.log(globalVar); // undefined
var globalVar = 50;

// 7. Loop variable dengan var
for (var i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}
console.log(i); // 5

// 8. Variabel di tingkat global
var globalVariable = "Hello, World!";
console.log(globalVariable); // Hello, World!

// 9. Redeclaration di tingkat global
var globalVariable = "New value";
console.log(globalVariable); // New value

// 10. Variabel dalam fungsi bersifat fungsional
function exampleFunctionVar() {
  if (true) {
    var functionScopedVar = "Function Scoped";
    console.log(functionScopedVar);
  }
  console.log(functionScopedVar); // Function Scoped
}
exampleFunctionVar();
