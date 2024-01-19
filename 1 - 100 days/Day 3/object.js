const ArraySiAndya = [
    'Naufal',
    'Andya',
    2024-2002,
    'CEO',
    ['Phoebe', 'Ajmal', 'Zeynep', 'Azmi',  'Gupta']
];

const objeksiAndya = {
    namaAwal : 'Andya',
    namaAkhir : 'Faiz',
    tglahir : 2002,
    pekerjaan : 'CEO',
    temanTeman : ['Phoebe', 'Ajmal', 'Zeynep', 'Azmi',  'Gupta'],
    punyaSIM : true,
    pacar : false,
    itungUmur1 : function(tglahir){
        return 2024 - tglahir
    },

    itungUmur2 : function(){
        return 2024 - this.tglahir
    },
    checksim : () => {
        return `${checkdriverlicense()}`
    },

    summary : function () {
       return `nama saya adalah ${this.namaAwal + " " + this.namaAkhir}, saya lahir tahun ${this.tglahir}, dan umur saya adalah ${this.itungUmur2()}, saya memiliki banyak teman yaitu ${this.temanTeman}, ${this.checksim()}. Saya juga ${this.pacar ? "punya pacar" : "enggak punya pacar"}`
    }
};

function checkdriverlicense(){
    if (objeksiAndya.punyaSIM = true){
        return "saya juga memiliki sim buat ngajak mereka naik mobil jalan2"
    } else {
        return "namun saya tidak memiliki sim untuk ngajak mereka naik mobil jalan2"
    }
}

console.log(objeksiAndya)
console.log(objeksiAndya.temanTeman)//dot notation
console.log(objeksiAndya['temanTeman'])//bracket notation

const nameKey = 'nama';
console.log(objeksiAndya[nameKey + 'Awal'])
console.log(objeksiAndya[nameKey + 'Akhir'])


const ketertarikan1 = 'itungUmur1'
console.log(objeksiAndya.ketertarikan1)
console.log(objeksiAndya[ketertarikan1])
console.log(objeksiAndya[ketertarikan1](2002))

const ketertarikan2 = 'itungUmur2'
console.log(objeksiAndya.ketertarikan2)
console.log(objeksiAndya[ketertarikan2])
console.log(objeksiAndya[ketertarikan2]())


if (objeksiAndya[ketertarikan1]){
    console.log(objeksiAndya[ketertarikan1])
} else {
    console.log(("Pilihannya salah"))
}


objeksiAndya.alamat = "Jalan dieng VII blok C8 No 23";
objeksiAndya.agama = "Islam";

console.log(objeksiAndya)

console.log(`Andya has ${objeksiAndya.temanTeman.length} friends, and his best friend is called ${objeksiAndya.temanTeman[0]}`)

console.log(`${objeksiAndya.namaAwal} has ${objeksiAndya['temanTeman'].length} friends, and his best friend is called ${objeksiAndya.temanTeman[0]}`)


console.log(`rangkuman ${objeksiAndya.namaAwal} adalah ${objeksiAndya.summary()}`)