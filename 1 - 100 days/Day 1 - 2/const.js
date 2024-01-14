// 1. Deklarasi konstanta
const PI = 3.14;
console.log(PI); // 3.14

// 2. Array konstan
const colors = ['merah', 'hijau', 'biru'];
console.log(colors); // ['merah', 'hijau', 'biru']

// 3. Objek konstan
const person = { name: 'John', age: 30 };
console.log(person.name); // John
person.age = 31; // Diperbolehkan

// 4. Variabel dalam loop (penyebab kesalahan)
for (const i = 0; i < 5; i++) {
  console.log(i);
}
// TypeError: Assignment to constant variable.

// 5. Konstanta dalam ruang lingkup fungsi
function example() {
  const x = 10;
  console.log(x);
}
example(); // 10
console.log(x); // ReferenceError: x tidak terdefinisi

// 6. Konstan dalam blok lingkup
if (true) {
  const y = 20;
  console.log(y);
}
console.log(y); // ReferenceError: y tidak terdefinisi

// 7. Menggunakan const untuk konstanta matematika
const GRAVITY = 9.8;
const PLANCK_CONSTANT = 6.62607015e-34;

// 8. Membekukan sebuah objek
const frozenObject = Object.freeze({ key: 'nilai' });
frozenObject.key = 'nilai baru'; // Diabaikan dalam mode ketat
console.log(frozenObject.key); // nilai

// 9. Konstanta global
const APP_NAME = 'AplikasiSaya';
console.log(APP_NAME); // AplikasiSaya

// 10. Menggunakan const dalam pernyataan switch
const dayOfWeek = 3;
switch (dayOfWeek) {
  case 1:
    console.log('Senin');
    break;
  // kasus lainnya...
  default:
    console.log('Hari tidak dikenal');
    break;
}
