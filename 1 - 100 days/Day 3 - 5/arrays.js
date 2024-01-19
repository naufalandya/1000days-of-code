const friends = ['ali', 'Sadia' , 'Zeynep', 'Ajmal', 'Gupta', 'Azmi', 'Francesca', 'Rami', 'Phoebe']

console.log(friends)

const grades = new Array(90, 42, 93, 19, 65, 78, 30)
console.log(grades)

console.log(friends[0])
console.log(grades[2])

console.log(friends.length)
console.log(friends[friends.length - 1])
console.log(friends[friends[0].length])
console.log(friends[friends[0 + 1].length])

friends[0] = 'Andya'
console.log(friends)

const namalu = "Andya"
const bioAndya = [namalu, 2024-2002, "Universitas Gunadarma", "Laki-Laki", "Senior Programmer",friends]
console.log(bioAndya)
console.log(bioAndya[0], bioAndya[1], bioAndya[5])

const itungUmur = function(birthyeah){
    return 2024 - birthyeah;
}

const tahunlahir = [1990, 1995, 1950, 1970, 2001, 2007, 2015]
const age1 = itungUmur(tahunlahir[0])
const age2 = itungUmur(tahunlahir[5])
const age3 = itungUmur(tahunlahir[tahunlahir.length - 2])

console.log(age1, age2, age3)

//masukin ke akhir
friends.push('Romanchit');
console.log(friends)
console.log(friends.length)
const oranglain = friends.push('Supriyadi')
console.log(friends)
console.log(oranglain)

//masukin ke awal

friends.unshift('Noor')
console.log(friends)

//hapus akhir
friends.pop();
console.log(friends)
const popped = friends.pop()
console.log(friends)
console.log(popped);

//hapus awal
friends.shift();
const shifted = friends.shift()
console.log(friends)

//nyari indeks
console.log(friends.indexOf('Phoebe'))
console.log(friends.indexOf('Zeynep'))

console.log(friends.includes('Zeynep'))
console.log(friends.includes('zeynep'))

if (friends.includes('Sadia')){
    console.log("You have friend called sadia")
}


