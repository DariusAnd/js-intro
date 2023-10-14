/*
IF - palyginimo salyga

Palyginimo operatoriai:
- visi: >, <, ==, ===, >=, <=, !=, !==
- naudotini: >, <, ===, >=, <=, !==
- nenaudotini: ==, !=   (neegzistuojantys !<, !>)
Loginiai operatoriai:
&&, ||, !

kodo sablonai:
if () {} // Ats pateikiamas tik esant atitikimui uzduotai salygai.
if () {} else {}
if () {} else if () {}
if () {} ... else if () {}
if () {} ... else if () {} ... else {}
*/

console.clear();

if (4 > 2) {
    console.log(`4 yra daugiau uz 2`);
}

if (5 < 0) { 
console.log(`5 yra maziau uz 0`)
}

if (true) {
    console.log(true);
}

if (false) {
    console.log(false); // Spausdinama tik esant atitikimui uzduotai salygai.
}

console.clear();

const a = 7;
const b = 55;

if (a > b) {
    console.log(`A yra daugiau uz B`);
} else {
    console.log(`A nera daugiau uz B`);
    //console.log(`A yra maziau arba lygu uz B`);
}
console.clear();
//===================

const day = 2;

// 1 2 3 4 5 6 7
// 8 9 10 11 12 13 14
// 15 16 17 18 19 20 21
// 22 23 24 25 26 27 28

if (day % 7 == 1) {
    console.log(`Pirmadienis`);
} else if (day % 7 == 2) {
    console.log(`Antradienis`);
} else if (day % 7 == 3) {
    console.log(`Treciadienis`);
} else if (day % 7 == 4) {
    console.log(`Ketvirtadienis`);
} else if (day % 7 == 5) {
    console.log(`Penktadienis`);
} else if (day % 7 == 6) {
    console.log(`Sestadienis`);
} else if (day % 7 == 0) {
    console.log(`Sekmadienis`);
} else {
    console.log(`Tokia diena neegzistuoja!`);
}

console.clear();
// // Kodo nestinimas

const diena = 24;

if (diena % 7 === 1) {
    console.log(`Pirmadienis`);
} else {
    if (diena % 7 === 2) {
        console.log('Antradienis');
    } else {
        if (diena % 7 === 3) {
            console.log('Treciadienis');
        } else { 
            if (diena % 7 === 'Ketvirtadienis'){
                console.log('Ketvirtadienis');
            } else {
                if (diena % 7 === 5){
                    console.log('Penktadienis');
                } else {
                    if (diena % 7 === 6){
                        console.log('Sestadienis');
                    } else {
                        if (diena % 7 === 7) {
                            console.log('Sekmadienis');
                        } else {
                            console.log('Tokia diena neegzistuoja');
                        }
                    }
                }
            }
        }
    }
}



// /*
// Gali buti:
// - diena / naktis
// - lyja / nelyja
// */

// const parosMetas = 'diena';
// const arLyja = true;
// const temp = -1;
// const kadasilta = 20;
// const arAsSuStriuke = true;

// if (parosMetas === 'diena') {
//     if (arLyja) {
//         console.log('Diena, lyja');
//     } else {
//         console.log('Diena, sausa');
//     }
// } else {
//     if (arLyja) {
//         console.log('Naktis, lyja');
//     } else {
//         console.log('Naktis, nelyja');
//         }
//     }
            // 46 grupe, 13 video 26min.
//     if (parosMetas === 'diena' && arLyja === true && temp >= kadasilta){
//         console.log('Diena, lyja, silta');        
//     } else if (parosMetas === 'diena' && arLyja === true && temp < kadasilta){
//         console.log('Diena, lyja, salta');        
//     } else if (parosMetas === 'diena' && arLyja === false && temp >= kadasilta) {
//         console.log('Diena, nelyja, silta');    
//     } else if (parosMetas === 'diena' && arLyja === false && temp < kadasilta) {
//         console.log('Diena, nelyja, salta');    
//     } else if (parosMetas === 'naktis' && arLyja === true && temp >= kadasilta) {
//         console.log('Naktis, lyja, silta');
//     } else if (parosMetas === 'naktis' && arLyja === true && temp < kadasilta) {
//         console.log('Naktis, lyja, salta');
//     } else if (parosMetas === 'naktis' && arLyja === false && temp >= kadasilta) {
//         console.log('Naktis, nelyja, silta');
//     } else if (parosMetas === 'naktis' && arLyja === false && temp < kadasilta) {
//         console.log('Naktis, nelyja, salta');
//     }

    // console.clear();

    // const g = 7;
    // const h = 7;

    // if (g > h) {
    //     console.log('Daugiau');
    // } else {
    //     console.log('Ne daugiau');
    // }

//     // !== vs != 
//     // === vs == : !=, == - leidzia palyginti reiksmes net ir skirtingu tipu
//     // kintamuju, pvz number ir string, !== ir === to daryti neleidzia

// if (7 === '7') {
//     console.log(true);
// } else {
//     console.log(false);
// }

const w = 1;
const e = 'A';

if (w > e) {
    console.log(`'${w}' yra daugiau uz '${e}'`);
} else {
    console.log(`'${w}' yra maziau arba lygu uz '${e}'`);
}

// !true
// !false
if (!true){
    console.log('true')
} else {
    console.log('false')
}
