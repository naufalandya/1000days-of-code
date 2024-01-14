// && AND
// || OR
// ! NOT

// Contoh 1
let a = 5;
let b = 10;
if (a > 0 && b > 0) {
  console.log("Kedua nilai a dan b positif");
} else {
  console.log("Salah satu dari nilai a atau b tidak positif");
}

// Contoh 2
let raining = true;
let temperature = 15;
if (raining && temperature < 20) {
  console.log("Hujan dan suhu di bawah 20 derajat Celsius");
} else {
  console.log("Tidak hujan atau suhu di atas 20 derajat Celsius");
}

// Contoh 3
let isWeekend = false;
let hasMeeting = true;
if (isWeekend || !hasMeeting) {
  console.log("Hari libur atau tidak ada rapat");
} else {
  console.log("Hari kerja dan ada rapat");
}

// Contoh 4
let isMorning = true;
let isWeekday = true;
if (isMorning && isWeekday) {
  console.log("Pagi hari dan hari kerja");
} else {
  console.log("Bukan pagi hari atau bukan hari kerja");
}

// Contoh 5
let isSunnyDay = false;
let hasPicnicPlan = true;
if (isSunnyDay || hasPicnicPlan) {
  console.log("Hari cerah atau ada rencana piknik");
} else {
  console.log("Tidak cerah dan tidak ada rencana piknik");
}

// Contoh 6
let isLoggedIn = true;
if (!isLoggedIn) {
  console.log("Pengguna belum masuk");
} else {
  console.log("Pengguna sudah masuk");
}

// Contoh 7
let age = 25;
if (age >= 18 && age <= 30) {
  console.log("Usia antara 18 dan 30 tahun");
} else {
  console.log("Usia di luar rentang 18-30 tahun");
}

// Contoh 8
let isMember = false;
let discount = 0.1;
if (isMember || discount > 0) {
  console.log("Pengguna adalah anggota atau mendapatkan diskon");
} else {
  console.log("Pengguna bukan anggota dan tidak mendapatkan diskon");
}

// Contoh 9
let isAdmin = false;
let isSuperUser = true;
if (isAdmin && !isSuperUser) {
  console.log("Admin tetapi bukan super user");
} else {
  console.log("Bukan admin atau super user");
}

// Contoh 10
let isHoliday = true;
let isWorkingDay = false;
if (isHoliday || !isWorkingDay) {
  console.log("Hari libur atau bukan hari kerja");
} else {
  console.log("Bukan hari libur dan hari kerja");
}

// Contoh 11
let isEvening = false;
let hasDinnerPlan = true;
if (isEvening || hasDinnerPlan) {
  console.log("Sore hari atau ada rencana makan malam");
} else {
  console.log("Bukan sore hari dan tidak ada rencana makan malam");
}

// Contoh 12
let isRegistered = true;
let isVerified = false;
if (isRegistered && !isVerified) {
  console.log("Pengguna terdaftar tetapi belum diverifikasi");
} else {
  console.log("Pengguna sudah terdaftar atau sudah diverifikasi");
}
