

function chageListItemBackgroungColor(){
    const ul = document.querySelector('ul');
    const allItemOfUl = ul.querySelectorAll('li');

    console.log(allItemOfUl);
 //    // here will use forEach for because it is NodeList not array reasion is that NodeList does'nt contain
 //    map method
    allItemOfUl.forEach(function(itemOneByOne){
    itemOneByOne.style.backgroundColor = 'green';
})
}

function createMyHtmlElement(){
    
  //now we would learn here how we can create an html element using java script and append on document
  const divElement  = document.createElement('div');
  console.log(divElement)

  //divElement.className = 'test';
  divElement.setAttribute('class','test');
  divElement.setAttribute('id','parent');


   //what text you inject in your div first create text
   const addText = document.createTextNode('This is my content');



    //now inject your element into dom
   const praentElement = document.body;

   praentElement.appendChild(addText);

}

function addLanguage(langName = "javaScript"){

   // create li with content
   const li = document.createElement('li');
   li.appendChild(document.createTextNode(langName));
   
   // now append in dom
   document.querySelector('.language').appendChild(li);
}


