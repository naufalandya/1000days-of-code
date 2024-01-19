// Contoh 1: Menghitung hingga 5
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// Contoh 2: Menggandakan nilai hingga mencapai batas tertentu
let nilai = 2;
while (nilai <= 64) {
    console.log(nilai);
    nilai *= 2;
}

// Contoh 3: Menjumlahkan angka hingga mencapai nilai tertentu
let jumlah = 0;
let angka = 1;
while (angka <= 10) {
    jumlah += angka;
    angka++;
}
console.log(jumlah);

// Contoh 4: Mengakses elemen array dengan while
let buah = ['apel', 'jeruk', 'pisang', 'anggur'];
let index = 0;
while (index < buah.length) {
    console.log(buah[index]);
    index++;
}

// Contoh 5: Membaca input pengguna hingga kondisi tertentu terpenuhi
let jawaban;
while (jawaban !== 'ya') {
    jawaban = prompt('Apakah Anda ingin melanjutkan? (ya/tidak)');
}

// Contoh 6: Mengulang sampai mendapatkan angka acak tertentu
let targetAngka = 7;
let tebakan;
while (tebakan !== targetAngka) {
    tebakan = Math.floor(Math.random() * 10) + 1; // Menghasilkan angka acak antara 1 dan 10
    console.log(`Tebakan: ${tebakan}`);
}
console.log('Selamat! Anda menebak dengan benar.');

// Contoh 7: Mencari faktorial suatu bilangan
let bilangan = 5;
let faktorial = 1;
let hitung = 1;
while (hitung <= bilangan) {
    faktorial *= hitung;
    hitung++;
}
console.log(`Faktorial dari ${bilangan} adalah ${faktorial}`);

// Contoh 8: Mengurangi nilai hingga mencapai 0
let nilaiPenurunan = 10;
while (nilaiPenurunan > 0) {
    console.log(nilaiPenurunan);
    nilaiPenurunan--;
}

// Contoh 9: Menampilkan bilangan prima hingga batas tertentu
let batasPrima = 20;
let angkaPrima = 2;
while (angkaPrima <= batasPrima) {
    let pembagi = 2;
    let prima = true;
    while (pembagi < angkaPrima) {
        if (angkaPrima % pembagi === 0) {
            prima = false;
            break;
        }
        pembagi++;
    }
    if (prima) {
        console.log(angkaPrima);
    }
    angkaPrima++;
}

// Contoh 10: Menggunakan loop untuk menghitung jumlah karakter dalam sebuah string
let kalimat = 'Halo, ini adalah contoh';
let jumlahKarakter = 0;
while (jumlahKarakter < kalimat.length) {
    console.log(kalimat[jumlahKarakter]);
    jumlahKarakter++;
}
