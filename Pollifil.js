//Before comming ES6 I had not map, filter and reduce method then we would need to write own implimentation


// But now in days

let arr = [1,2,3,4,5];
const finalArray  = arr.map(function(element){
    return element*element;
})

// console.log(arr);
// console.log(finalArray);


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

// console.log(myMap(arr,squre))

// filter, how filter work

const filterArray = arr.filter(function(x){
    if(x%2==0){
        return x;
    }
})

// console.log(filterArray)

//Now we would like to write pollifil for filter

function myFilter(arr,cb){
    const newfilterArray = [];

    for(let i=0; i<arr.length; i++){
        let element = cb(arr[i])
        if(element!=undefined){
            newfilterArray.push(element)
        }

    }
    return newfilterArray;
}

function even(x){
    if(x%2==0){
        return x;
    }
}

// console.log(myFilter(arr,even))

// how Reduce work
const sum = arr.reduce( function(acc,x){
   return acc+x;
},0)

console.log(sum)
