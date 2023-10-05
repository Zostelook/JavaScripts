class Car{
    constructor(name,brand){
        this.name = name;
        this.brand = brand;
    }

   getName(){
    return this.name+" "+this.brand;
   }
}

const car = new Car('Mahendra','TATA');

// console.log(car.getName());

class Factory extends Car{
   constructor(){
    //derive property and method from parent class
     super()
   }
    
}

// const fac = new Factory();

// console.log(fac.getName.call(car))