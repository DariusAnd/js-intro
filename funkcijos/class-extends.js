console.clear()

class Pet {
    constructor(name, color){
        this.name = name;
        this.color = color;
        this.sound = 'Au miau cypt cham';
    }
    
    setColor(newColor) {
        this.color = newColor;
    }
    sayHi() {
        return `${this.name}: ${this.sound}, as esu ${this.color} spalvos!`;
    }
}

class Dog extends Pet{
    constructor(name, color) {
        super(name, color);
        this.sound = 'Au au';
    }
}

class Cat extends Pet {
    constructor(name, color) {
        super(name, color);
        this.sound = 'Miau miau';
    }
}

class Hamster extends Pet {
    constructor(name, color) {
        super(name, color);
        this.sound = 'Cham cham';
    }
}

const rex = new Dog('Rex', 'juodos');
console.log(rex.sayHi());

const brisius = new Dog('Brisius', 'baltos');
console.log(brisius.sayHi());

const tom = new Cat('Tom', 'juodos');
console.log(tom.sayHi());

const garfildas = new Cat('Garfildas', 'oranzines');
console.log(garfildas.sayHi());

const chamiakas = new Hamster('Chamiakas', 'baltos');
console.log(chamiakas.sayHi());

console.log(rex);
console.log(tom);