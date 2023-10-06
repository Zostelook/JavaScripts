//how we can create an object in js

const student1 = {
    fName : "Abhishek",
    lName : 'Yadav',
    age : 34,
    class : '12th'
}

// Now we want to create another object 
const student2 = {
    fName : "Riya",
    lName : 'Yadav',
    age : 24,
    class : '12th'
}

// Now we want to create another object again
const student3 = {
    fName : "Abhi",
    lName : 'Yadav',
    age : 14,
    class : '12th'
}


// now we want to create thousand object with same object property

// we dont want to write a properity again and again  So we create constructor function to solve this problem

function Student(fName,lName,age,cls){
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.cls = cls;
}

// how we can create an object by the help of constructor function

const student01 = new Student('Abhi','Yadav',23,'12th');
console.log(student01)
const student02 = new Student('Riya','Yadav',23,'12th');
console.log(student02);

//how we can check that two object are pointing same memory address
if(student01===student02){
    console.log(true);
}else{
    console.log(false);
}

// Now my question is that I want to inject another property (this.callage = collage) to all how?

// we will solve this problem using concept of prototype

Student.prototype.nationality = 'Indian';

console.table(student01.nationality)

const student03 = new Student('Alic','Yadav',34,'12th');
console.table(student03.nationality)