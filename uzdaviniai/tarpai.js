console.clear();
/*
Duodamas tekstas/
Jame yra tarpai.
Padaryti, kad:
- pradzioje nebutu tarpu;
- pabaigoje nebutu tarpu;
- jei tarp zodziu is eiles yra daugiau nei vienas tarpas
, turi likti tik 1!
*/

const str1 = '      labas     ';
const ats1 = 'labas';
const bandymas1 = str1.trim();
console.log(`"${bandymas1}":`, ats1);

const str2 = '     labas     rytas   tau     ';
const ats2 = 'labas rytas';
let bandymas2 = str2.trim();
//nespiejo...
//bandymas2 = bandymas2.replaceAll('  ', ' ');
//bandymas2 = bandymas2.replaceAll('  ', ' ');
//bandymas2 = bandymas2.replaceAll('  ', ' ');
//bandymas2 = bandymas2.replaceAll('  ', ' '); - kol visi tarpa nepakeiciami i 1. 

for (; bandymas2.includes('..');) {
    bandymas2 = bandymas2.replaceAll('  ', ' ');
}

console.log(`"${bandymas2}":`, ats2);