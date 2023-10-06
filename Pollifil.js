//Before comming ES6 I had not map, filter and reduce method then we would need to write own implimentation


// But now in days

let arr = [1,2,3,4,5];
const finalArray  = arr.map(function(element){
    return element*element;
})

console.log(arr);
console.log(finalArray);


//Now we are going to write pollifil for map method

function myMap(arr,cb){
    const newArray = [];

    for(let i =0; i<arr.length; i++){
        newArray.push(cb(arr[i]))
    }

    return newArray
}


function squre(x){
    return x*x;
}

console.log(myMap(arr,squre))