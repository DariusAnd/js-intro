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

// key: vallue
const jonas = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
};

console.log(jonas);
console.log(jonas['name'], jonas.name);
console.log(jonas['age'], jonas.age);
console.log(jonas['isMarried'], jonas.isMarried);

jonas.age++
console.log(jonas);
