$( document ).ready ( readyNow );


function readyNow(){
  $('#equal').on('click', onSubmit);
  $('.operator').on('click', operator)

}

let calcObject = {}

function onSubmit(evt){

    evt.preventDefault();

    calcObject.number1 = Number($('#num1').val());
    calcObject.number2 = Number($('#num2').val());

    console.log(calcObject);

    if (calcObject.number1 && calcObject.number2 && calcObject.operator){

    $.ajax({
      url:'/calc',
      method: 'POST',

      data: calcObject
    }).then((response) => {
      console.log(response); 
      fetchResults(); // runs the get 
    }).catch((err) => {
      console.log('ruh roh', err);
    });
    }
    $( '#num1' ).val( '' );
    $( '#num2 ').val( '' );
}

function operator(){
  console.log ($(this).val());
  
  // calcObject.number1 = Number($('#num1').val()); 
  calcObject.operator = $(this).text();
  // calcObject.number2 = Number($('#num2').val());
}

function fetchResults(){
  $.ajax({
    url: '/calc',
    method: 'GET'
  }).then((response)=>{
    console.log('GET request success',response);
    displayCalc(response);
  }).catch((err)=> {
    console.log('error', err)
  })
}

function displayCalc(array){
  $('#equation').empty(); //clears Dom so no repeats 
  $('h2').empty(); //clears Dom so no repeats 

  for(let calc of array){ //looping through array to append to the dom
    console.log(calc);
    $('h2').append(`${calc.result}`);
    //array.object.property in an li
    
    $('#equation').append(`
    <li>${calc.equation.number1} ${calc.equation.operator} ${calc.equation.number2} = ${calc.result}</li> 
    `);


  }
}