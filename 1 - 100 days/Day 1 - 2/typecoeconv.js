/* Type Coercion dan Type Conversion adalah dua konsep dalam pemrograman JavaScript yang berhubungan dengan perubahan tipe data.

Type Coercion:

Type coercion terjadi ketika JavaScript secara otomatis mengonversi satu tipe data ke tipe lainnya, jika dibutuhkan dalam suatu operasi.
Contohnya, ketika Anda menggunakan operator + antara string dan angka, JavaScript akan mengonversi salah satu dari mereka untuk melakukan operasi.

Type Conversion:

Type conversion adalah proses ekspisit mengubah tipe data dari satu bentuk ke bentuk lain menggunakan fungsi atau metode yang disediakan oleh JavaScript.
Contohnya, menggunakan Number(), String(), atau metode khusus untuk mengubah tipe data. */


// Type Conversion
let strNumber = "123";
let num1 = Number(strNumber);

let num2 = 456;
let strNumber2 = String(num2);

let boolValue1 = true;
let num3 = Number(boolValue1);

let num4 = 0;
let boolValue2 = Boolean(num4);

let str1 = "true";
let boolValue3 = Boolean(str1);

let boolValue4 = false;
let str2 = String(boolValue4);

let arr1 = [1, 2, 3];
let strArray = arr1.toString();

let str3 = "hello";
let arr2 = Array.from(str3);

let num5 = 1634181911000;
let date1 = new Date(num5);

let obj1 = { key: 'value' };
let jsonStr1 = JSON.stringify(obj1);

// Type Coercion
let str4 = "123";
let num6 = 456;
let result1 = str4 + num6; // "123456"

let num7 = 456;
let str5 = "123";
let result2 = num7 + str5; // "456123"

let str6 = "456";
let num8 = 123;
let result3 = str6 - num8; // 333

let boolValue5 = true;
let num9 = 10;
let result4 = boolValue5 + num9; // 11

let num10 = 42;
let str7 = "42";
let isEqual1 = num10 == str7; // true

let boolValue6 = true;
let num11 = 1;
let isEqual2 = boolValue6 == num11; // true

let boolValue7 = true;
let str8 = "true";
let isEqual3 = boolValue7 == str8; // true

let str9 = "hello";
let obj2 = { key: 'value' };
let isEqual4 = str9 == obj2; // false

let obj3 = { key: 'value' };
let str10 = " is the value";
let result5 = obj3 + str10; // "[object Object] is the value"

let obj4 = { key: 42 };
let num12 = 10;
let result6 = obj4 + num12; // "NaN"

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);