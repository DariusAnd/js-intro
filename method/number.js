//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
console.clear();

//KAZKAS.metodas();

console.log(isFinite(5));
console.log(isFinite(3.14));
console.log(isFinite(-5));
console.log(isFinite(-3.14));
console.log(isFinite(0));
console.log(isFinite(999999999999999990));

console.log(isFinite(NaN));
console.log(isFinite(Infinity));
console.log(isFinite(-Infinity));

const a = 'vienas';

if (isFinite(a)) {
    console.log('Taip');
} else {
    console.log('Ne');
}

console.clear();
console.log(Number.isInteger(5));
console.log(Number.isInteger(1.5));
console.log(Number.isInteger(-5));
console.log(Number.isInteger(-1.5));
console.log(Number.isInteger(NaN));
console.log(Number.isInteger(Infinity));
console.log(Number.isInteger(-Infinity));

console.clear();

const b = 10.5;

if (isFinite(b) && Number.isInteger(b)) {
    console.log('Sveikasis skaicius');
} else if (isFinite(b) && !Number.isInteger(b)) {
    console.log('Desimtainis skaicius');        
} else {
    console.log('Nenormalus skaicius: NaN arba Infinity');

}

if (isFinite(b)) {
    if (Number.isInteger(b)) {
        console.log('Sveikasis skaicius');
    } else {
        console.log('Desimtainis skaicius');        
    }
} else {
    console.log('Nenormalus skaicius: NaN arba Infinity');
}
console.clear();
console.log(Number.parseInt(false));
console.log(Number.parseInt([]));
console.log(parseInt(''));  //Number nebutinas!
console.log(parseInt('penki'));
console.log(parseInt('123'));
console.log(parseInt('asd123'));
console.log(parseInt('123asd'));
console.log(parseInt('123asd456'));//iki pirmos klaidos (NaN)
console.log(parseInt('123.456')); //tik sveikieji skaiciai.
console.log(parseInt('Infinity')); //t.b. skaiciai.!

console.log('------------------');
console.log(parseFloat('123'));
console.log(parseFloat(123)); //ir stringas ir skaicius
console.log(parseFloat(''));
console.log(parseFloat('789'));
console.log(parseFloat('789.101'));
console.log(parseFloat('Infinity'));
console.log(parseFloat('789.101asd'));
console.log(parseFloat('-asd789.101'));

console.clear();
console.log(isNaN('asd78'));
console.log(isNaN('5'));
console.log(isNaN(5));
console.log(isNaN(NaN));

console.clear();

const kaina = 3.14;
console.log(kaina, '3.14', kaina.toFixed(0));
console.log(kaina, '3.14', kaina.toFixed(1));
console.log(kaina, '3.14', kaina.toFixed(2));
console.log(kaina, '3.14', kaina.toFixed(3));
console.log(kaina, '3.14', kaina.toFixed(4));
console.log(kaina, '3.14', kaina.toFixed(5));

const keistasSkaicius = 0.1 + 0.2;
console.log(keistasSkaicius);
console.log(keistasSkaicius.toFixed(10));

const keistasSkaicius2 = keistasSkaicius.toFixed(3);
console.log(keistasSkaicius2);

const keistasSkaicius3 = parseInt(keistasSkaicius2);
console.log(keistasSkaicius3);

const keistasSkaicius4 = parseFloat(keistasSkaicius2);
console.log(keistasSkaicius4);

const keistasSkaicius5 = +'1.23'; //parseFloat ir + yra kaip ir tas pats.
console.log(keistasSkaicius5);

const keistasSkaicius6 = +keistasSkaicius2;
console.log(keistasSkaicius6);

const c = 6.9999999999999999;
console.log(c);
console.log(c.toFixed(5));

const d = 5.6789;
console.log(d.toFixed(6));
console.log(d.toFixed(5));
console.log(d.toFixed(4));
console.log(d.toFixed(3));

console.log('===================')

const e = 5.6784;
console.log(e.toFixed(6));
console.log(e.toFixed(5));
console.log(e.toFixed(4));
console.log(e.toFixed(3));

