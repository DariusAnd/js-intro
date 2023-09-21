/*
BOOLEAN - logine reiksme

Galimos reiksmes: true (1) / false (0)

Operacijos:
- && (and) visi turi buti isskirtinai "true", jog gauti 'true'!
- || (or) 
*/

console.clear();

const arPilnametis = true;
const arLyja = false;

const isSunnyDay = true;
const isNight = false;

console.log(isSunnyDay);
console.log(isNight);

const count = false + false + true + true + true + true;
console.log(count);

const count2 = (true + false + true) * (true + true + true);
console.log(count2);

const a = true && true;
console.log(a);

const b = true || true;
console.log(b);

const c = true || false|| false|| false|| false|| false; //jei nors vienas true - rezultatas true!
console.log(c);

const d = true && true && true && true && false; //jei nors vienas false - rezultatas false!
console.log(d);

const e = true && (false || true);
console.log(e);

const f = true && false || true;
console.log(f);