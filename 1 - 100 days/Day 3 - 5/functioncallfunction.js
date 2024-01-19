function TigaNilai(satu, dua, tiga){
    const total = satu + dua + tiga
    return total
}

const RataRata = function(){
    const totalnilai = TigaNilai(20, 50, 90)
    const ratarata = totalnilai/3
    return ratarata
}

const statusnilai = () => {
    const ratarata = RataRata();
    let statusanda = `Anda lulus dengan nilai rata rata ${ratarata}`
    if (ratarata < 70){
        statusanda = `Anda tidak lulus dengan nilai rata rata ${ratarata}`
    }
    return statusanda
}

const utama = () => {
    const statuslu = statusnilai();
    return statuslu
}

console.log(utama());


//contoh


// 1. Fungsi dengan pemanggilan fungsi lain secara langsung
function greet(name) {
    return "Hello, " + name + "!";
  }
  
  function welcomeMessage(name) {
    return greet(name);
  }
  
  // 2. Fungsi dengan pemanggilan fungsi lain dalam kondisi
  function isPositive(number) {
    return number > 0;
  }
  
  function checkSign(number) {
    if (isPositive(number)) {
      return "Positive";
    } else {
      return "Negative or Zero";
    }
  }
  
  // 3. Fungsi dengan pemanggilan fungsi dalam loop
  function squareNumber(number) {
    return number * number;
  }
  
  function squareNumbersList(numbers) {
    const squaredList = [];
    for (let i = 0; i < numbers.length; i++) {
      squaredList.push(squareNumber(numbers[i]));
    }
    return squaredList;
  }
  
  // 4. Fungsi dengan pemanggilan fungsi di dalam fungsi lain
  function add(a, b) {
    return a + b;
  }
  
  function multiplyByTwo(number) {
    return add(number, number);
  }
  
  // 5. Fungsi dengan pemanggilan fungsi sebagai argumen
  function doubleAndSquare(callback, number) {
    const doubled = callback(number * 2);
    return squareNumber(doubled);
  }
  
  // 6. Fungsi dengan pemanggilan fungsi rekursif
  function factorial(n) {
    if (n <= 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  // 7. Fungsi dengan pemanggilan fungsi dalam fungsi pengembalian
  function greetFactory(greeting) {
    return function (name) {
      return greeting + ", " + name + "!";
    };
  }
  
  const sayHi = greetFactory("Hi");
  const sayHello = greetFactory("Hello");
  
  // 8. Fungsi dengan pemanggilan fungsi menggunakan method
  function uppercaseString(str) {
    return str.toUpperCase();
  }
  
  function formatAndUppercase(message) {
    return uppercaseString(message.trim());
  }
  
  // 9. Fungsi dengan pemanggilan fungsi dari objek
  const calculator = {
    add: function (a, b) {
      return a + b;
    },
    multiply: function (a, b) {
      return a * b;
    },
  };
  
  function calculate(a, b, operation) {
    return calculator[operation](a, b);
  }
  
  // 10. Fungsi dengan pemanggilan fungsi dengan rest parameter
  function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  
  function calculateSumAndSquare(...numbers) {
    const total = sum(...numbers);
    return squareNumber(total);
  }
  