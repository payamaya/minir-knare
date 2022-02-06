document.addEventListener("keydown",checkKeyPress, false);
function checkKeyPress(key){

  if (key.keyCode == '0x6A' ) {
    const mult= document.querySelector('#mult');
    mult.focus();
  }
  if (key.keyCode == '0x6B' ) {
    const plus= document.querySelector('#plus');
    plus.focus();
  }
  if (key.keyCode == '0x6D' ) {
    const minus= document.querySelector('#minus');
    minus.focus();
  }
  if (key.keyCode == '0x6F' ) {
    const divid= document.querySelector('#divid');
    divid.focus();
  }
 /*  if (key.keyCode == '0x6E' ) {
    const decimal= document.querySelector('#decimal');
    decimal.focus();
  } */
  if (key.keyCode == '36' ) {
    const display= document.querySelector('#display');//Home
    display.focus();
  }
  if (key.keyCode == '0x25' ) {
    const oper1= document.querySelector('#oper1');//Left
    oper1.focus();
  }
  if (key.keyCode == '39' ) {
    const oper2= document.querySelector('#oper2');//Right
    oper2.focus();
  }
  if (key.keyCode == '38' ) {
    const oper2= document.querySelector('.operation#minus');//Up
    oper2.focus();
  }
  if (key.keyCode == '0x23' ) {
    const oper3= document.querySelector('#oper3');//End
    oper3.focus();
  }
  if (key.keyCode == '40' ) {
    const operation= document.querySelector('.operation');//arrowDown
    operation.focus();
  }
  if (key.keyCode == '13' ) {
    const equal= document.querySelector('.equal'); // Enter
    equal.focus();
  }
  else if(key.keyCode == '0x2E' ) {
    const clear= document.querySelector('.clear');//Delete Del
    clear.focus();
  }
 
}


let myNumbers=[];
let operator=[];
$(document).ready(function () {
    
    $('#display').keydown(function(){
        $('#display').css('color','white','font-family:monospace');
        
    
        $('#display').keydown(function(){
            $('#display').css("background-color","black")
          });
    
      });
  
 $('#mult,#divid,#plus,#minus,#decimal,#oper3').keypress(function(){
     const operator = $(this).val();
     console.log(operator);
     const myValue= $('#display').val();
     if(myValue.length===0){
         return
     }
     const number = Number(myValue);

    if(['+','-','.','/','*'].includes(myNumbers[myNumbers.length-1])){
    myNumbers.pop();
    myNumbers.push(operator, number);
    }else if(myNumbers.length===0){
         myNumbers.push(number,operator);
     } else{
         myNumbers.push(operator, number);
       /*   return */
     }

     console.log(myNumbers);
     $('#show').text(myNumbers.join(' '));
     $('#display').val(' ');
     $(this).css('background','grey');
    
   
    
 });
 
    $('.equal').keydown(function(){
        $('#target').val(eval($('#show').val()));
        $('#show , #display').val('');
        $(this).css('background','silver');
        $("#target").animate({
            left: '200px',
            opacity: '0.8',
            width: '100px'
          });
       myNumbers=[];
   });

 $('.clear').keydown(function(){
     $('#display , #show ,#target' ).val(' ');
     myNumbers=[];
     $('.clear').css('background','darkred');
     
 });

  $('#display').keydown(function(evt) {
    if (evt.which == "0".charCodeAt(0) && $(this).val().trim() == "") {
    return false;
     }
  });
  $('#refresh').keypress(function(){
    window.location.reload(true);
   
  
  });

});
