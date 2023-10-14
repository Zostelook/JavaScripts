const inputBox = document.getElementById('input-box')


//what is the meaning of keyup event ?
// When you press a key , no function has been called while when you ralease that key then function 
// would be called

console.log(inputBox)
inputBox.addEventListener('keyup',()=>{
    console.log('function called');
})