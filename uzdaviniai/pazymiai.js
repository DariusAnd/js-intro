console.clear();

const marks0 = [10, 2, 8, 4, 6];
const marks1 = [10, 2, 8, 'a', '', 4, 6, true, false, null];
const marks2 = [];
const marks3 = [10, Infinity, 2, 3.14, 8, 2.727, 0, 80, 99, 120, 4, 6];
const marks4 = [10, NaN, Infinity, -Infinity, 2, 8, 4, 6];
const marks5 = 'Labas';

// III-as variantas - norint apskaiciuoti visus masyvus, kuriam funkcija!

function marksAverage(marksList) {
    let totalSum = 0;
    let count = 0;

    for (let i = 0; i < marksList.length; i++) {
        if (typeof marksList[i] !== 'number'
        || marksList[i] % 1 !== 0
        || marksList[i] > 10
        || marksList[i] < 1 ) {
            continue;
        }
        totalSum += marksList[i];
        count++;
        
    }
    const average = totalSum / count;
    return count ? average : 'Neiskaityta';
}

console.log(marksAverage(marks0))
console.log(marksAverage(marks1))
console.log(marksAverage(marks2))
console.log(marksAverage(marks3))
console.log(marksAverage(marks4))
console.log(marksAverage(marks5))
console.log('=====================')

// 1)
// if (typeof marksList[i] === 'number') {
        //     totalSum += marksList[i];
        //     count++;
        // }   
        
            // 2) tesiam su IIu variantu
        //if (typeof marksList[i] !== 'number') {
        //    continue;
        // }   
        // if (marksList[i] > 10) {
        //     continue;
        // }   
        // if (marksList[i] < 0) {
        //     continue;
        // }   
        // reikia eliminuoti desimtainius skaicius!
        
        // if (('' + markslist[i]).includes('.')) => '3.14'.includes('.') => true
        // if (('' + markslist[i]).split('.').length > 1) => '3.14'.split('.').length => [3, 14]
        // if (parseInt('' + markslist[i]) !== marksList[i]) => parseInt('3.14') === 3.14 === 3 === 3.14 -> false
        // parseFloat('3.14') === 3.14 -> true
        
        // if (!Number.isInteger(marksList[i])) {
        //     continue;
        // }   

    
    //return count === 0 ? 'Neiskaityta': average; = visi atsakymai tinkami!
    //return count > 0 ? average : 'Neiskaityta';

// I-as variantas = I-as masyvas
let totalSum0 = 0;

// totalSum += marks0[0];
// totalSum += marks0[1];
// totalSum += marks0[2];
// totalSum += marks0[3];
// totalSum += marks0[4];

for (let i = 0; i < marks0.length; i++) {
    if (typeof marks0[i] === 'number') {
        totalSum0 += marks0[i];
    }   }
const average = totalSum0 / marks0.length;
console.log(average);
//--------------------------------------------------------------

//II-as variantas, II-as masyvas

let totalSum1 = 0;
let count = 0;

for (let i = 0; i < marks1.length; i++) {
    if (typeof marks1[i] === 'number') {
        totalSum1 += marks1[i];
        count++;
}   }
const average1 = totalSum1 / count;
console.log(average1);


// function marksAverage(){
//     return 0;
// }

// let totalSum = 0;
// let count = 0;

// for (let i = 0; i < marks0.length; i++) {
//     if (typeof marks0[i] === 'number'){
//         totalSum += marks0[i];
//         count++
//     }
// }

// const average = totalSum / count;
// console.log(average);


// console.log(marksAverage(marks0));
// console.log(marksAverage(marks1));
// console.log(marksAverage(marks2));