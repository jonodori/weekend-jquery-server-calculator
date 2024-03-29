$( document ).ready ( readyNow );


function readyNow(){
  $('#equal').on('click', onSubmit);
  // $('.operator').on('click', operator);
  $('#clear').on('click', clear);
  $(document).on('click', '.calc-button', numbers);
  $(document).on('click', '.calc-button', operators)
  $('.all-clear').on('click', clear);

  fetchResults(); // keeps this history
}

let calc = [];

function onSubmit(evt){

    evt.preventDefault();

    calcObject.number1 = Number($('#num1').val());
    calcObject.number2 = Number($('#num2').val());
    calcObject.result = 0;

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

// function operators(){
//   console.log ($(this).val());
  
//   // calcObject.number1 = Number($('#num1').val()); 
//   calcObject.operator = $(this).text();
//   // calcObject.number2 = Number($('#num2').val());
// }

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
   //clears Dom so no repeats 
  $('#equation').empty(); //clears Dom so no repeats 

  for(let calc of array){ //looping through array to append to the dom
    // console.log(calc);
    $('h2').empty();
    $('h2').append(`${calc.result}`);
    //array.object.property in an li
    

    $('#equation').append(`
    <li>${calc.number1} ${calc.operator} ${calc.number2} = ${calc.result}</li> 
    `);
  }
}

function clear(){
    $( '#num1' ).val( '' );
    $( '#num2 ').val( '' );
}

function numbers(){
  let number = $(this).data('number-id');
  $('#calculator-screen').append(number);
  calc.push(number);
  
  

}

function operators(){
  let operator = $(this).data('operator-id');
  $('#calculator-screen').append(operator);

  calc.push(operator);
}



function clear(){
  let calc = [];

  $('#calculator-screen').empty();
  

}

