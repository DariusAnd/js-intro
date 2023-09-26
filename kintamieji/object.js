/*
OBJECT - objektas
*/

console.clear();

// vartotojas: vardas, amzius, ar vedes
/*
const jonasName = Jonas;
const jonasAge = 99;
const jonasIsMarried = true;

const maryteName = Maryte;
const maryteAge = 88;
const maryteIsMarried = false;
*/
const jonasData = ['Jonas', 99, true];
const maryteData = ['Maryte', 88, false];

const jonasName = jonasData[0];
const jonasAge = jonasData[1];
const jonasIsMarried = jonasData[2];

const maryteName = maryteData[0];
const maryteAge = maryteData[1];
const maryteIsMarried = maryteData[2];

console.log(jonasName, jonasAge, jonasIsMarried);
console.log(maryteName, maryteAge, maryteIsMarried);

console.clear();

// key: vallue
const jonas = {
    isMarried: true,
    name: 'Jonas',
    age: 99,
};

console.log(jonas);
console.log(jonas['name'], jonas.name);
console.log(jonas['age'], jonas.age);
console.log(jonas['isMarried'], jonas.isMarried);

jonas.age++
jonas.age = 100;
console.log(jonas);

jonas.isMarried = false;
console.log(jonas);

jonas.name = 'John';
console.log(jonas);

const arr = [1, 2, 3, 4];
console.log(arr);

arr[1] = 22;
console.log(arr);

// pvz:
// const anyNmb = 13;
// const anyNmb = 6; - konstantos kita reiksme keisti negalima!!!
// t.p. ir masyvui negalima priskirti naujo masyvo, tik keisti esamo masyvo elementus!

console.clear();

let a = 1;
let b = a;
console.log('a: ', a, 'b: ', b);

a = 2;
console.log('a: ', a, 'b: ', b);

b = 3;
console.log('a: ', a, 'b: ', b);

console.clear();

const c = [1, 2];
const d = c;
console.log('c: ', c, 'd:', d);

c[0] = 111;
console.log('c: ', c, 'd:', d);

d[1] = 222;
console.log('c: ', c, 'd:', d);

d[2] = 333;
console.log('c: ', c, 'd:', d);

console.clear();

const e = {name: 'Edgaras', age: 99};
const f = e;

console.log('e:', e);
console.log('f:', f);

e.name = 'Fiona';

console.log('e:', e);
console.log('f:', f);

f.age = '35';

console.log('e:', e);
console.log('f:', f);
