
// this is the way we can pick an html element through using id
const innerDiv = document.getElementById('innerDiv');

console.log(typeof innerDiv);    // object

// it's means if I have an object (html element) I can also find id 
console.log(innerDiv.id);      // you can got id

// we can also find class by className

console.log(innerDiv.className)

//we can easily find attribute value 
console.log(innerDiv.getAttribute('class'))


// we can also set attribute, it will override class this is very vey intersting for me we can toggle things 
innerDiv.setAttribute('class',"test")

function changeBackgrund(){
   const element = document.getElementById('idThree');
   element.setAttribute('class','divStyle')
}

// you can also select only one item from unorderd list
const ul = document.querySelector('ul');
const listitem = ul.querySelector('li');
console.log(listitem)

listitem.style.color = 'green';

