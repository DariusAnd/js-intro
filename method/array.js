// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
console.clear();

console.log([5, 6, 4, 8, 9].length);
console.log([5, 6, 4, 8, 9][0]);
console.log([5, 6, 4, 8, 9][1]);
console.log([5, 6, 4, 8, 9][2]);
console.log([5, 6, 4, 8, 9][3]);
console.log([5, 6, 4, 8, 9][4]);
console.log([5, 6, 4, 8, 9][10]);
console.log([5, 6, 4, 8, 9][-1]);
console.log('======')
console.log([5, 6, 4, 8, 9].at(2));
console.log([5, 6, 4, 8, 9].at(0));
console.log([5, 6, 4, 8, 9].at(-1));
console.log([5, 6, 4, 8, 9].at(-2));
console.log('======')

const a1 = [1, 2];
const a2 = [3, 4];
const a3 = [5, 6];
const a4 = [7, 8];

const a12 = a1.concat(a2);
const a123 = a1.concat(a2, a3);
const a1234 = a1.concat(a2, a3, a4);

const a11 = a1.concat(a1, a1, a1);
const a11234 = a1.concat(a1, a2, a3, a4);

console.log(a12);
console.log(a123);
console.log(a1234);
console.log(a11);
console.log(a11234);

console.clear();

const marks = [10, 3, 6, 7, 9, 8];
console.log(marks.includes(10));
console.log(marks.includes(10));

const students = ['Jonas', 'Maryte', 'Petras', 'Kazys']
console.log(students.includes('kazys'));
console.log(students.includes('Kazys'));
console.log('++++++++');

console.log(marks.indexOf(10));
console.log(marks.indexOf(3));
console.log(marks.indexOf(6));
console.log(marks.indexOf(8));
console.log(marks.indexOf(7));
console.log(marks.indexOf(9));
console.log(marks.indexOf(-9));

console.log(students.indexOf('Kazys'));
console.log(students.indexOf('kazys'));
console.log(students.indexOf('Jurgis'));

console.clear();

console.log(typeof 5);
console.log(typeof 'asd');
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);

console.log(Array.isArray(5));
console.log(Array.isArray('asd'));
console.log(Array.isArray(true));
console.log(Array.isArray(undefined));
console.log(Array.isArray(null));
console.log(Array.isArray({}));
console.log(Array.isArray([]));
console.log('++++++++');

console.log(Array.isArray([]));
console.log(Array.isArray([1, 2, 3, 4]));
console.log(Array.isArray(['a', 'b', 'c', 'd']));
console.log(Array.isArray(['a', 'b', 34, true, 'cv']));
console.log('++++++++');

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];
const abcJoin = abc.join();
const abcJoin2 = abc.join('-');
const abcJoin3 = abc.join(', ');
const abcJoin4 = abc.join(' -==- ');
console.log(abcJoin, typeof abcJoin);
console.log(abcJoin2);
console.log(abcJoin3);
console.log(abcJoin4);