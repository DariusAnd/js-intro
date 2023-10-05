console.clear();

const n1 = 70;
const n2 = 50;

// 1) function declaration
function suma(a, b) {
    return a + b;
}
console.log(`${n1} + ${n2} = ${suma(n1, n2)}`);
//---------------------------------------------------------------
// 2) kintamajam priskirti bevarde/anonimine funkcija.
const skirtumas = function (a, b) {
    return a - b;
}
console.log((`${n1} - ${n2} = ${skirtumas(n1, n2)}`));
//--------------------------------------------------------------
// 3) arrow (rodykline) function:
const sandauga =  (a, b) => {
    return a * b;
}
console.log((`${n1} * ${n2} = ${sandauga(n1, n2)}`));
//----------------------------------------------------------------
// 4) arrow function:
// jeigu logikos bloke yra tik 1 procedura (statement):
// - galima nenaudoti 'return'

const dalmuo =  (a, b) => a / b;

console.log((`${n1} / ${n2} = ${dalmuo(n1, n2)}`));
//---------------------------------------------------------------
// 5) arrow function:
// jeigu parametru bloke yra tik 1 parametras
// tai galima nerasyti ():

const kvadratu = a => a **2;

console.log((`${n1} ** 2 = ${kvadratu(n1)}`));
console.log((`${n2} ** 2 = ${kvadratu(n2)}`));
//---------------------------------------------------------------

// funkcija gauna zodi ir grazina pirma raide:

const pirmaRaide = zodis => zodis[0];

// console.log(pirmaRaide(0));
// 0 = false, visi kt skaiciai = true

function firstLetter(str) {                 
    if (typeof str !== 'string') {
        return 'Error: ne tekstas';
    }
    if (str.length === 0) {
        return 'Error: zody nera simboliu!';
    } 
    return str[0];
}   

const firstLetter2 = function (str) {                 
    if (typeof str !== 'string') {
        return 'Error: ne tekstas';
    }
    if (str.length === 0) {
        return 'Error: zody nera simboliu!';
    } 
    return str[0];
}   

const firstLetter3 = (str) => {                 
    if (typeof str !== 'string') {
        return 'Error: ne tekstas';
    }
    if (str.length === 0) {
        return 'Error: zody nera simboliu!';
    } 
    return str[0];
}   

const firstLetter4 = str => {                 
    if (typeof str !== 'string') {
        return 'Error: ne tekstas';
    }
    if (str.length === 0) {
        return 'Error: zody nera simboliu!';
    } 
    return str[0];
}   

const firstLetter5 = str => {             
    return typeof str !== 'string'
        ? 'Error: ne tekstas'
        : str.length === 0
            ?  'Error: zody nera simboliu!'
            : str[0];
}   

const firstLetter6 = str => typeof str !== 'string'   
    ? 'Error: ne tekstas'
    : str.length
        ? str[0]
        :  'Error: zody nera simboliu!'

const errors = {
    notString: 'Ne tekstas',
    empty: 'Zody nera simboliu',
}
const firstLetter7 = str => typeof str !== 'string'   
    ? errors.notString
    : str.length
        ? str[0]
        : errors.empty;


console.log(firstLetter(5));
console.log(firstLetter(''));
console.log(firstLetter('Labas'));
console.log(firstLetter2('Labas'));
console.log(firstLetter3('Labas'));
console.log(firstLetter4('Labas'));
console.log(firstLetter5(''));
console.log(firstLetter6('Balalaika'));
console.log(firstLetter7('Balalaika'));
