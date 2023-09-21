/*
STRING

Inicijavimas kabutemis: "", '' ir backtick'u ``
*/
//Teksto ilgis = kintamasis.length

console.clear(); // irasius gale - terminale bus tuscia.

const txt1 = "tekstas 1";
console.log(txt1);

const txt2 = 'tekstas 2';
console.log(txt2);

// Isspausdiniti vienguba kabute ('). Tekstas priimamas tik tarp analogisku kabuciu!
const kabute1 = "Vienguba kabute (').";
console.log(kabute1);

// Isspausdiniti dviguba kabute (").
const kabute2 = 'Dviguba kabute (").';
console.log(kabute2);

// Vienguba (') ir dviguba (") kabutes.   ???
const kabute121 = "Vienguba (') ir dviguba (\") kabutes.";
console.log(kabute121);

const kabute122 = 'Vienguba (\') ir dviguba (") kabutes.';
console.log(kabute122); // \ - prilygina tekstui.

const kabute123 = 'Vienguba (\') ir dviguba (\") kabutes.';
console.log(kabute123); // \ - prilygina tekstui.

const kabute124 = "Vienguba (\') ir dviguba (\") kabutes.";
console.log(kabute124); // \ - prilygina tekstui.

const back = '\\';
console.log(back); // \\ - 1as\prilygina tekstui, jei reikia 2 - 
                   // - reikia nurodyt 4!
const back1 = '\\\\';
console.log(back1);

const formatuotasTekstas = 'Labas \nrytas, \nLietuva!'; // atspausdinti po viena zodi? \n
console.log(formatuotasTekstas);// \n = new line, \r = return; 

/*
\n - nusileidzia zemyn
Labas 
      rytas 
            Lietuva
\r - grizta i eilutes pradzia
Labas\rrytas\rLietuva
Lietuva
*/

//Pvz:
const gg = 'gggggg\raa';
console.log(gg);
// ats: aaggg (po 'r' einantis textas pakeicia pradzioj esanti);

const lrl = "Labas \n\r\
rytas, \n\r\
Lietuva!";
console.log(lrl);

//Backtick - `` - moderniose narsyklese!

const backtick = `Labas
rytas
Lietuva!`
console.log(backtick);

console.clear();

const vardas = 'Chuck';
console.log(vardas, vardas.length);
console.log(vardas, vardas.lenght); //suklydus rasyboj length!

console.log(vardas, '=', vardas.length, 'simboliai');

const pavarde = 'Norris';

const pilnasVardas = 'Chuck Norris';
console.log(pilnasVardas, pilnasVardas.length);

const fullname = vardas + pavarde;
console.log(fullname);

const fullname1 = vardas + " " + pavarde; //" " = tarpas tarp simboliu!
console.log(fullname1);

console.clear();

//Labas rytas Lietuva!

const labas = 'Labas';
const parosMetas = 'vakaras';
const lietuva = 'Lietuva';
const valstybe = 'Latvija';

const lrl2 = labas + ' ' + parosMetas + ', ' + lietuva + '!';
console.log(lrl2);

//const lrl3 = `Labas rytas, Lietuva!`; su backtikais

const lrl3 = `${labas} ${parosMetas}, ${valstybe}!`;
console.log(lrl3);

console.clear();

const n1 = 5 + 7; 
console.log(n1);

const n2 = 5 + "7";
console.log(n2);

const n3 = '5' + 7;
console.log(n3);

const n4 = '5' + '7';// lygiai tas pats ir su *, **, %, etc.
console.log(n4);

const n5 = 7 - 5;
console.log(n5);

const n6 = '7' - 5;
console.log(n6);

const n7 = 7 - '5';
console.log(n7);

const n8 = '7' - '5';
console.log(n8); // visi sie veixmai galimi tik tarp skaiciu!

const ll = 'labas' - 'l';
console.log(ll); //NaN - not a number! (skaicius, bet ale nenormalus :))