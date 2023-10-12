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