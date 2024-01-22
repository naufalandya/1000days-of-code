let lastName = 'Andya';
let oldLastName = lastName;
lastName = 'Faiz';
console.log(lastName, oldLastName)

const Fiko = {
    firstname: 'Fiko',
    lastName: 'Masyazariella',
    age:20,
}

const marriedFiko = Fiko;
marriedFiko.lastName = 'Andya';
console.log('Before marriages ;', Fiko)
console.log('After marriages ;', marriedFiko)

const Fiko2 = {
    firstname: 'Fiko',
    lastName: 'Masyazariella',
    age:20,
    family:['Alice', 'Bob'],
}

const fikoCopy = Object.assign({}, Fiko2);
fikoCopy.lastName = "Zariella"
console.log(fikoCopy)
console.log(Fiko2)

fikoCopy.family.push('John');
fikoCopy.family.push('ursula')

console.log(fikoCopy)
console.log(Fiko2)