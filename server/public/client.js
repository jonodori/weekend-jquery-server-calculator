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

$.ajax({
  url:'/calc',
  method: 'POST',

  data: calcObject
}).then(() => {
  console.log('POST /calcObject success!'); 

}).catch((err) => {
  console.log('ruh roh', err);
});

}

function operator(){
  console.log ($(this).val());
  
  calcObject.number1 = Number($('#num1').val());
  calcObject.operator = $(this).text();
  calcObject.number2 = Number($('#num2').val());
}

