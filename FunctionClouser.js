

let count = 0 ; //this is global variable , this can be changed by any script

function add(){
   
    count += 1;
}

add();
add();
add();

console.log(count);


// solve this problem via add2

function add2() {
    let counter = 0;
    function plus() {counter += 1;}
    plus();   
    return counter;
  }