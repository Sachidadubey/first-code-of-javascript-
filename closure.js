// // lexical scoping --------
//  function makeFun(){
//     const name="dubey";
//     console.log("dubey");
//     function displayNmae(){
//         console.log(name);
//     }
//     return displayNmae;// it will return as lexical scope -- weel as inner and outer functions data as well 
//  }
//  const myfn=makeFun()
//  myfn()
// document.body.style.backgroundColor = 'green'
// }

function clickHandler(color){
  // document.body.style.backgroundColor = `${color}`

  return function (){// closure & lexical scope ----
    document.body.style.backgroundColor = `${color}`
  }
}

document.getElementById('orange').onclick = clickHandler("orange")
document.getElementById('green').onclick = clickHandler("green")