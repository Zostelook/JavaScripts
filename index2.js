

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