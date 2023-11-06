console.clear();

const marks = [10, 2, 8, 4, 6];
const mark1 = marks[0];
const mark2 = marks[1];
const mark3 = marks[2];
const otherMarks = [
    marks[3],
    marks[4],
]

console.log(mark1, mark2, mark3, otherMarks);

const [m1, m2, m3, ...otherMs] = marks;

console.log(m1, m2, m3, otherMs);

const user = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
    children: [{
        name: 'Maryte',
        age: 8,
    },
    {
        name: 'Petras',
        age: 10,
    }]
};

// const name = user.name;
// const age = user.age;
// const isMarried = user.isMarried;

// console.log(name, age, isMarried);

const { isMarried, name, age, children } = user;

console.log(isMarried, name, age);
console.log(children);

const zip = 12345;
const street = 'Gedemino g.';
const houseNo = 7;

// const address = {
//     zip: zip,
//     gatve: street,
//     houseNo: houseNo,
// }

// const address = {
//     zip,
//     street,
//     houseNo,
// }

const address = {zip, street, houseNo};
console.log(address);