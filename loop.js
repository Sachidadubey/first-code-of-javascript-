//           
//  for loop 
// .
for (let index = 0; index ; index++) {
    const element = array[index];
    
}
// break and continue


// while -do while loop



// high order array loops ---------
const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
    
}

const greetings="hello world"
for (const greet of greetings) {
    console.log(greet);
    
}
 const map=new Map()// it takes only unique values and also follow the order of series 
 map.set('in',"india")
 map.set('fr',"france")
//  console.log(map);
for (const [key,value] of map) {// destructuring of the array
    console.log(key,':-',value);
    
}
 const myObject={  // for of loop doesnt work with objects -- (it needs coutes to the key also )
    js:'javascript',
    cpp:"c++",
    rb:"ruby"
 }
for (const key in myObject) {// it return keys only -- not valuee
  console.log(myObject[key]);
  
}

// mostly used 
// for each loop  --> higher order fucntion 
const coding =["js","ruby","java ","python"]

// coding.forEach(function (item){
//     console.log(item);
    
// })
// coding.forEach( (item)=>{
//     console.log(item);
    
// })


// function printMe(item)
// {
//     console.log(item);
    
// }
// coding.forEach(printMe)

coding.forEach( (item ,index ,arr)=>{// also function can also return these all --
    console.log(item);
    console.log(index);
    console.log(arr);
    
    
    
})
const myCoding=[{
    languageNmae:"javascript",
    languageFilename:"js"

},{
    name:"javascript",
    languageFilename:"js"

},{
    languageNmae:"javascript",
    languageFilename:"js"

},{
    languageNmae:"javascript",
    languageFilename:"js"

}]
myCoding.forEach( (item)=>{
    console.log(item.languageFilename);
    
})