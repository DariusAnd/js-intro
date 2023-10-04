console.clear();
/*
Duodamas vardas ar bent jau taip galvojama.
Reikia:
- nustatyti ar dave varda ar ne?
*/

// Jonas - true
// Maryte - true
// labas - false
// Labas - true
// 12485 - false
// Azuolas - true
// Egle - true

    // jeigu pirma raide nera didzioji, grazinama false
    // jeigu I-a raide nera didzioji
            //graziname: false

    // jeigu yra bet kox simbolis (ne raide)
            // graziname: false

    // jeigu visi kiti simboliai apart I-o nera mazosios
            // graziname: false
    
    // jeigu tenkina visas salygas
            // graziname true

    // SPRENDZIAMA BLACK LIST PRINCIPU (atpazistant neleistinus simbolius)!

function looksLikeName(text){   
    if (text[0] !== text[0].toUpperCase()) {
        return `Klaida: pirmoji raide privalo buti didzioji!`;
    }
    const likusiosRaides = text.slice(1);
    if (likusiosRaides !== likusiosRaides.toLowerCase()) {
        return `Klaida: likusios raides privalo buti mazosios`
    }
    const neleistiniSimboliai = '0123456789';
    for (let i = 0; i < neleistiniSimboliai.length; i++ ) {
        const simbolis = neleistiniSimboliai[i];
        if (text.includes(simbolis)){
            return `Klaida: "${simbolis}" simbolis tekste negalimas!`
        }
    }
    return 'Viskis ciki!'
}   

console.log(looksLikeName('Jonas'));
console.log(looksLikeName('Maryte'));
console.log(looksLikeName('Marytė'));
console.log('=====')
console.log(looksLikeName('labas'));
console.log('=====')

console.log(looksLikeName('AZUOLAS'));
console.log(looksLikeName('AzuolaS'));
console.log(looksLikeName('AzuOlas'));
console.log('=====')

console.log(looksLikeName('Azuolas'));
console.log('=====')

console.log(looksLikeName('1Azuolas'));
console.log(looksLikeName('Azuo1as'));
console.log(looksLikeName('Azu3olas'));
console.log(looksLikeName('Azu9las'));
console.log(looksLikeName('azu9las'));
console.log(looksLikeName('6zu9las'));
console.log('=====')

console.clear();

    // SPRENDZIAMA WHITE LIST PRINCIPU:

function isName(name) {
    if (typeof name !== 'string') {
        return `Klaida: netinkamas duomens tipas, t.b.'string'!`;
    } 
    const nameMinLength = 2;
    if (name.length < nameMinLength) {
        return `Klaida: per trumpas vardas, t.b.minimum ${nameMinLength} simboliai!`;
    }
    const nameMaxLength = 20
    if (name.length > nameMaxLength) {
        return `Klaida: per ilgas vardas; max ${nameMaxLength} simboliu!`;
    }
    const pirmaRaide = name[0];
    if (pirmaRaide.toUpperCase() !== pirmaRaide) {
        return `Klaida: pirma raide privalo buti didzioji!`;
    }
    const likusiosRaides = name.slice(1);
    if (likusiosRaides.toLowerCase() !== likusiosRaides) {
        return `Klaida: likusios raides privalo buti mazosios!`;
    }
         // LT, LV, EN, RU - ivairiausios abeceles, kuriose tik dalis simboliu persidengia

    const abc = 'qwertyuiopasdfghjklzxcvbnm'; // const ABC = abc.toUpperCase();
    const nameLowerCase = name.toLowerCase();
    // Jonas -> jonas, Maryte -> maryte;

     // einu per vardo raides
         // pasiimu viena is raidziu
         // patikrinu ar sutampa su leistinu simboliu sarasu
             // jei yra - tesiam darba
             // jei ne - grazinu klaidos pranesima

    for (let i = 0; i < name.length; i++) {
        const raide = nameLowerCase[i];
        if (!abc.includes(raide)) {
            return `Klaida: neleistinas simbolis "${raide}" varde`
        }
    }
    return 'Viskis ciki!'
}

console.log(isName());
console.log(isName(undefined));
console.log(isName(null));
console.log(isName(13));
console.log(isName(NaN));
console.log(isName(Infinity));
console.log(isName(true));
console.log(isName(false));
console.log(isName([]));
console.log(isName({}));
console.log(isName(isName));
console.log('======');
console.log(isName('')); // nors ir stringas, bet per trumpas
console.log(isName('L'));
console.log('======');
console.log(isName('Lilkdjashgouighaslihgauiohgaoirhgaoh'));
console.log('======');
console.log(isName('jonas'));
console.log(isName('kaZIUKas'));
console.log(isName('azu9las'));
console.log('======');
console.log(isName('JOnas'));
console.log(isName('KaZIUKas'));
console.log(isName('1Azuolas'));
console.log('======');
console.log(isName('Li'));
console.log(isName('Jonas'));
console.log(isName('Maryte'));
console.log('======');
console.log(isName('Azuo1as'));
console.log(isName('Azu3olas'));
console.log(isName('Azu9las'));
console.log(isName('6zu9las'));
console.log(isName('Azu_9las'));
console.log(isName('Azu?9las'));
console.log('=====')
