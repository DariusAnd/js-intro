console.clear();

const marks = [10, 2, 8, 4, 6];

// FOR:
const doubleMarksFor = [];
for (let i = 0; i < marks.length; i++){
    const mark = marks[i];
    const doubleMark = mark * 2;
    doubleMarksFor.push(doubleMark);
    // doubleMarksFor.push(marks[i] * 2);
}
console.log('FOR:', doubleMarksFor);

// FOR-OF:
const doubleMarksForOf = [];

for (const mark of marks) {
    doubleMarksForOf.push(mark * 2);
}
console.log('FOR-OF:', doubleMarksForOf);

console.log('======================');

// MAP: 1
function doubleOrNothing (number) {
    return number * 2;
}

const doubleMarkMap = marks.map(doubleOrNothing);

console.log('MAP:', doubleMarkMap);

// =====2======================================
const doubleOrNothing2 = n => n * 2;

const doubleMarkMap2 = marks.map(doubleOrNothing2);

console.log('MAP2:', doubleMarkMap2);

// ======3=====================================
const doubleMarkMap3 = marks.map(n => n * 2);

console.log('MAP3:', doubleMarkMap3);
console.log('===========================');

// ===========================================

const badMarks = [10, 2, -6, -14, 8, true, 4, 0, NaN, null, 3.14, Math.PI, 'Blogas pazimys']

function arSkaicius (number) {
    if (typeof number === 'string') {
        return false;
    }
    if (number <= 0) {
        return false
    }
    if (number > 11) {
        return false
    }
    if (isNaN(number)) {
        return false
    }
    if (number % 1 !== 0) {
        return false
    }
    return true;
}
const goodMarksOnly = badMarks.filter(arSkaicius);

console.log(goodMarksOnly);

// =================================================
const goodMarksOnly2 = badMarks
.filter(n => typeof n === 'number')
.filter(n => isFinite(n))
.filter(n => n > 0)
.filter(n => n < 11 )
.filter(n => Number.isInteger(n))   

console.log(goodMarksOnly2)

// =================================================
const goodMarksOnly3 = badMarks
.filter(n => typeof n === 'number' && isFinite(n) && n > 0 && n < 11 && Number.isInteger(n))

console.log(goodMarksOnly3)

// =================================================
const goodMarksOnly4 = badMarks
.filter(n => Number.isInteger(n) && n > 0 && n < 11)

console.log(goodMarksOnly4)

console.clear();

const stringList = ['a', 'A', 'b', 'B', 'ab', 'AB', 'labas', 'rytas'];
console.log(stringList);

stringList.sort();
console.log(stringList);

// ===================================================
const numberList = [10, 2, 8, 4, 6, 20, 22, 28, 24, 26];
console.log(numberList);

numberList.sort();
console.log(numberList);

numberList.sort((a, b) => a - b);
numberList.sort((a, b) => b - a);
console.log(numberList);

// ===================================================
console.clear();

const family = [
    {name: 'Maryte', age: 88},
    {name: 'Jonas', age: 99},
    {name: 'Ona', age: 66},
    {name: 'Petras', age: 77},
    ];
    
// Isrikiuoti ir atspausdinti pgl amziu 1oje eiluteje:
const fancyFamily = family
    .sort((a, b) => a.age - b.age)
    .map(user => user.name)
    .join(', ') + '.'
console.log(fancyFamily);

// ---------------
family.sort();
console.log(family);

family.sort((a, b) => a.age - b.age);
console.log(family);
// --------------
const namesMap = family.map(user => user.name);
const familyString2 = namesMap.join(', ') + '.';
console.log(familyString2);

// ----------------
const names = [];

for (const user of family){
    names.push(user.name);
}
const familyString = names.join(', ') + '.';
console.log(familyString);
console.clear();

const pazymiai = [10, 2, 8, 4, 6];
console.log(pazymiai);

let pazymiuSuma = 0;
for (const pazymys of pazymiai){
    pazymiuSuma += pazymys;
}
const vidurkis = pazymiuSuma / pazymiai.length;
console.log('Vidurkis:', vidurkis);

// ============================
function redFunc(total, number){
    return total + number;
}
const redSuma = pazymiai.reduce(redFunc);
console.log(redSuma);
// ============================

const redSuma2 = pazymiai.reduce((total, number) => total + number);
console.log(redSuma2);

const redSuma3 = pazymiai.reduce((t, n) => t + n, 100);
console.log(redSuma3);

// ==========================================
const red1 = [1, 2, 3, 4].reduce((t, n) => t + n);
console.log(red1);
//  1+2+3+4

const red2 = [1, 2, 3, 4].reduce((t, n) => t + n, 0);
console.log(red2);
// 0+1+2+3+4

const red3 = [1, 2, 3, 4].reduce((t, n) => t - n);
console.log(red3);
// 1-2-3-4

const red4 = [1, 2, 3, 4].reduce((t, n) => t - n, 0);
console.log(red4);
// 0-1-2-3-4

console.clear();

const students = [
    {   
        name: 'Maryte',
        marks: [88, 'asd', 10, 2]
    },
    {
        name: 'Jonas', 
        marks: [99, true]
    },
    {
        name: 'Ona', 
        marks: [66, [], Infinity, 7, 7, 7, 7, 7, 7, 7]
    },
    {
        name: 'Petras', 
        marks: [77, null, undefined, {}, 2, 4, 6, 8, 10]
    },
];
/*
Vardenis4: 2;
Vardenis1: 3;
Vardenis2: 5;
Vardenis3: 9;
 */

const teacher = students
    .map(student => (
        {
            ...student,
            marks: student.marks
            .filter(n => Number.isInteger(n) && n > 0 && n < 11)
        }
    ))
    .map(student => (
        {
            ...student,
            average: student.marks.reduce((t, n) => t + n, 0) / student.marks.length || -1,
        }
    ))
    .sort((s1, s2) => s1.average - s2.average)
    .map(student => `${student.name}: ${student.average === -1 ? 'Neturi pazymiu' : student.average}`)
    .join('\n');
console.log(teacher);