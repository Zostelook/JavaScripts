// it ensures that a function is called at most once within a specified time interval, 
// regardless of how many times it's triggered.

function myFunction(){
    console.log('Executed');
}

const duration = 1000;

// Now we want to desing a function which which will take a function and time as argument
function throttledFunction(fn,duration){
    let instance ;
   return ()=>{
    if(instance){
        return;
    }

    instance = setTimeout(()=>{
      fn();
      clearTimeout(instance)
    },duration)
   }

}

const newFunction = throttledFunction(myFunction,duration);

newFunction();
newFunction();
newFunction();
newFunction();