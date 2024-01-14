//falsy values : 0, , undefined, null, NaN, false

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Andya'));
console.log(Boolean({}));
console.log(Boolean(''));

const uang = 0;

if(uang) {
    console.log("Jangan dipake semua uangnya");
} else {
    console.log("Tabung uangnya");
}

let tinggi;
if (tinggi){
    console.log(`Tinggi kamu adalah ${tinggi}`)
} else {
    console.log("Tinggi kamu belum disebutin")
}