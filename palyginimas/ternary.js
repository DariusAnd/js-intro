console.clear();

const amzius = 18;
const limitas = 18;
// 1) varianc
let zinute1 = '';

// jeigu pilnametis -> Uzeik!
// jei nepilnametis - > Sorry...

if (amzius < limitas) {
    zinute1 = 'Sorry..'
} else {
    zinute1 = 'Uzeik!'
}
console.log('>>>', zinute1)
//----------------------------------------------------------------
// 2) varianc
let zinute2 = 'Uzeik!';

if (amzius < limitas) {
    zinute2 = 'Sorry..'
}
console.log('>>>', zinute2)
//----------------------------------------------------------------
// 3) varianc - Ternary!
const zinute3 = amzius < limitas ? 'Sorry...' : 'Uzeik!';

console.log('>>>', zinute3)
console.log('----------------------------------------')
//---------------------------------------------------------------
// Visi skaiciai atsako pozityviai - 'true', iskyrus nuli!!!
// 0 = 'false'!!!

const q1 = 0 > 1 ? 2 : 3;
console.log(q1);

const q1a = 0 > 1 
                ? 2 
                : 3;

console.log(q1a);
//-------------------------------------------------------
const q2 = 0 < 1 ? 2 : 3;
console.log(q2);

const q2a = 0 < 1 
                ? 2 
                : 3;

console.log(q2a);
//-------------------------------------------------------
//-------------------------------------------------------

const q3 = 0 === 1 ? 2 : 3;
console.log(q3);

const q3a = 0 === 1 
                    ? 2 
                    : 3;

console.log(q3a);
//-------------------------------------------------------

const q4 = 0 > 1 ? 2 ? 3 : 4 : 5;
console.log(q4);

const q4a = 0 > 1 
                ? 2 
                    ? 3 
                    : 4 
                : 5;
console.log(q4a);
//-------------------------------------------------------
const q5 = 0 < 1 ? 2 ? 3 : 4 : 5;
console.log(q5);

const q5a = 0 < 1 
                ? 2 
                    ? 3 
                    : 4 
                : 5;
console.log(q5a);
//---------------------------------------------------------

const q6 = 0 > 1 ? 2 ? 3 : 4 : 5 ? 6 : 7;
console.log(q6);
const q6a = 0 > 1 
                ? 2 
                    ? 3 
                    : 4 
                : 5 
                    ? 6 
                    : 7;
console.log(q6a);