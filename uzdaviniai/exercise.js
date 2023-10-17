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

const name3 = 'Vardelis';
const sName = 'Pavardis';
function lName(name3, sName){
  if (name3.length < sName.length){
    return name3;
  } else if (name3.length === sName.length) {
    return name3 + ' ' + sName;
  } else {
    return sName;
  }
}
console.log(lName(name3, sName));

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
