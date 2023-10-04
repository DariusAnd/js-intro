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

function looksLikeName(text){
    // jeigu pirma raide nera didzioji, grazinama false
    // 'A'.toUpperCase() = 'A'
    // 'a'.toUpperCase() = 'A'
    if (text[0] !== text[0].toUpperCase()) {
        return 'Klaida: Pirmoji raide privalo but didzioji!';
    }

    // jei visi kt simboliai be pirmo nera mazosios raides - false
    // 'onas' - toLowerCase() - 'onas'
    // 'oNaS' - toLowerCase() - 'onas'

    const likusiosRaides = text.slice(1);
    if (likusiosRaides !== likusiosRaides.toLowerCase()) {
        return 'Klaida: Tik pirmoji raide privalo but didzioji!';
    }

    // jei zodis sudarytas ne tik is raidziu, bet ir is simboliu (skaitmuo) - false
    const neleistiniSimboliai = '0123456789';
    for (let i = 0; i < neleistiniSimboliai.length; i++){
        const simbolis = neleistiniSimboliai[i];
    } if (text.includes(simbolis)); {    
        return `Klaida: "${simbolis}", nera leistinas simbolis`;
    }

    // jei neradau kaip atmesti, kodel 'text' negaletu
    // but vardas, graziname - true
    return true;
}

console.log(looksLikeName('Jonas'), true);
console.log(looksLikeName('Maryte'), true);
console.log(looksLikeName('Marytė'), true);
console.log(looksLikeName('labas'), false);
console.log(looksLikeName('AZUOLAS'), false);
console.log(looksLikeName('AzuolaS'), false);
console.log(looksLikeName('AzuOlas'), false);
console.log(looksLikeName('Azuolas'), true);
console.log(looksLikeName('1Azuolas'), false);
console.log(looksLikeName('Azuo1as'), false);
console.log(looksLikeName('Azu3olas'), false);
console.log(looksLikeName('Azu9las'), false);


