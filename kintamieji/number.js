/*
NUMBER

- teigiami / neigiami
- sveikieji / desimtainiai ~20 simboliu
- normalus / nenormalus

Inicijavimo budas:
- const (default)
- let (jei kinta informacija)
- var (niekada)

Matematiniai operatoriai:
+, -, *, /, **, %
+=, -=, *=, **=, %=
++, --, 
*/

const amzius = 99;
let pinigine = 0;
var minusas = -7.56;

console.log(amzius);
console.log(pinigine);
console.log(minusas);

const x1 = 1;
const x2 = 2;
const x3 = 3;
const x4 = 4;
const x5 = 5;

const n1 = 7;
const n2 = 5;

const sum = n1 + n2;
console.log(sum);

const diff = n1 - n2;
console.log(diff);

const multi = n1 * n2;
console.log(multi);

const div = n1 + n2;
console.log(div);

const complex = (2 + 2) *2
console.log(complex)

const exp1 = 2 + 2;
const exp2 = 2 * 2;
const exp3 = 2 ** 2;

console.log(exp1, exp2, exp3);

const exp4 = 2 ** 1;
const exp5 = 2 ** 2;
const exp6 = 2 ** 3;

console.log(exp4, exp5, exp6);

const begalybe = Infinity; //butinai is didziosios!
const minusBegalybe = -Infinity;

const x = 5 / 0;
console.log(x);

const k = -5 / 0;
console.log(k);

// not-a-number = NaN

const n = NaN;
console.log(n, NaN);

const liekana = 7 % 5;
console.log(liekana);

const liekana2 = 65 % 12;
console.log (liekana2);

console.clear();

//const wallet = 0;
//console.log('wallet:', wallet);

let wallet = 0;
console.log('wallet:', wallet);

wallet = wallet + 5;
console.log('wallet:', wallet);

wallet += 5;
wallet += 5;
wallet += 5;
console.log('wallet:', wallet);

wallet = wallet - 2;
console.log('wallet:', wallet);

wallet -= 2;
wallet -= 2;
wallet -= 2;
console.log('wallet:', wallet);

//lygiai taip pat su *, /, 

wallet *= 20;
console.log('wallet:', wallet);

wallet /= 2;
console.log('wallet:', wallet);

wallet **= 2;
console.log('wallet:', wallet);

wallet %= 13;
console.log('wallet:', wallet);

wallet *= 8;
console.log('wallet:', wallet);

const skaicius = 256;
const daliklis = 10;
const liekana3 = skaicius % daliklis;
console.log(liekana3);

const sveikaDalis = (skaicius-liekana3) / daliklis;
console.log(sveikaDalis);
console.log(sveikaDalis, '*', daliklis, '+', liekana3, '=', skaicius);

console.clear();

//const index = 0;
//index = index + 1; - const taip neveikia, bet 'let' piktnaudziauti taip pat nerekomenduojama!

let index = 0;
console.log('index:', index);

index = index + 1;
console.log('index:', index);

index += 1;
console.log('index:', index);

index++;
console.log('index:', index);

++index;
console.log('index:', index);

let i = 0;
console.log('i:', i);   // 0
console.log('i:', i++); // 0 -> 1
console.log('i:', i);   // 1
console.log('i:', i++); // 1 -> 2
console.log('i:', i);   // 2

console.log('==============');

let i2 = 0;
console.log('i2:', i2);
console.log('i2:', ++i2);
console.log('i2:', ++i2);
console.log('i2:', ++i2);
console.log('i2:', ++i2);

console.log('==============');

let m = 0
console.log(m--);
console.log(m--);
console.log(m--);
console.log(m--);
console.log(m--);
console.log(m);

console.log('==============');

let m2 = 0
console.log(--m2);
console.log(--m2);
console.log(--m2);
console.log(--m2);
console.log(--m2);
console.log(m2);

console.log('==============');

let klausimas = 10;
//console.log(++klausimas++); sitox variantas negalimas!
console.log(++klausimas);
console.log(++klausimas);
console.log(++klausimas);

console.log('==============');
console.clear();