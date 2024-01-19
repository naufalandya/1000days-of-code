const measurekelvin = function(){
    //prompt doesnt work with quoka
    const measurement = {
        type : 'temp',
        unit : 'celcius',
        value : Number(prompt('Degree celcius :')), //perbaikan bug di inspect element mengganti input string ke number25
    };
    console.table(measurement)
    console.log(measurement.value)
    console.warn(measurement.value)
    console.error(measurement.value)

    const kelvin = measurement.value + 273;
    return kelvin
}

console.log(measurekelvin());

//debug di inspect element dari script js, buat breakpoint trus play dengan refresh page


//coba dibikin bug

const temperatures = [4,-2,-6,-1, 'error', 9, 13, 18, 15, 8, 5,3,2]

const calcTempAmplitude = function (t1, t2) {
    const temps = t1.concat(t2);

    let max = 0
    let min = 0
    for (let i = 0; i < temps.length; i++){
        const curTemp = temps[i]
        if (typeof curTemp !== 'number') {
            continue;
        }

  
        if (curTemp > max){
            max = temps [i];
        }
        if (curTemp < min){
            min = temps [i];
        }
    }
    console.log(max);
    console.log(min)
    return max-min
};

console.log(calcTempAmplitude([3,5,1,2,5,7,8,9,-20], temperatures))
