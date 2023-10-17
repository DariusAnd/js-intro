/*
FOR - 'for' ciklas
bazinis is visu galimu ciklu
*/

console.clear();

// let a = 0;
// // Skaicius: [n];
// console.log(a++);
// console.log(a++);
// console.log(a++);
// console.log(a++);
// console.log(a++);
// console.log(a++);
// console.log(a++);
// console.log(a++);
// console.log(a++);

console.log('START');
//intervalas [0, 5) (matematiskai)
for (let i = 7; i >= -2; i--) {     // 'i' ir kiti kintamieji inicijuojami tik to ciklo viduje
    console.log(i, 'pirmas');       // todel galima naudoti vis ta pati 'i' ar kintamuosius
}                                   // skirtinguose cikluose!

console.log('PAUSE');
//intervalas [-2, 7] - matematika
for (let i = -2; i <= 7; i++) {
    console.log(i, 'antras');
}
console.log('FINISH');

console.clear();

for (let f = 0; f < 7; f++) {    //++f efektyvesne uz f++ , bet cikle teoriskai 
    console.log(f, 'Labas');    // skirtumo nera!
    console.log(f, 'Labas');
}

for (let f = 0; f < 7; f++) { 
    const sentence = `The number is: ${f}.`;
    console.log(sentence);
}

for (let f = 0; f < 7; f++) { 
    const sentence = `The number 2 is: ${f + 1}.`;
    console.log(sentence);
}

console.clear();

// Skaiciai intervale nuo 3 iki 8 imtinai yra: 3 4 5 6 7 8.
// const start = 3
// const finish = 8
// const numberLine = `Skaiciai intervale nuo 3 iki 8 imtinai yra: 3 4 5 6 7 8.`;
// console.log(numberLine);

// const start = -3;
// const finish = 10;
// let numberSequence = '';
// console.log(numberSequence);

// let numberSequence = ''; sablonas = tarpas ' ' + skaicius!
// numberSequence += ' 3';
// numberSequence += ' 4';
// numberSequence += ' 5';
// numberSequence += ' 6';
// numberSequence += ' 7';
// numberSequence += ' 8';

const start = -3;
const finish = 10;
let numberSequence = '';

for (let i = start; i <= finish; i++) {
    numberSequence += ' ' + i;  // sablonas = tarpas ' ' + skaicius!
}
const numberLine = `Skaiciai intervale nuo ${start} iki ${finish} imtinai yra:${numberSequence}.`;
console.log(numberLine);

// // Skaiciai intervale nuo 3 iki 8 imtinai yra: 3, 4, 5, 6, 7, 8.
// // const numberSequence2 = '3, 4, 5, 6, 7, 8'

// //let numberSequence2 = '';
// // if (i < finish) {
//     // numberSequence2 += ' 3,';
//     // numberSequence2 += ' 4,';
//     // numberSequence2 += ' 5,';
// // numberSequence2 += ' 6,';
// // numberSequence2 += ' 7,';
// // } else {
//     // numberSequence2 += ' 8';
//     //}
    
// // for (let i = start; i < finish; i++) {
// //     numberSequence2 += i + ', ';
// // }
// // numberSequence2 += finish;

// // const numberLine2 = `Skaiciai intervale nuo ${start} iki ${finish} imtinai yra: 3, 4, 5, 6, 7, 8.`;
// // console.log(numberLine2);

// // let numberSequence2 = start;
// // for (let i = start + 1; i <= finish; i++) {
// //     numberSequence2 += ', ' + i;
// // }
    
// // const numberLine2 = `Skaiciai intervale nuo ${start} iki ${finish} imtinai yra: ${numberSequence2}.`;
// // console.log(numberLine2);

// let numberSequence2 = finish;
// for (let i = finish; i >= start; i--) {
//     numberSequence2 += ', ' + i;
// }
    
// const numberLine2 = `Skaiciai intervale nuo ${start} iki ${finish} imtinai yra: ${numberSequence2}.`;
// console.log(numberLine2);

// // for (let i = 0; i <= 10; i++){
// //     if (i % 2 === 0) {
// //         console.log(i, 'lyginis');
// //     }
// // }

// for (let i = 0; i <= 10; i += 3){
//     console.log(i);
// }

// console.clear();

// let i = 0

// for (; i <= 10;) {
//     console.log(i, 'ciklas');
//     i += 2
// }
// console.log(i, 'uz ciklo');

// //funkcija

// const word = 'Nebesiprisikiskiakopusteliaudavome';

// // Raide: z;
// // Raide: o;
// // Raide: d;
// // Raide: i;
// // Raide: s;

// console.log(`Raide: ${word[0]}`);
// console.log(`Raide: ${word[1]}`);
// console.log(`Raide: ${word[2]}`);
// console.log(`Raide: ${word[3]}`);
// console.log(`Raide: ${word[4]}`);

// for (let i = 0; i < word.length; i++ ){
//     console.log(i, `Raide: ${word[i]}`);
// }

// console.clear();

// const marks = [9, 6, 7, 8, 5];  
// //const totalSum = 0;
// let totalSum = 0
// const amount = marks.length;

// for (let i = 0; i < amount; i++ ){
//     const mark = marks[i];
//     totalSum += marks [i];
//     console.log(`${i}`, mark, '=', totalSum );
// }
// const average = totalSum / amount;
// console.log(marks, 'average is', average)
