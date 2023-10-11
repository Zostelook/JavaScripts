let persion = {
    fName :"Abhishek",
    lName :'Yadav',
    age :34
}

let printPersion = function(){
    console.log(`${this.fName} ${this.lName}}`);
}

let printPersionValue = printPersion.bind(persion)

//printPersionValue();


