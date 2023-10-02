/*
ARRAY - sarasas / masyvas / kolekcija / listas / matrica / arejas
*/

console.clear();

const tuscias = [];
console.log(tuscias);

// eiliskumas skaiciuojamas nuo 0!
//          index: 0, 1, 2, 3, 4... 
const pazymiai = [10, 2, 5, 9, 12];
console.log(pazymiai);

console.log('Pazymius', pazymiai, 'sudaro',  pazymiai.length, 'skaiciai');

const studentai = ['Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(studentai);
console.log(studentai, studentai.length);

const pirmasPazymys = pazymiai[0];
console.log(pirmasPazymys);

const antrasPazymys = pazymiai[1];
console.log(antrasPazymys);

const treciasPazymys = pazymiai[2];
console.log(treciasPazymys);

const ketvirtasPazymys = pazymiai[3];
console.log(ketvirtasPazymys);

const pazymioPozicija = pazymiai.lenght -1;

const paskutinisPazymys = pazymiai[pazymiai.length -1];
console.log(paskutinisPazymys);

console.clear();

// Masyvas pazymiu:
//Suskaiciuoti pazymiu vidurki ir isvesti sakiny:
//'Studentu pazymiu vidurkis yra:'

//Masyvas vietovardziu:
//Suformuoti sakini:
//"Musu aplankytos vietos: Vieta1, Vieta2, Vieta3."

const skaiciai = [9, 8, 6, 10, 8, 7];
const suma = skaiciai[0] + skaiciai[1] + skaiciai[2] + skaiciai[3] + skaiciai[4] + skaiciai[5];
const vidurkis = suma / skaiciai.length;

console.log('Studentų pažymių vidurkis yra: ',vidurkis);

//kitas variantas:

const marks = [9, 8, 6, 10, 8, 7];
/*
const marksSum = marks[0] + marks[1] + marks[2] + marks[3] + marks[4] + marks[5];
const markAv = marksSum / marks.length;
const studentMarks = `Studentų pažymių vidurkis yra: ${markAv}.`;

console.log(studentMarks);

variantas su 'Let':

let marksSum = 0;
marksSum = marksSum + marks[0];
marksSum = marksSum + marks[1];
marksSum = marksSum + marks[2];
marksSum = marksSum + marks[3];
marksSum = marksSum + marks[4];
marksSum = marksSum + marks[5];
*/

let marksSum = 0;
marksSum += marks[0];
marksSum += marks[1];
marksSum += marks[2];
marksSum += marks[3];
marksSum += marks[4];
marksSum += marks[5];

const markAv = marksSum / marks.length;
const studentMarks = `Studentų pažymių vidurkis yra: ${markAv}.`;

console.log(studentMarks);







const vietos = ['Kaunas,', 'Klaipėda,', 'Skuodas,', 'Vilnius,', 'Šiauliai.'];

console.log('Mūsų aplankytos vietos:', vietos[0], vietos[1], vietos[2], vietos[3], vietos[4]);

// arba:

const places = ['Siaure', 'Menulis', 'Pusiaujas'];
//const placesStr = `${places[0]}, ${places[1]}, ${places[2]}`;
//const placesSentence = `Mano aplankytos vetos: ${placesStr}.`;

//let placesStr = '';
//placesStr = placesStr + places[0];
//placesStr = placesStr + ', ';
//placesStr = placesStr + places[1];
//placesStr = placesStr + ', ';
//placesStr = placesStr + places[2];

let placesStr = '';
placesStr += places[0];
placesStr += ', ';
placesStr += places[1];
placesStr += ', ';
placesStr += places[2];

const placesSentence = `Mano aplankytos vetos: ${placesStr}.`;
console.log(placesSentence);

let a = 5;
let x = 7;

//x = x + ++a; // 13
//x = x++ + a; // 12

//       7    5
// x = (x++) +a; // 12; x = 8, norint isvengt dviprasmybiu, naudojami skliaustai!

//  7   1+5 
x = x+ (++a);
console.log(x);

console.clear();
const colors = ['Geltona', 'zalia', 'raudona'];

console.log(colors);
console.log(colors[1]);

colors[1] = 777;
console.log(colors);

colors[1] = 'ŽALIA';
console.log(colors);

colors[1] = 'žalia';
console.log(colors);

colors[3] = 'melyna;';
console.log(colors);

const name = 'Chuck';
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);

name[0] = 'H';          //stringams idv poziciju pakeisti negalima!
console.log(name);