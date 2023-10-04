//we will use class keyward for creating a class

//class name should be start uppercase letter


class Car{
    // when you are creating a class then you must create a constructor also
    constructor(name,brand){
        this.name = name;
        this.brand = brand;
    }
    

    // when you are creating a method inside a class then you don't need to use function keywart
    printName() {
        console.log(`Car name is ${this.name} and brand is ${this.brand}`)
    }
}

const carObj = new Car('Mahendra','TATA');
console.log(carObj.printName());