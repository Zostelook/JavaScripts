//how to create a constructor function 
// constructor name should start with capital letter it is not a hard and fast rule it is good practic

function Persion(fistNmae, lastName, age,collage){
  this.fistNmae = fistNmae;
  this.lastName = lastName;
  this.age = age;
  this.collage = collage;

  this.printValue = function(){
    return `First Name :${this.fistNmae},Last Name:${this.lastName},Age:${this.age},Collage:${this.collage}`
}
}


const persion1 = new Persion("Abhishek","Yadav",34,"IITM");
//console.log(persion1);

const persion2 = new Persion('Riya',"yadav",32,'IITM');
// console.log(persion2)

// persion1.subject = 'English';
// console.table(persion1)

persion1.printValue = function(){
    return `First Name :${this.fistNmae},Last Name:${this.lastName},Age:${this.age},Collage:${this.collage}`
}

console.log(persion1.printValue())


