/*
FUNCTION - funkcija

perpanaudojamas logikos blokas
*/

console.clear();

function tuscia() {
    //tuscias logikos blokas 
};

const a = tuscia();
console.log(a);
// undefined vs null: undefined - kai kompas nezino, null, kai pats nurodau.
const b = tuscia();
console.log(b);
console.log(tuscia());

function tuscia2() {
    return undefined;
}

console.log(tuscia2());
console.log(tuscia2());
console.log(tuscia2());

function tuscia3() {
    return;
}

console.log(tuscia3());
console.log(tuscia3());

function duokPenkis() {
    //graziname penkis
    return 5;
}
console.log(duokPenkis());
console.log(duokPenkis());
console.log(duokPenkis());

function labasRytas() {
    return 'Labas rytas, Lietuva!'
}

console.log(labasRytas());
console.log(labasRytas());
console.log(labasRytas());

//1)=========
//Jonas turejo 9 jubilieju/-s!

const userName1 = 'Jonas';
const userAge1 = 99;

//2)=========

const userName2 = 'Maryte';
const userAge2 = 88;

//3)=========

const userName3 = 'Praniux';
const userAge3 = 76;


const user1Jubiliejai = (userAge1 - userAge1 % 10) /10;
const user1Str = `${userName1} turejo ${user1Jubiliejai} jubilieju/-s!`
console.log(user1Str);

const user2Jubiliejai = (userAge2 - userAge2 % 10) /10;
const user2Str = `${userName2} turejo ${user2Jubiliejai} jubilieju/-s!`
console.log(user2Str);

const user3Jubiliejai = (userAge3 - userAge3 % 10) /10;
const user3Str = `${userName3} turejo ${user3Jubiliejai} jubilieju/-s!`
console.log(user3Str);

//4)=========

const userName4 = 'Onute';
const userAge4 = 67;

const user4Jubiliejai = (userAge4 - userAge4 % 10) /10;
const user4Str = `${userName4} turejo ${user4Jubiliejai} jubilieju/-s!`
console.log(user4Str);

function jubiliejai(userName, age) {
    const count = (age - age % 10) / 10;
    return `${userName} turejo ${count} jubilieju/-s!`;
}
console.log(jubiliejai('Jonas', 105));
console.log(jubiliejai('Maryte', 53));
console.log(jubiliejai('Petras', 67));
console.log(jubiliejai('Ona', 33));

console.log(jubiliejai(55, 'Artas'));

function studentAverage(name, marks) {
    let totalSum = 0;
    let i = 0;
    // totalSum += marks[0];
    // totalSum += marks[1];
    // totalSum += marks[2];
    // totalSum += marks[3];
    // totalSum += marks[4];
    
    totalSum += marks[i++];
    totalSum += marks[i++];
    totalSum += marks[i++];
    totalSum += marks[i++];
    totalSum += marks[i++];

    const average = totalSum / marks.length;
    return `${name} pazymiu vidurkis yra ${average}.`;
}

console.log(studentAverage('Jonas', [10, 2, 4, 6, 8]));
console.log(studentAverage('Maryte',[10, 9, 8, 7, 6]));
console.log(studentAverage('Petras', [5, 6, 7, 8, 9]));
console.log(studentAverage('Ona', [10, 10, 10, 10, 10]));