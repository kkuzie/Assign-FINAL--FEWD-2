$(document).ready(function(e){

//LANDING PAGE
  $('.total-btn').hide();
  $('.circle3').hide();
  $('.order-page').hide();//TEMP SHOWING
  $('.getmypizza').hide();//TEMP SHOWING
  $('.creditcard-page').hide();

$("#order-btn").click(function() {
    $(".order-page").show();
    $('.total-btn').show();
    $(".landing-page").hide();
});//closer for order-btn func

 //ORDER PAGE

// $("#yup-btn").click(function() {
//     $(".order-page").hide();
//     $('.getmypizza').show();
//     $('.total').hide();
//     $('.confirm').hide();
//   });

$('#payup-btn').click(function () {
    $('.getmypizza').hide();
    $('.creditcard-page').show();
    $('.total').show();//should show 
    $('.circle3').show();

  });//closer for payup-btn func

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

///////PICK CRUST
let crustys = document.querySelector('#crustys');

let price ;
let type;
let sizeprice = document.querySelector('.sizeprice');
let hand = document.querySelector('.hand');
let skinny = document.querySelector('.skinny');
let ny = document.querySelector('.ny');
let gluten = document.querySelector('.gluten');
let  check = false;
console.log(sizeprice);
console.log(hand);
console.log(skinny);
console.log(ny);
console.log(gluten);

crustys.reset();
// This is the the form event listener
crustys.addEventListener("change", function(e) {
  
  if (e.target.value > 0 && e.target.value <=3) {
   check = true;
   clearFields('customRadio1') ;
   } else if (e.target.value >3 && e.target.value <=5){
    console.log("This is the true" + e.target.value);
    check = true;
    clearFields('customRadio2'); 
  } else if (e.target.value >5 && e.target.value <=7){
    console.log("This is the true" + e.target.value);
    check = true;
    clearFields('customRadio3') ;
  } else if (e.target.value == 8){
    check = true;
    console.log("This is the true" + e.target.value);
    clearFields('customRadio4') 
   
  } else {
    console.log("do nothing");
  }
  // clearFields(e.target.id);
});
// console.log(sizeprice.value);//returns 1 2 or 3
console.log(hand.value);

let selected = sizeprice.querySelector('option[selected]');
console.log(selected);
console.log(selected.value);
// let option = sizeprice.querySelector('option [value]');
// console.log(option);//returns null

// let customradio = document.querySelector('.custom-radio');
// console.log(customradio);//only pulls #hand1st - possibly cuz others are hidden until chosen?

$("#gettherest-btn").click(function() {
  // document.querySelector(".sizeprice").onchange=function() {
  //   var val = this.value;
  //   console.log(val);
  console.log(check);
  // if((hand.value == selected.value) || (skinny.value == selected.value) ||(ny.value == selected.value) || (gluten.value == selected.value)) {
   if(check === false){
 // alert('please pick crust');
 $('#crustys').append('<div id="choosecrust"></div>');
 $('#choosecrust').text('Hey, hey! pick a size!');
  } else {
    showTop();
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
    if(type === "customRadio1"){
     document.getElementById('skinny1').selected = "true";
    document.getElementById('ny1').selected = "true";
    document.getElementById('gluten1').selected = "true";
    } else if (type === "customRadio2") {
      document.getElementById('hand1').selected = "true";
      document.getElementById('ny1').selected = "true";
      document.getElementById('gluten1').selected = "true";
  } else if (type === "customRadio3") {
    document.getElementById('hand1').selected = "true";
    document.getElementById('skinny1').selected = "true";
    document.getElementById('gluten1').selected = "true";
  } else if (type === "customRadio4") {
    document.getElementById('hand1').selected = "true";
    document.getElementById('skinny1').selected = "true";
    document.getElementById('ny1').selected = "true";
  }
}
$('#confirm_form').hide();
//Function To Display Popup
$('#orderit-btn').click(function (e) {
  console.log('clicked');
  // document.getElementById('contactus_form').style.display = "block";
  $('#confirm_form').show();
//AFTER CONFIRM ORDER takes to GOTTAFINDYA section
$("#yup-btn").click(function() {
  $(".order-page").hide();
  $('.getmypizza').show();
  $('.total').hide();
  $('#confirm_form').hide();
});
console.log('WORKS to HERE');
//IF NOT confirm order TAKES BACK TO ORDER section
$("#nope-btn").click(function() {
  $('#confirm_form').hide();
});
console.log('WORKS to HERE2');

    });

//******DWELLING TYPE - OTHER DROP DOWN */
let dwelling = document.querySelector('#dwelling');
console.log(dwelling);
console.log('WORKS to HERE 3');

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


//******DWELLING TYPE BILLING- OTHER DROP DOWN */
///NOT NEEDED DELETED IN TESTSCRIPTS.JS
// let dwelling2 = document.querySelector('#dwelling2');
// console.log(dwelling2);//grabs select#dwelling2 tag

// // let other2 = document.querySelector('#other2');
// // console.log(other2);

// $('#dwelling2').change (function(){
//   if (dwelling2.value == 'Other...'){
//     $('#other2').show();
//   }else {
//     $('#other2').hide();
//   }
// });//closer for #dwelling2.change func
console.log('WORKS to HERE 4');

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

//VALIDATION of add, billing, cc FUNCTION
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
    $('.errorFone').text("10 digits only, please");
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

//EVENT LISTENER FOR CREDIT CARD FORM VALIDATION
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

////////EXPIRATION DATE INPUT
// Get todays date and year
const today = new Date();
const todayyear = today.getFullYear();
const todaymonth = today.getMonth();

////VALIDATE EXPIRY DATE FOR CC
let mo = 0;
let yr = 2020;

function checkDate() {
    if (mo < todaymonth && yr == todayyear) {
        console.log('expired');
    } else {
        console.log('cool');
    }
}

$('#ccmonth').click(e => {
    $('#ccmonth').change(e => {
        mo = e.target.value;
    })
    mo = e.target.value;
    checkDate()
});

$('#ex-year').click(e => {
    $('#ex-year').change(e => {
        yr = e.target.value;
    })
    yr = e.target.value;
    checkDate()
});

////VALIDATE EXPIRY DATE FOR CC
// let exmonth = document.querySelector('#ex-month');
// let exyear = document.querySelector('#ex-year');
// // let cc = document.getElementById('cc');

//   const month = exmonth.value;
//   const year = exyear.value;
//   console.log(month);//1 wh
//   console.log(year);//2020 wh

//   const exdate = month + year;
//   console.log(exdate);//2020-1
//   const today = new Date();
//   const todayyear = today.getFullYear();
//   const todaymonth = today.getMonth();
//   // console.log((today.getFullYear()) + '-' + (today.getMonth()));
//   // console.log(today);//Mon May 17 2020 00:00:00 GMT-0700 (Pacific Daylight Time)
// console.log(todayyear);//2020 gr
// console.log(todaymonth);//4 gr
// console.log(todayyear.toString());//2020 wh


// $('#paythepiper-btn').on('click', e => {
//   e.preventDefault();
//   console.log('ive been clicked');
// 	if (todayyear.toString() === year && todaymonth > Number(exmonth.value)) {
//     console.log(todayyear.toString() === year);//true
//     console.log(todaymonth > Number(month));//true
//     console.log(todaymonth);//4 n current
// console.log(Number(month));//0 n input
// console.log(todayyear.toString()); //2020 s
// console.log(year); //2020 s
// console.log('ERROR');
// 		// dateError.innerHTML = '<p class = "text-danger">* Error. Expiration date should be past the current date</p>';
// 		// billing.year.focus();
// 	} else {
//     console.log('yup all good');
//     console.log(todayyear.toString() === year);
//     console.log(todaymonth > Number(month));
// console.log(todaymonth);
// console.log(Number(month));
// console.log(todayyear.toString());
// console.log(year);
// 		// billing.billingDone.focus();
// 		// dateError.innerHTML = '';
// 	}
// });


//   const now = (today.getFullYear()) + '-' + (today.getMonth());
//     console.log(now);


//   if (exdate < now) {
//     console.log(exdate);//2020
//     // Fails validation, show some error message to user
//     console.log('fail')
//   } else {
//     // Valid expiry
//     console.log('pass')
//   }
// });

// function checkCCDate() {
	// var month = document.getElementById('month');
	// var year = document.getElementById('year');
	// var date = month.value + year.value;
	// console.log(date);
	// var d = new Date();
	// var cMonth = d.getMonth();
	// var cYear = d.getFullYear();
	// console.log(cMonth);
	// console.log(cYear);

	// if (cYear.toString() === year.value && cMonth > month.value) {
	// 	//need to make sure month-1 is > current month too
	// 	dateError.innerHTML = '<p class = "text-danger">* Error. Expiration date should be past the current date</p>';
	// 	billing.year.focus();
	// } else {
	// 	billing.billingDone.focus();
	// 	dateError.innerHTML = '';
	// }
// }
