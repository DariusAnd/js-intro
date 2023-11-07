console.clear();

class Dog {
    constructor(name, color){
        this.name = name;
        this.color = color;
        this.age = 0;
    }

    setAge(naujasAmzius) {
        if(typeof naujasAmzius !== 'number'){
            return 'Error';
        }
        this.age = naujasAmzius;
        return naujasAmzius
    }
    hello(){
        return `Au, au, as esu ${this.name}!`;
    }
}

const rex = new Dog('Rex', 'black');
const brisius = new Dog('Brisius', 'white');

console.log(rex);
console.log(brisius);

console.log('=========================');
console.log(brisius.name);
console.log(brisius.color);

console.log('=========================');
console.log(rex.name);
console.log(rex.color);

console.log('=========================');
console.log(rex.setAge(1));
console.log(rex);

console.log('=========================');
console.log(rex.hello());
console.log(brisius.hello());