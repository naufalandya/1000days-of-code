'use strict';

console.log("Anda punya 1 kucing 🐱")
console.log("Anda punya 2 kucing 🐱")
console.log("Anda punya 3 kucing 🐱")
console.log("Anda punya 4 kucing 🐱")
console.log("Anda punya 5 kucing 🐱")
console.log("Anda punya 6 kucing 🐱")
console.log("Anda punya 7 kucing 🐱")
console.log("Anda punya 8 kucing 🐱")
console.log("Anda punya 9 kucing 🐱")
console.log("Anda punya 10 kucing 🐱")

for (let ulang = 1; ulang <= 10; ulang++){
    console.log(`Anda punya ${ulang} kucing 🐱`)
}

const ArrayAndya = [
    'Naufal',
    'Andya',
    2024-2002,
    'CEO',
    ['Phoebe', 'Zeynep', 'Azmi', 'Gupta', 'Ajmal', 'Ska'],
    true
]

const tipedataAndya = []

const angka = []

const pindahArray = []

for (let ulang = 0; ulang < ArrayAndya.length; ulang++){
    console.log(ArrayAndya[ulang], typeof ArrayAndya[ulang])
    tipedataAndya[ulang] = typeof ArrayAndya[ulang];
    angka.push(ulang)
    pindahArray.push(ArrayAndya[ulang])
}

console.log(tipedataAndya)
console.log(angka)
console.log(pindahArray)

const tahunlahirorang = [2002, 2004, 2005, 1998, 1970, 1995]
for (let ulang = 0; ulang < tahunlahirorang.length; ulang++){
    const tahunsekarang = 2024
    console.log(tahunsekarang - tahunlahirorang[ulang])
}
const bilangan = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,16,18,19,20]

console.log(bilangan.length)


for (let ulang = 0; ulang < bilangan.length; ulang++){

    if (bilangan[ulang] %2 !== 0){
        console.log(bilangan[ulang])
        continue;
    }

    console.log(bilangan[ulang])

    if (bilangan[ulang] % 2 === 0){
        console.log(bilangan[ulang])
    }

    if (bilangan[ulang] === 16){
        console.log(bilangan[ulang])
        break;

    }

    console.log(bilangan[ulang])
}
console.log(ArrayAndya)

//loop backwards
for (let ulang = ArrayAndya.length - 1; ulang >= 0; ulang--){
    console.log(ArrayAndya[ulang])
}

for (let exercise = 1; exercise < 4; exercise++){
    console.log(`========Starting Exercise ${exercise}=========`);

    for (let rep=1; rep < 6; rep++) {
        console.log(`Exercise ${exercise} : Lifting Weight Repetition ${rep} 🏋🏻‍♀️`)
    }
}