$(document).ready(function(e){

//   if (document.readyState == 'loading') {
//     document.addEventListener('DOMContentLoaded', ready);
// } else {
//     ready();
// }

//LANDING PAGE
    $('.order-page').hide();//TEMP SHOWING
    // $('#streetcred').hide();
    // $('#gottafindya').hide();
    // $('.paythepiper').hide();
    $('.getmypizza').hide();//TEMP SHOWING
    $('.creditcard-page').hide();


$("#order-btn").click(function() {
    $(".order-page").show();
    $(".landing-page").hide();
    $(".creditcard-page").hide();
    // $("#delivery-option").text("PICKUP BY CUSTOMER");
//  });

 //ORDER PAGE
 
$("#orderit-btn").click(function() {
    $(".order-page").hide();
    $(".landing-page").hide();    
    // $('#streetcred').show();
    // $('#gottafindya').show();
    $('.getmypizza').show();
    // $('.paythepiper').hide();
  });

$('#payup-btn').click(function () {
  $(".landing-page").hide();    
  $(".order-page").hide();
  $('.getmypizza').hide();
  $('.creditcard-page').show();
});//closer for payup-btn func


});//closer for order-btn func


  //***TRIED TO REMOVE DEFAULT CHECK OF RADIO BUTTON - didnt work
  // https://www.tutorialrepublic.com/faq/how-to-check-or-uncheck-radio-button-dynamically-using-jquery.php

//   $("#customRadio1").click(function(){//button class/id
//     $(".hand1st").prop("checked", true);//label class/id
// });

// $(".check-female").click(function(){
//     $("#female").prop("checked", true);
// });

  // $('.hand').hide();//not hidden so will show automatically since it is default checked radio button 

  //**** DROPDOWNS FOR CRUST */
  $(".hand").hide();
  $('.skinny').hide();
  $('.ny').hide();
  $('.gluten').hide();


$("#customRadio1").click(function() {
  $(".hand").show();
  $('.skinny').hide();
  $('.ny').hide();
  $('.gluten').hide();
});

$("#customRadio2").click(function() {
  $('.hand').hide();
  $(".skinny").show();
  $('.ny').hide();
  $('.gluten').hide();
  });

$("#customRadio3").click(function() {
  $('.hand').hide();
  $(".skinny").hide();
  $('.ny').show();
  $('.gluten').hide();
  });
  
$("#customRadio4").click(function() {
  $('.hand').hide();
  $(".skinny").hide();
  $('.ny').hide();
  $('.gluten').show();
  });
  //****END DROPDOWNS FOR CRUST */

//ADDRESS SECTION
$('#other').hide();//TEMP SHOW
$('#other2').hide();//TEMP SHOW

  //***TOPPINGS - ONLY SHOW AFTER CRUST CHOSEN */
  $('.saycheese').hide();
  $('.top').hide();
  $('.saucy').hide();
  $('.circle1').hide();
  $('#orderit-btn').hide();
  // $('#orderit-btn').hide();

///////PICK CRUST
let crustys = document.querySelector('#crustys');
console.log(crustys + 'this damnwell work');


let price ;
let sizeprice = document.querySelector('.sizeprice');
let hand = document.querySelector('.hand');
let skinny = document.querySelector('.skinny');
let ny = document.querySelector('.ny');
let gluten = document.querySelector('.gluten');
console.log(sizeprice);
console.log(hand);
console.log(skinny);
console.log(ny);
console.log(gluten);


// console.log(sizeprice.value);//returns 1 2 or 3
console.log(hand.value);

let selected = sizeprice.querySelector('option[selected]');
console.log(selected);
console.log(selected.value);
// let option = sizeprice.querySelector('option [value]');
// console.log(option);//returns null

// let customradio = document.querySelector('.custom-radio');
// console.log(customradio);//only pulls #hand1st - possibly cuz others are hidden until chosen?
crustys.reset();
$("#gettherest-btn").click(function() {
  // document.querySelector(".sizeprice").onchange=function() {
  //   var val = this.value;
  //   console.log(val);
  
  if(hand.value == selected.value || skinny.value == selected.value || ny.value == selected.value || gluten.value == selected.value) {
    // alert('please pick crust');
    $('#crustys').append('<div id="choosecrust"></div>');
    $('#choosecrust').text('Hey, hey! pick a size!');
    // $(".order-page").hide();
    // $(".landing-page").hide();    
    // $('.getmypizza').show();
  } else if (hand.value == 1){
    let type = 'hand1';
    clearFields(type);
    price = 9.99;
   console.log(price);
   showTop(); 
  } else if  (hand.value == 2){
    let type = 'hand1';
    clearFields(type);
    price = 12.99;
     showTop(); 
  } else if (hand.value == 3){
    let type = 'hand1';
    clearFields(type);
    price = 14.99;
     showTop(); 
  } else if (skinny.value == 4){
      let type = 'skinny1';
      clearFields(type);
      price = 11.99;
       showTop(); 
  } else if (skinny.value == 5){
        let type = 'skinny1';
        clearFields(type);
        price = 13.99;
         showTop(); 
  } else if (ny.value == 6){
          let type = 'ny1';
          clearFields(type);
          price = 16.99;
           showTop(); 
  } else if (ny.value == 7){
            let type = 'ny1';
            clearFields(type);
            price = 19.99;
             showTop();
  } else if (gluten.value == 8){
              let type = 'gluten1';
              clearFields(type);
              price = 10.99;
               showTop(); 
  // (hand.value == 1 || hand.value == 2 || hand.value == 3 || skinny.value == 4 || skinny.value == 5 || ny.value == 6 || ny.value == 7 || gluten.value == 8) {
  } 
});
/////FUNCTION FOR SHOWING TOPPINGS AFTER CRUST PICKED
function showTop() {
  $('.saycheese').show();
    $('.top').show();
    $('.saucy').show();
    $('.circle1').show();
    $('#orderit-btn').show(); 
    $('.circle').hide();    
    $('#gettherest-btn').hide();  
    $('.crustys').append('<div id="choosecrust"></div>');
    $('#choosecrust').text('');
}
//////FUNCTION FOR RESETTING DROPDOWN FIELDS WHEN NEW SIZE/PRICE CHOSEN
  function clearFields (type){
    if(type === "hand1"){
     document.getElementById('skinny1').selected = "true";
    document.getElementById('ny1').selected = "true";
    document.getElementById('gluten1').selected = "true";
    } else if (type === "skinny1") {
      document.getElementById('hand1').selected = "true";
      document.getElementById('ny1').selected = "true";
      document.getElementById('gluten1').selected = "true";
  } else if (type === "ny1") {
    document.getElementById('hand1').selected = "true";
    document.getElementById('skinny1').selected = "true";
    document.getElementById('gluten1').selected = "true";
  } else if (type === "gluten1") {
    document.getElementById('hand1').selected = "true";
    document.getElementById('skinny1').selected = "true";
    document.getElementById('ny1').selected = "true";
  }
}

// let dwelling = document.querySelector('#dwelling');
// console.log(dwelling);

// // let other = document.querySelector('#other');
// // console.log(other);

// $('#dwelling').change (function(){
//   if (dwelling.value == 'Other...'){
//     $('#other').show();
//   }else {
//     $('#other').hide();
//   }
// });
// console.log(dwelling.value);




//******DWELLING TYPE - OTHER DROP DOWN */
let dwelling = document.querySelector('#dwelling');
console.log(dwelling);

// let other = document.querySelector('#other');
// console.log(other);

$('#dwelling').change (function(){
  if (dwelling.value == 'Other...'){
    $('#other').show();
  }else {
    $('#other').hide();
  }
});
console.log(dwelling.value);

let dwelling2 = document.querySelector('#dwelling2');
console.log(dwelling2);//grabs select#dwelling2 tag

// let other2 = document.querySelector('#other2');
// console.log(other2);

$('#dwelling2').change (function(){
  if (dwelling2.value == 'Other...'){
    $('#other2').show();
  }else {
    $('#other2').hide();
  }
});//closer for #dwelling2.change func

//GOTTAFINDYA & STREETCRED FORM VALIDATION

//GOTTAFINDYA
//gets the input tag for each label of form - name, address, etc):
let name = document.getElementById('whosbuying');
// let address = document.getElementById('address');
// let apt = document.getElementById('apt-ste-num');
// let dwellingInput = document.getElementById('dwellinginput');
let city = document.getElementById('city');
let state = document.getElementById('state');
let zip = document.getElementById('zip');
let email = document.getElementById('email');
let fone = document.getElementById('fone');

//STREET CREDS
//gets the input tag for each label of form - name, address, etc):
let name2 = document.getElementById('whosbuying2');
// let address2 = document.getElementById('address2');
// let apt2 = document.getElementById('apt-ste-num2');
// let dwellingInput2 = document.getElementById('dwellinginput2');
let city2 = document.getElementById('city2');
let state2 = document.getElementById('state2');
let zip2 = document.getElementById('zip2');
let email2 = document.getElementById('email2');
let fone2 = document.getElementById('fone2');

//SUBMIT BUTTON for gottafindya and streetcred
let payup = document.getElementById('payup-btn');

//GOTTAFINDYA VALIDATION with REGEX
//grabs #gottafindya form:
let gottafindya = document.forms.gottafindya;
console.log(gottafindya);

//grabs #streetcred form:
// let streetcred = $('#streetcred');//returns an OBJECT!!
let streetcred = document.forms.streetcred;
console.log(streetcred);

//grabs #paythepiper - note: forms.WHATEVER only seems to work on ids not classes
let paythepiper = document.forms.paythepiper;
console.log(paythepiper);

//grabs all input tags within #gottafindya
let gottafindyaInputs = document.querySelectorAll('#gottafindya input:not(.notincl)');
console.log(gottafindyaInputs);
let streetcredInputs = document.querySelectorAll('#streetcred input:not(.notincl)');
console.log(streetcredInputs);
let paythepiperInputs = document.querySelectorAll('#paythepiper input');
console.log(paythepiperInputs);

//REGEX patterns for each input field:
let patterns = {//^ is for start and $ is for the end - the stuff inbetween has to start and end with that part of regex (so if letters incl will be invalid)

      name: /^(?![\s.]+$)[a-zA-Z\s.]*$/,
      // address: /^\d+[ ](?:[A-Za-z0-9.-]+[ ]?)+(?:Avenue|Lane|Road|Boulevard|Drive|Street|Ave|Dr|Rd|Blvd|Ln|St)\.?/,
      citytype:/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/,
      statetype:/^([Aa][LKSZRAEPlkszraep]|[Cc][AOTaot]|[Dd][ECec]|[Ff][LMlm]|[Gg][AUau]|[Hh][Ii]|[Ii][ADLNadln]|[Kk][SYsy]|[Ll][Aa]|[Mm][ADEHINOPSTadehinopst]|[Nn][CDEHJMVYcdehjmvy]|[Oo][HKRhkr]|[Pp][ARWarw]|[Rr][Ii]|[Ss][CDcd]|[Tt][NXnx]|[Uu][Tt]|[Vv][AITait]|[Ww][AIVYaivy])$/,
      zip: /(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/,
      email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
      phone:  /^\D?([2-9]{1})(\d{2})\D?\D?(\d{3})\D?(\d{4})$/,
      cvv: /^[0-9]{3,4}$/,
      // visa:  /^4[0-9]{12}(?:[0-9]{3})?$/,
      mc: /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$ /,
      // amex: /^3[47][0-9]{13}$/,
      ccn:  /^(?:4[0-9]{12}(?:[0-9]{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|3[47][0-9]{13})$/,

}//closer for patterns object

//VALIDATION FUNCTION
function validate(field, regex){//1st param is the name field testing 
  //2nd param is the regex we want to test against
  console.log(regex.test(field.value));//find out IF something is valid - the way to test against a regex pattern is regex.test and the value we want to test - the field
  //so when someone types into a particular field, we grab the the value (field.value)and send it into the validate function.
  //also going to grab one of the regex patterns and setting it into the regex parameter

  //then going to take the regex parameter and test it (regex.test) and pass in the thing we want to test it against (field.value)

  //this will return true or false whether the input field is valid
  
  if(regex.test(field.value)){
    field.className = 'form-control valid';
    // field.name.style.border = '3px solid midnightblue'; 
    $('.errorFone').text('');
  } else {
    field.className = 'form-control invalid';
    // field.name.style.border = '3px solid crimson';//grabs gottafindya var (form) then the name value change the style border
    $('.errorFone').text("11 digits only, please");
    // $('.foneError').append('<p>11 digits only, please');
  }
}//closing for function validate()

//EVENT LISTENER FOR DELIVERY FORM VALIDATION
gottafindyaInputs.forEach((input) => {
    input.addEventListener('keyup', e => {
        console.log(e.target.attributes.name.value);//take event, target the element that the event occurred on, get the attribute of target, then name attribute, then value of name attr.

        //call validate function:
        validate(e.target, patterns[e.target.attributes.name.value]);//1st param is the input field (e.target)
        //2nd param is the regex pattern - patterns is the object name, 
        //then in [] will get value of whatever the value of the name property on each of the input fields when type in it
        //which then pass that into the patterns object and find that regular expression

        //essentially, passing the target element and regular expression for that element.

    });//closer for input.addEventListener-keyup

    gottafindya.reset();

});//closer for gottafindyaInputs.forEach()

//EVENT LISTENER FOR BILLING FORM VALIDATION
streetcredInputs.forEach((input) => {
  input.addEventListener('keyup', e => {
    console.log(e.target.attributes.name.value);
    //call validate function:
    validate(e.target, patterns[e.target.attributes.name.value]);
});//closer for input.addEventListener-keyup

  streetcred.reset();

});//closer for gottafindyaInputs.forEach()

paythepiperInputs.forEach((input) => {
  input.addEventListener('keyup', e => {
    console.log(e.target.attributes.name.value);
    //call validate function:
    validate(e.target, patterns[e.target.attributes.name.value]);
});//closer for input.addEventListener-keyup

  paythepiper.reset();

});//closer for gottafindyaInputs.forEach()


/////////DUPLICATE DELIVERY ADDRESS to BILLING when checked

$('#dup').click(function() {
  "use strict";
    $('#whosbuying2').val($('#whosbuying').val());
    $('#address2').val($('#address').val());
    $('#apt-ste-num2').val($('#apt-ste-num').val());
    $('#city2').val($('#city').val());
    $('#state2').val($('#state').val());
    $('#zip2').val($('#zip').val());
});



});//closing document ready


  //SCANNERS
  // let nameScanner = nameRegCheck.test(name.value);
  // let emailScanner = emailRegCheck.test(email.value);


//***FIRST TRY NAME VALIDATION START
//WHOS BUYING FORM INPUT
// let gottafindyaInput = document.forms.gottafindyaInput;
// //this grabs the forms tag just like getElementsByClassName, etc
// console.log(gottafindyaInput);//undefined

// let whosbuying = document.querySelector('#whosbuying');//grabs input type for name label
// console.log(whosbuying);//grabs input#whosbuying tag
// console.log(whosbuying.value);//grabs actual input of input#whosbuying 
// // let textOnly = /^[\sa-zA-Z]+$/;

// //NAME VALIDATION
// function checkName() {
// 	// var userName = this.value;
// 	let textOnly = /^[\sa-zA-Z]+$/;
// 	if (whosbuying.length === 0) {
//     nameError.innerHTML = '<p class = "text-danger">* This field is required. Please enter your name.</p>';
//     console.log(nameError);
//     gottafindya.name.focus();
//     console.log(gottafindya); 
// 	} else if (whosbuying.match(textOnly)) {
// 		gottafindya.addresstype.focus();
// 		nameError.innerHTML = '';
// 	} //closer for elseif
// else {
// 		nameError.innerHTML = '<p class = "text-danger">* Name invalid. Please use only letters and spaces for your name</p>';
// 		gottafindya.name.focus();
// 	}//closer for function checkName
// }//closer for if stmt
// checkName();
//FIRST TRY NAME VALIDATION END*** 

//***SECOND TRY NAME VALIDATION START
//TypeError: regexVal[$(...).attr(...)] is undefined
// $(function (){//regex function
  //   let regexVal = {
  //     name: /^(?![\s.]+$)[a-zA-Z\s.]*$/
  //     // city:/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{1,}+$/,
  //     // state:/^([Aa][LKSZRAEPlkszraep]|[Cc][AOTaot]|[Dd][ECec]|[Ff][LMlm]|[Gg][AUau]|[Hh][Ii]|[Ii][ADLNadln]|[Kk][SYsy]|[Ll][Aa]|[Mm][ADEHINOPSTadehinopst]|[Nn][CDEHJMVYcdehjmvy]|[Oo][HKRhkr]|[Pp][ARWarw]|[Rr][Ii]|[Ss][CDcd]|[Tt][NXnx]|[Uu][Tt]|[Vv][AITait]|[Ww][AIVYaivy])$/,
  //     // zip: /^\d{5}$|^\d{5}-\d{4}$/, 
  //     // phone: /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/,
  //     // email: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  //   };
  
  // $.each($('#gottafindya input:not(".notincl")'), function(){//select every input inside gottafindya form except add,apt,dwelllingtype
  // //then callback function
  
  // //runs and checks input value with regex rules:
  //   $(this).on('focusout', function(){//on focusout from input, callback function
  //     //checks if input value = regex rules
  //     //if yes, pass
  //     //if no, add error class from CSS file?????
  //       if(!regexVal[$(this).attr('name')].test($(this).val())){//if regex is not correct-use object and JSON obj???
  //         //'this' refers to input in #gottafindya input:not(".notincl") that has attribute 'name' that will test the value
  //             $(this).addClass('error');//now add class 'error'
  //       }//closer for ifstmt 
  //       else {//otherwise remove class 'error'
  //             $(this).removeClass('error');
  //       }//closer for else clause
  //   });//closer for .on('focusout'...
  // });//closer for $.each
  // });//closer for regex function 
//SECOND TRY NAME VALIDATION END***  
  
//***THIRD TRY REGEX VALIDATION START
// TypeError: name.test is not a function
// function valid (){
//   let regexVal = {
//         name: /^(?![\s.]+$)[a-zA-Z\s.]*$/}
        
//         if (name.test(name)){
//   document.getElementById('nameError').innerHTML() = ' ';
// } else {
//   document.getElementById('nameError').innerHTML() = 'invalid';
//   return false;
// }
// }
// valid();
//THIRD TRY REGEX VALIDATION END

//***USED WITH FOURTH TRY REGEX VALIDATION START
// let regexVal = /^(?![\s.]+$)[a-zA-Z\s.]*$/;
// console.log(regexVal);

// $('#payup-btn').on('focus', e=> {//WHY DOES NOT WORK WITH SUBMIT????
  //??????????
  // e.preventDefault();
// if (name.value.trim() == '' || name.value.trim() !== regexVal) {
//   gottafindya.name.style.border = '3px solid crimson';//grabs gottafindya var (form) then the name value change the style border
//   $('#nameError').text('only letters please');
// }
// });

//ON FOCUS changes border on GOTTAFINDYA AND STREET CREDS input boxes
// gottafindya.name.onfocus = function(){
//   gottafindya.name.style.border = '3px solid midnightblue'; 
// };


//USED WITH FOURTH TRY REGEX VALIDATION END***

//   $("#pickup-btn").click(function() {
//     $("#order-content").show();
//     $("#landing-content").hide();
//     $("#delivery-option").text("PICKUP BY CUSTOMER");
//   });
//   <div class="jumbotron" id="landing-content">
//   <h1 class="page-header">Epicodus Pizza</h1>
//   <h2 id="landing-tagline">Serving your daily pizza cravings! Available through online order only.</h2>
//   <p>*Delivery only available in select states</p>

//   <button type="btn" class="btn btn-primary" id="pickup-btn">Pickup</button>

//   <button type="btn" class="btn btn-danger" id="delivery-btn">Delivery</button>

/////////FIRST TRY TO DUPLICATE GOTTAFINDYA FORM - START
//EVENT LISTENER FOR DUP GOTTAFINDYA TO STREETCRED CHECKBOX
// $('#dup').addEventListener("click", streetcreddup);
// $('#dup').on(function (streetcreddup));
// $('#dup').on("click", streetcreddup);

//DUP GOTTAFINDYA TO STREETCREDS
// $('#dup').on("check", function streetcreddup() {
  // $(".dup").click(function(e){
// function streetcreddup() {
//   "use strict";
//   let dwelling = $('#dwelling');//select type name gottafindya
//   let dwelling2 = $('#dwelling2');//select type name streetcred

//   if($('#dup').checked === true) {
//       $('#whosbuying2').value = $('#whosbuying').value;
//       dwelling2.options[dwelling2.selectedIndex].text = dwelling.options[dwelling.selectedIndex].text;
//       $('#address2').value = $('#address').value;////input id
//       $('#apt-ste-num2').value = $('#apt-ste-num').value;
//       $('#city2').value = $('#city').value;
//       $('#state2').value = $('#state').value;
//       $('#zip2').value = $('#zip').value;
//   }//closer for $('#sameas').checked ifstmt true
//   if ($('#dup').checked === false) {
//       $('#whosbuying2').value = "";
//       dwelling2.options[dwelling2.selectedIndex].text = "";
//       $('#address2').value = "";
//       $('#apt-ste-num2').value = "";
//       $('#city2').value = "";
//       $('#state2').value = "";
//       $('#zip2').value = "";
//   }//closer for $('#sameas').checked ifstmt false
// };//closer for function streedcreddup

// // });
// // streetcreddup();
// window.addEventListener("load", function () {

// $('#dup').addEventListener("click", streetcreddup);
// });//closer for load

//////END - FIRST TRY DUPLICATE GOTTAFINDYA FORM

///////START VALIDATE CRUST - THIRD TRY
// $('#orderit-btn').on('click', e => {

//   "use strict";

// document.querySelector("#handcrust").addEventListener("change", function(e){
// 	alert(e.target.value)
// })
  // let i, crustpick, s, select = $('#handcrust'),
      // sizePrice, option;

  // if ($('#customRadio1').click) {
  // $("#hand1st").click(function() {
  //     alert('yup');
  //     $(".hand").show();
  //     $('.skinny').hide();
  //     $('.ny').hide();
  //     $('.gluten').hide();
    
  // })
  // ($('#customRadio2').checked) {
      // crustType = "skinnydippin";
      // $("#skinny1st").click(function() {
      //   $('.hand').hide();
      //   $(".skinny").show();
      //   $('.ny').hide();
      //   $('.gluten').hide();
      // })
      
  // } else if ($('#ny1st').checked) {
  //     // crustType = "iheartny";
  //     // $("#ny1st").click(function() {
  //       $('.hand').hide();
  //       $(".skinny").hide();
  //       $('.ny').show();
  //       $('.gluten').hide();
  //       // });


  // } else if ($('#gluten1st').checked) {
  //     // crustType = "glutenless";
  //     // $("#gluten1st").click(function() {
  //       $('.hand').hide();
  //       $(".skinny").hide();
  //       $('.ny').hide();
  //       $('.gluten').show();
  //       // });

  // } else {
  //     // crustType = "none";
  //     // setPhase(phases.crustType);
  //     // updateOrder();
  //     return;
  // }

// });//closer for .onchange func orderit()
///////END VALIDATE CRUST - THIRD TRY

//////START VALIDATE CRUST - SECOND TRY
// let sizePrice = {

//   "bythehand": [
//       {
//           size: "Lil Sis",
//           price: 9.99
//       },
//       {
//           size: "Middle Child",
//           price: 12.99
//       },
//       {
//           size: "Big Brother",
//           price: 14.99
//       }
//   ],
//   "skinnydippin": [
//       {
//           size: "Middle Child",
//           price: 11.99
//       },
//       {
//           size: "Big Brother",
//           price: 13.99
//       }
//   ],
//   "iheartny": [
//       {
//           size: "Big Boss",
//           price: 16.99
//       },
//       {
//           size: "Godfather",
//           price: 19.99
//       }
//   ],
//   "glutenless": [
//       {
//           size: "Lil Sis",
//           price: 10.99
//       }
//   ]
// };
// //SETTING PRICES TO 0
// let currentPrice = [0, 0, 0, 0];

// //VERIFY SELECTED VALUE OF ITEM IN RADIO BUTTON FOR CRUST OPTIONS
// //PROGRAMMATICALLY ADDING TO A DROP DOWN LIST
// function verifyCrust() {
//   "use strict";

//   let i, crustpick, s, select = $('#handcrust'),
//       sizePrice, option;
//   if ($('#customRadio1').checked) {
//       crustType = "bythehand";

//   } else if ($('#customRadio2').checked) {
//       crustType = "skinnydippin";


//   } else if ($('#customRadio3').checked) {
//       crustType = "iheartny";


//   } else if ($('#customRadio4').checked) {
//       crustType = "glutenless";


//   } else {
//       crustType = "none";
//       // setPhase(phases.crustType);
//       // updateOrder();
//       return;
//   }

//   sizeandprice = sizePrice[crustType];





// $('#orderit-btn').addEventListener('submit', e => {
//   e.preventDefault;
// 	if(e.target.value){
//     continue;
//   } else {
//     alert('please choose size');
//   }

// });

////THIS WORKS BUT NOT FOR WHAT I NEED
// document.querySelector("#handcrust").addEventListener("change", function(e){
// 	alert(e.target.value)
// })
//////END VALIDATE CRUST - SECOND TRY

//////START VALIDATE CRUST - FIRST TRY
// let crusts = [
// 	{type: 'handTossed',
// 	size: 'Small',
// 	price: '9.99'},
// 	{type: 'handTossed',
// 	size: 'Medium',
// 	price: '12.99'},
// 	{type: 'handTossed',
// 	size: 'Large',
// 	price: '14.99'},
// 	{type: 'thinCrust',
// 	size: 'Medium',
// 	price: '11.99'},
// 	{type: 'thinCrust',
// 	size: 'Large',
// 	price: '13.99'},
// 	{type: 'newYork',
// 	size: 'Large',
// 	price: '16.99'},
// 	{type: 'newYork',
// 	size: 'Extra Large',
// 	price: '19.99'},
// 	{type: 'glutenFree',
// 	size: 'Small',
// 	price: '10.99'}
// ];

// function crustType(crustType) {
//   let crust = document.querySelector('.crust');
//   console.log(crust);
//     let crustValue = '';
//     		for (let i=0; i<crust.length; i++) {
//     			let crustpick = crust[i];
// 			    	if (crustpick.checked) {
//               crustValue = crustpick.value;
//               break;
// 	    			}
//             else crustValue = 'noRadioChecked';
//             }
// 		      	if (crustValue === 'noRadioChecked') {
// 		        	alert('Please select a dough type');
// 	      		} 
// 	          return crustValue;
// }//closer for func crustType
// crustType();
//////END VALIDATE CRUST - FIRST TRY




// credit card validation:
// function checkLuhn(value) {
//   // remove all non digit characters
//   var value = value.replace(/\D/g, '');
//   var sum = 0;
//   var shouldDouble = false;
//   // loop through values starting at the rightmost side
//   for (var i = value.length - 1; i >= 0; i--) {
//     var digit = parseInt(value.charAt(i));
    
//     if (shouldDouble) {
//       if ((digit *= 2) > 9) digit -= 9;
//     }

//     sum += digit;
//     shouldDouble = !shouldDouble;
//   }
//   return (sum % 10) == 0;
// }

// var acceptedCreditCards = {
//   visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
//   mastercard: /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/,
//   amex: /^3[47][0-9]{13}$/,
// };

// function checkSupported(value) {
//   // remove all non digit characters
//   var value = value.replace(/\D/g, '');
//   var accepted = false;
  
//   // loop through the keys (visa, mastercard, amex, etc.)
//   Object.keys(acceptedCreditCards).forEach(function(key) {
//     var regex = acceptedCreditCards[key];
//     if (regex.test(value)) {
//       accepted = true;
//     }
//   });
  
//   return accepted;
// }

// Putting it Together
// Finally, we can combine the Luhn algorithm with our supported credit cards checker to complete our magical validation formula:

// function validateCard(value) {
//   // remove all non digit characters
//   var value = value.replace(/\D/g, '');
//   var sum = 0;
//   var shouldDouble = false;
//   // loop through values starting at the rightmost side
//   for (var i = value.length - 1; i >= 0; i--) {
//     var digit = parseInt(value.charAt(i));

//     if (shouldDouble) {
//       if ((digit *= 2) > 9) digit -= 9;
//     }

//     sum += digit;
//     shouldDouble = !shouldDouble;
//   }
  
//   var valid = (sum % 10) == 0;
//   var accepted = false;
  
//   // loop through the keys (visa, mastercard, amex, etc.)
//   Object.keys(acceptedCreditCards).forEach(function(key) {
//     var regex = acceptedCreditCards[key];
//     if (regex.test(value)) {
//       accepted = true;
//     }
//   });
  
//   return valid && accepted;
// }

// function validateCVV(creditCard, cvc) {
//   // remove all non digit characters
//   var creditCard = creditCard.replace(/\D/g, '');
//   var cvc = cvc.replace(/\D/g, '');
//   // american express and cvv is 4 digits
//   if ((acceptedCreditCards.amex).test(creditCard)) {
//     if((/^\d{4}$/).test(cvc))
//       return true;
//   } else if ((/^\d{3}$/).test(cvc)) { // other card & cvv is 3 digits
//     return true;
//   }
//   return false;
// }

// $('#cvc').attr('maxlength', 4);