// we can conjume promise and create as well

const promiseOne  = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async tast is  complete");
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

//another way
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Asynic task2 is complete");
        resolve();
    },1000)
}).then(()=>{
    console.log("Promise consumed");
})



//now we are going to create another new promise
const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Aync code");
        resolve({name:"abhishek",lastName :"yadav",age :34});
    },1000)
}).then(function(user){
    console.log(user);
})


// now again we are creating new promise
const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        
        if(!error){
            resolve({fname:"abhishek",lName:"yavav"});
        }else{
            reject("Error:something went wrong");
        }
        
    },1000)
})

promise4.then(function(user){
  console.log(user);
  return user.lName;
}).then(function(userLastName){
    console.log(userLastName)
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("Promise either rejected or resolve");
})



//if we don't want to use then() method , how we can hendle promise

const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        
        if(!error){
            resolve({fname:"Riya",lName:"yavav"});
        }else{
            reject("Error:Riya went wrong");
        }
        
    },1000)
})

async function consumePromiseFive(){
    try{
        const response = await promise5;
        console.log(response)
    }
    catch(err){
       console.log(err);
    }
}

consumePromiseFive();


// let see magic 

async function getAllUser(){
    try{
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
    }catch(err){
        console.log(err)
    }
}

//getAllUser();


// we will follow this code only

fetch("https://fakestoreapi.com/products").then((response)=>{
    return response.json();
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err)
})
