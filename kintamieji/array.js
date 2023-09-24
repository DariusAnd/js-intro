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

// Masyvas pazymiu:
//Suskaiciuoti pazymiu vidurki ir isvesti sakiny:
//'Studentu pazymiu vidurkis yra:'

//Masyvas vietovardziu:
//Suformuoti sakini:
//"Musu aplankytos vietos: Vieta1, Vieta2, Vieta3."

const skaiciai = [9, 8, 6, 10, 8, 7];
const suma = skaiciai[0] + skaiciai[1] + skaiciai[2] + skaiciai[3] + skaiciai[4] + skaiciai[5];
const vidurkis = suma / skaiciai.length;

console.log('Studentų pažymių vidurkis yra: ', vidurkis);


const vietos = ['Kaunas,', 'Klaipėda,', 'Skuodas,', 'Vilnius,', 'Šiauliai.'];

console.log('Mūsų aplankytos vietos:', vietos[0], vietos[1], vietos[2], vietos[3], vietos[4]);

