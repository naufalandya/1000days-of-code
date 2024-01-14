const age = 19
if (age === 19) console.log("Kamu udah dewasa :3")

// === without type coercion
//  == with type coercion

if ("19" == 19) console.log("Hehey jalan")
if ("19" === 19) {
    console.log("Hehey jalan")
    console.log(typeof 9)
} else {
    console.log(typeof(19))
    console.log(typeof ("19"))
    console.log("Hehey keren")
}

// const narodatastring = prompt("Hallo masukan teks kesini coba");

const narodatanumber = 23;

if (narodatanumber === 23){
    console.log("Ini angka keren")
} else if (narodatanumber === 17){
    console.log("Ini angka keren woi")
} else if (narodatanumber === 9){
    console.log("Ini angka keren anjay")
} else {
    console.log("Angka bukan 23, 17, 9, jadi ga keren")
}