console.clear();
const skaicius = 256;
const daliklis = 10;
const liekana3 = skaicius % daliklis;
console.log(liekana3);

const sveikaDalis = (skaicius-liekana3) / daliklis;
console.log(sveikaDalis);
console.log(sveikaDalis * daliklis + liekana3);



// function greet() {
//     return "hello world!";
//   }

function kvdt(x) {
    return x ** 2;
}
console.log(kvdt(3));

function getMax2() { 
    return  {
      name: 'Max Headroom'
    }
  }
console.log(getMax2());

function areYouPlayingBanjo(name) {
    if (name[0] === 'R' || name[0] === 'r') {
      return `${name} plays banjo`;    
    }  else {
      return `${name} does not plays banjo`;    
    }
  }
  console.log(areYouPlayingBanjo('Rokas'));
  console.log(areYouPlayingBanjo('Jonas'));

  console.clear();

  function getPlanetName(id){
    var name;
    switch(id){
    case 1:
    name = 'Mercury'
    break;
    case 2:
    name = 'Venus'
    break;
    case 3:
    name = 'Earth'
    break;
    case 4:
    name = 'Mars'
    break;
    case 5:
    name = 'Jupiter'
    break;
    case 6:
    break;
    name = 'Saturn'
    case 7:
    name = 'Uranus'
    break;
    case 8:
    name = 'Neptune'
    break;
    }
    
    return name;
  }
  console.log(getPlanetName(1))

  console.clear();

  function solution(a, b){
    if (a.length < b.length) 
      return a +  b + a;
    else
      return b + a + b;
    }

const solution1 = (a, b) => a.length < b.length ? a + b + a : b + a + b;

console.log(solution1('2', '33'));
console.log(solution1('33', '2'));

console.clear();

// var name = 'Abe';
// var greet_abe = function() {
//   return "Hello, " + name + '!';
// };
// var name2 = 'Ben';
// var greet_ben = function() {
//   return "Hello, " + name2 + '!';
// };


var name = 'Abe';
var greet_abe = function() {
  return "Hello, " + name + '!';
};
var name2 = 'Ben';
var greet_ben = function() {
  return "Hello, " + name + '!';
};
console.log(name);

const name1 = 'Abe';
const greetName = () => `Hello, ${name1}`

console.log(greetName());
console.clear();

//"The greatest victory is that which requires no battle" --> 
//"battle no requires which that is victory greatest The"

const reverseWords = string => string.split(' ').reverse().join(' ');
console.log(reverseWords('Labas meile kaip laikais'));

function wrap(value) {
  return {
    value : value
  }
}


const greet = () => "hello world!";
console.log(greet());

console.clear();

const square = a => a**2;
console.log(square(3));

console.clear();

items = [{a: "b", c: "d"}];
console.log(items);

// console.clear();
// const evenOrOdd = 


const jonoUgis = 1.95;
const jonoSvoris = 92;
const markoUgis = 1.69;
const markoSvoris = 78;

const kmi = function (ugis, svoris) {
  return +(svoris / ugis**2).toFixed(1);
}
const jonoKmi = kmi(jonoUgis, jonoSvoris);
const markoKmi = kmi(markoUgis, markoSvoris);

console.log(jonoKmi);
console.log(markoKmi);

if (markoKmi > jonoKmi) {
  console.log(`markHigherBMI - true`)
} else {
  console.log(`markHigherBMI - false`)
}

function vidurkis (array, array2) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  };
  const average = sum / array.length;
  
  let sum2 = 0;
  for (let i = 0; i < array2.length; i++) {
    sum2 += array2[i];
  };
  const average2 = sum2 / array2.length;
}

function greet1(name){
  if (name === 'Johhny') {
    return 'Hello, my love!';
  } else {
    return `Hello, ${name}!`;
  }
}
console.log(greet1('Bobby'));
console.log(greet1('Johhny'))

const testEven = n => (n % 5);

console.log(testEven(29));

const multiply = (a, b) => a * b;
console.log(multiply(21, 13));

const problem = x => typeof x !== 'string' ? (x * 50 +6) : 'Error';
console.log(problem(9));

function problem1(x){
 if( typeof x === 'string') {
  return "Erorr";
 } else {
  return x * 50 + 6;
 }
}
console.log(problem1(4));

function cookie(x){
  if (typeof x === "string" ){
    return "Who ate the last cookie? It was Zach!";
  } else if (typeof x === "number" ){
    return "Who ate the last cookie? It was Monica!";
   } else {
    return "Who ate the last cookie? It was the dog!";
  }
}

function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number; counter ++){
    newArray.push(counter);
  }
  
  return newArray;
}

console.log(createArray(5));

//celsius = (fahrenheit - 32) * (5/9)

// function weatherInfo(temp){
//   var c = convertToCelsius(temp)
//   if (c <= 0) {
//     return (`${c} is freezing temperature`)
//   } else {
//     return (`${c} is above freezing temperature`)
//   }
// }

// function convertToCelsius (temperature) {
//   var celsius = (temperature - 32) * (5/9)
//   return celsius
// }
// console.log(weatherInfo(60))

function weatherInfo(t){
  c = (t - 32) * 5 / 9;
  return c <= 0 ? `${c} is freezing temperature` : `${c} is above freezing temperature`;
}
console.log(weatherInfo(70));

// function checkForFactor (base, factor) {
//      if (base % factor === 0){
//      return true
//    } else {
//      return false
//    }
//  }
// console.log(checkForFactor(7, 3));

const checkForFactor = (base, factor) => base % factor === 0
console.log(checkForFactor(20, 5));

function abc(num){
  let sum = 0
  for (let i = 0; i <= num; i++) {
    sum += i;
  }
    return sum;
}
console.log(abc(23));

const paperwork = (n, m) => n < 0 || m < 0 ? 0 : n * m;
console.log(paperwork(5, 3));


for (let i = 5; i > 0; i--){
  console.log(i);
}

console.clear()

// const tips = a => (a <= 300 && a >=50) ?  a + a * 0.15 : a + a * 0.20;

function tips(a){
  if (a <= 300 && a >=50){
    return (a + a * 0.15);
  } else {
    return (a + a * 0.2);
  }
}
console.log(tips(60 ));

// const d = new Date();
// year = d.getFullYear();
// console.log(year);

console.clear();

// const d = new Date();
// month = d.getMonth();
// console.log(month);

const d = new Date();
d.setFullYear(2020);
console.log(d);
console.log(d);

let r = Math.random();
console.log(r);

// let x = Math.max(5, 100, 57);
// console.log(x);

let z = Math.round(6.51)
console.log(z);

let x = Math.sqrt(9);
console.log(x);

for (let i = 0; i <= 9; i++) {
  console.log(i);
}

const fruits = ["Apple", "Banana", "Orange"];
for (x of fruits);
console.log(x); 

let i = 0
while (i < 10){
  console.log(i); 
  i++
}
console.clear();

for (i = 0; i < 10; i++){
  console.log(i);
  if (i === 5){
    break;
  }
}


console.clear();

for (i = 0; i < 10; i++){
  if (i === 5);{
  continue;
  }
  console.log(i);
}
console.log(i);
console.clear();
/*
1. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus
 vardą ir pavardę kaip stringus (Jonas Jonaitis). 
 Atspausdinti trumpesnį stringą.
*/

const fName = 'Vardelis';
const sName = 'Pavardis';
function lName(fName, sName){
  if (fName.length < sName.length){
    return fName;
  } else if (fName.length === sName.length) {
    return fName + ' ' + sName;
  } else {
    return sName;
  }
}
console.log(lName(fName, sName));
console.log('---------------------');

/*
2. Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, 
pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). 
Parašykite kodą, kuris pagal gimimo metus paskaičiuotų 
jūsų amžių ir naudodamas vardo ir pavardės kintamuosius 
atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".
*/


const name4 = 'Saulius';
const surName = 'Saulenis';
const bYear = 1985;
const year = 2023;
const answer = `Aš esu ${name4} ${surName}. Man yra ${year - bYear} metai(ų).`
console.log(answer);
console.log('---------------------');

/* 
3. Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir 
pavardę kaip stringus. Sukurti trečią kintamąjį ir jam priskirti stringą, 
sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
*/
const actName = 'Tas';
const actsName = 'Anas';
const newName = actName.slice(-3) + actsName.slice(-3);
// arba:
const newName1 = actName.substring(actName.length-3) + actsName.substring(actsName.length-3);
console.log(newName, newName1)
console.log('---------------------');
/* 

4. Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. 
Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  
Rezultatą atspausdinti.
*/
const s = 'Once upon a time in hollywood';
function replace(string) {
  const toReplace = new RegExp('[oO]', 'g');
  const replacement = '*';
  return string.replace(toReplace, replacement);
}
console.log(replace(s));
console.log('---------------------');

//  arba:

const x1 = s.split(/[Oo]/).join('*');
console.log(x1);
console.log('---------------------');

// ARBA:

function tale() {
  const str = 'Once upon a time in hollywood';
  const strToLower = str.toLowerCase();
  let result = '';
  for (let i = 0; i < strToLower.length; i++) {
    if (strToLower[i] === 'o') {
      result += '*';
    } else {
      result += str[i];
    }
  }
  return result;
}
console.log(tale());
console.log('---------------------');
/* 
5. Sukurkite keturis kintamuosius kuriems sugeneruokite 
atsitiktines reikšmes nuo 0 iki 2. 
Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. 
*/
function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function random(){
  const r1 = rand(0, 2);
  const r2 = rand(0, 2);
  const r3 = rand(0, 2);
  const r4 = rand(0, 2);
  
  let zeros = 0;
  let ones = 0;
  let twos = 0;

  rArray = [r1, r2, r3, r4];
  console.log(rArray);

  for (let i = 0; i < rArray.length; i++){
    if (rArray[i] === 0) { zeros++};
    if (rArray[i] === 1) { ones++};
    if (rArray[i] === 2) { twos++};  
  }
  return `0 = ${zeros}, 1 = ${ones}, 2 = ${twos}.`
}
console.log(random());
console.log('---------------------');

/* 
6. Pasinaudokite atsitiktinio skaičiaus generavimo funkcija. 
Sukurkite du kintamuosius ir naudodamiesi funkcija 
jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. 
Didesnę reikšmę padalinkite iš mažesnės. 
Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/
const num1 = Math.random() * 4;
const num2 = Math.random() * 4;

let result = num1 > num2 ? num1 / num2 : num2 / num1;

console.log(num1.toFixed(4));
console.log(num2.toFixed(4));
console.log(result.toFixed(2));
console.log('---------------------');

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const c1 = rand(1, 4);
const c2 = rand(1, 4);
const result1 = c1 > c2 ? c1 / c2 : c2 / c1;

console.log(c1);
console.log(c2);
console.log(result1.toFixed(2));
console.log('---------------------');


/* 
7. Naudokite funkciją ir sukurkite tris kintamuosius kuriems priskirkite atsitiktines
reikšmes nuo 0 iki 25. Raskite ir atspausdinkite vidurinę reikšmę.
*/
// (function(rand) - vesims sprendemams is 5ta uzdaven.)

const varThree = rand(0, 25);
const varFour  = rand(0, 25);
const varFive  = rand(0, 25);

function cmp(a, b) {
    return a - b;
  }
  
  const arr2 = [varThree, varFour, varFive].sort(cmp);
  console.log(arr2);
  console.log("Vidurinė reikšmė yra: ", arr2[1]);
  console.log('---------------------');
  
  // arba: 
  
  function randMid(){
    const m1 = rand(0, 25);
    const m2 = rand(0, 25);
    const m3 = rand(0, 25);
    
    const rArr = [m1, m2, m3];
    console.log(rArr);
    
    let minNum = rArr[0];
    let maxNum = rArr[0];
    let minNumIndex = 0;
    let maxNumIndex = 0;
    let midNum = 0;
    
    for(let i = 0; i < rArr.length; i++){
      if(rArr[i] < minNum){
        minNum = rArr[i];
        minNumIndex = i;
      }
      if(rArr[i] > maxNum){
        maxNum = rArr[i];
      maxNumIndex = i;
    }
    for(let i = 0; i < rArr.length; i++){
      if(i !== maxNumIndex && i !== minNumIndex){
        return midNum = rArr[i];
      }
    }
    return midNum;
  }
}
console.log(randMid());
console.log('---------------------');



/* 
8. Sukurti du kintamuosius. 
Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. 
Sukurti trečią kintamąjį ir jam priskirti stringą, 
sudarytą iš pirmų vardo ir pavardės kintamųjų raidžių. Jį atspausdinti.
*/
const nameBoth = actName[0] + actsName[0];
console.log(nameBoth);
console.log('---------------------');
/* 
9. Parašyti kodą, kuris generuotų atsitiktinį stringą iš lotyniškų mažųjų raidžių. 
Stringo ilgis 3 simboliai.
*/

function randomString(n){
  let result = '';
  for(let i =0; i < n; i++){
    result += String.fromCharCode(rand(97 ,122));
  }
  return result
}
console.log(randomString(5));
console.log('---------------------');
console.log(String.fromCharCode(97, 122));
console.log('---------------------');

function peopleWithAgeDrink(old) {
  if (old < 14){
    return 'drink toddy';
  } else if (old >= 14 && old < 18) {
    return 'drink coke';
  } else if ( old >= 18 && old < 21){
    return 'drink beer';
  } else {
    return 'drink whisky';
  }
};
console.log(peopleWithAgeDrink(20));
console.log('---------------------');

function getAverage(marks){
  let totalSum = 0;
  for (let i = 0; i < marks.length; i++){
    totalSum += marks[i];
  }
  aver = Math.floor(totalSum / marks.length);
  return aver
}
console.log(getAverage([16,8,3,12,9,15,10,2,13,13,19,4,14,17,8,7,8,2,5]));