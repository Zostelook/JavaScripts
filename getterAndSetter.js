class Persion{
    constructor(fName,lName){
        this.fName = fName;
        this.lName = lName;
    }

    getFname(){
        return `${this.fName} ${this.lName}`;
    }

    setLname(lName){
      this.lName = lName;
    }
}

const persion = new Persion('Abhishek','yadav');

console.log(persion.getFname());
persion.setLname('Manoj')

console.log(persion.getFname());