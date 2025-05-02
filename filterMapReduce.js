// const coding =["ruby,phython","js","java","cpp"]// 
// coding.forEach( (item)=>{
//    console.log(item);
    
// })
// for each loop always return undefined ---means that it doesnt return anything 


// const myNumns=[1,2,3,4,5,6,7,8,9,10]
// // const newNums=myNumns.filter((num)=>num>5)//.. if we dont use here curly braces no need to return explicitely 
// // console.log(newNums);
// // const newNums=myNumns.filter((num)=>
// //     {
// //         return num>5 // if we use curly braces then we have to return explicitely --
// //     })
// //     console.log(newNums);
// // const newNums=[]
// // myNumns.forEach( (item)=>{
// //     if(item>6)
// // {
// //     newNums.push(item)
// // }

// // })
// // console.log(newNums);

// // map function ----
// //  const result=myNumns.map( (num)=>num+10)
// // console.log(result);
 
// // chaining -- methods -
// const newNums=myNumns   // more than one function used on a simgle array together known as chaining 
// // .map( (num)=>num*10)
// .map( (num)=>num+1) 
// .filter( (num)=>num>=40)
// console.log(newNums);


//   reduce 
// const  myums=[1,2,3]
// // const myTotal=myums.reduce( function (acc,currval){
// // console.log(`accumulator ${acc},current value=: ${currval}`)
// //     return acc+currval


// // },1)// accumulator value --(initial)
    
// // console.log(myTotal)// reduce using the arrow function 
// const myTotal=myums.reduce( (accu,currVal)=> accu+currVal)
// console.log(myTotal)

const shoppingCart=[
    {
        itemName:" js cource",
        price:299,
    },
    {
        itemName:" js cource",
        price:299,
    },
    {
        itemName:" python",
        price:299,
    },
    {
        itemName:" mobile dev-cource",
        price:299,
    },
]
const PricePay=shoppingCart.reduce((acc ,item)=>acc+item.price,0)
console.log(PricePay);

