'use strict';
const itungUmur = function (tahunlahir, tahunini){
    const umur = tahunlahir - tahunini
    return umur
}

const itungUmurLagi = (tahunlahir, tahunini) => tahunini - tahunlahir
const umurambil = itungUmurLagi(2002, 2024)
console.log(umurambil)

const ceklulus = (nilai, namasiswa) => {
    let statuslulus = false;
    if (nilai >= 80){
        statuslulus = true;
    }
    let status = "tidak lulus"
    if (statuslulus == true){
        status = "lulus"
    }
    const output = `siswa dengan nama ${namasiswa} mendapatkan nilai ${nilai} sehingga dinyatakan ${status}`
    return output
}

const outputlulus = ceklulus(70, "Naufal Andya")
console.log(outputlulus)
console.log(ceklulus(90, "Andya"))