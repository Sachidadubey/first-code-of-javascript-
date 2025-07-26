const form = document.querySelector('form')
console.log(form);


   form.addEventListener('submit', function(e)
{
 e.preventDefault()
  const height=parseInt( document.querySelector('#height').value ) ; // : is very important 
  const weight=parseInt( document.querySelector('#height').value );
              // input value 
 const results=document.querySelector("#results") ;

              if (height===""|| height<0 || isNaN(height)) {
                results.innerHTML=`pleaase give me a valid height ${height}`;
              }
             else  if(height===""|| height<0 || isNaN(height)){
                results.innerHTML=`pleaase give me a valid height ${height}`;
              }
              else{
              const bmi=  (weight /((height*height)/10000)).toFixed(2)// only two digit after decimal
              // show the result 
              results.innerHTML=`<span>${bmi}</span>`;
              }
              
             
});