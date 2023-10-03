// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

console.clear();

console.log('labas'.length);
console.log('     '.length);
console.log('\n\'\\'.length);

console.log('labas'[0], 'labas'.at(0));
console.log('labas'[1], 'labas'.at(1));
console.log('labas'[2], 'labas'.at(2));
console.log('labas'[3], 'labas'.at(3));
console.log('labas'[4], 'labas'.at(4));
console.log('labas'[-1], 'labas'.at(-1));
console.log('labas'[-2], 'labas'.at(-2));
console.log('labas'[-3], 'labas'.at(-3));
console.log('labas'[-4], 'labas'.at(-4));
console.log('labas'[-5], 'labas'.at(-5));
console.log('labas'[-6], 'labas'.at(-6));

const hi = 'labas';
console.log(hi.at(-2), hi[hi.length-2]);

console.clear();

console.log('a'.charCodeAt(0));
console.log('b'.charCodeAt(0));
console.log('labas'.charCodeAt(0));
console.log('labas'.charCodeAt(1));
console.log('labas'.charCodeAt(4));

console.clear();
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));

let str3 = 'Hello';
const str4 = 'World';

str3 += ' ';
str3 += str4;
console.log(str3);

let str5 = 'Hello';
str5 += ' ' + str4;
console.log(str5);

console.clear();

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];
const start = 'Abecele: ';

let a1 = '';
a1 += start;
a1 += abc[0];
a1 += abc[1];
a1 += abc[2];
a1 += abc[3];
a1 += abc[4];
a1 += abc[5];
console.log(a1);

let a2 = start + abc[0] + abc[1] + abc[2] + abc[3] + abc[4] + abc[5];
console.log(a2);

let a3 = start;
for (let i = 0; i < abc.length; i++) {
    a3 += abc[i];
}

const a4 = start.concat(...abc); // '...' isvardija visas masyvo reiksmes!
console.log(a4)

console.clear();

console.log('labas rytas'.includes('a'));
console.log('labas rytas'.includes('as'));
console.log('labas rytas'.includes('A'));
console.log('labas rytas'.includes(' '));
console.log('labas rytas'.includes('ab'));
console.log('labas rytas'.includes('rytas'));
console.log('labas rytas'.includes('labas')); // .includes - ar yra?

console.log('labas rytas'.indexOf('a'));
console.log('labas rytas'.indexOf('as'));
console.log('labas rytas'.indexOf('A'));
console.log('labas rytas'.indexOf(' '));
console.log('labas rytas'.indexOf('ab'));
console.log('labas rytas'.indexOf('rytas'));
console.log('labas rytas'.indexOf('labas')); // .indexOf - ar yra ir kur?

console.log('===================')

console.log('labas rytas'.indexOf('a'));
console.log('labas rytas'.indexOf('a', 0));
console.log('labas rytas'.indexOf('a', 1));
console.log('labas rytas'.indexOf('a', 2));
console.log('labas rytas'.indexOf('a', 4));
console.log('labas rytas'.indexOf('a', 10));

function kiek(tekstas, raide) {
    return 0;
}
console.log(kiek('labas', 'a'));

console.clear();
console.log('a'.repeat(6));
console.log('labas '.repeat(6));

console.clear();
const r1 = 'labas';
const r2 = r1.replace('a', 'x');

console.log(r1, r2);

const r3 = 'Labas rytas';
const r4 = r3.replace('rytas', 'vakaras');
console.log(r3, r4);

const r5 = r3.replace('xxx', 'yyy');
console.log(r3, r5);

const r6 = 'labas';
const r7 = r6.replaceAll('a', '_');
console.log(r6, r7);

let r8 = 'vasara';
r8 = r8.replace('a', 'o');
console.log(r8);

r8 = r8.replace('a', 'o');
console.log(r8);

r8 = r8.replace('a', 'o');
console.log(r8);

console.clear();

const kopustas = 'kopustas';
console.log(kopustas.slice(0, 0));
console.log(kopustas.slice(0, 1));
console.log(kopustas.slice(0, 2));
console.log(kopustas.slice(0, 3));
console.log(kopustas.slice(1, 4));
console.log(kopustas.slice(4, 7));
console.log(kopustas.slice(-3));

const pvz = 'Labas rytas suraitytas vistos koja parasytas!'
console.log(pvz.split('x'));
console.log(pvz.split('a')); //.split() sukarpo teksta
console.log(pvz.split(' '));

const pvz2 = 'vasara';
const pvz2PoSplit = pvz2.split('a');
console.log(pvz2PoSplit);

console.log('sasasasas'.split('a'));
console.log('sasasasas'.split('s'));

console.log('x'.split('x'));
console.log('asdas'.split('asdas'));
console.log(''.split(''));
console.log('labas'.split(''));

// ~45min praleidau


console.log('Vasara'.startsWith('a'));
console.log('Vasara'.startsWith('v'));
console.log('Vasara'.startsWith('V'));
console.log('Vasara'.startsWith('Vas'));
console.log('Vasara'.startsWith(''));
console.log(''.startsWith(''));


console.log('Vasara'.endsWith('a'));
console.log('Vasara'.endsWith('x'));
console.log('Vasara'.endsWith('u'));
console.log('Vasara'.endsWith('ara'));
console.log(''.endsWith(''));

console.clear();

const pasaka = 'Ryto pasaka: Apie Jonuka ir Gretute.';
const pasakaUppercase = pasaka.toUpperCase();
const pasakaLowercase = pasaka.toLowerCase();

console.log(pasaka);
console.log(pasakaUppercase);
console.log(pasakaLowercase);

const tarpai = '       labas      '
const beTarpu = tarpai.trim();
console.log(beTarpu);
console.log(`"${tarpai}"`);
console.log(`"${beTarpu}"`);

const tarpai2 = '       labas       rytas      '
console.log(`"${tarpai2}"`);
console.log(`"${tarpai2.trim()}"`);

console.clear();