class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    name;
    age;

    meow() {
        console.log(`Meowww! I'm ${this.name} and I'm ${this.age} years old!`);
    }
}

const cat = new Cat('Michael', 6);
cat.meow();