$(document).ready(function(e){

//LANDING PAGE
    $('.order-page').hide();
    // $('#streetcreds').hide();
    // $('#gottafindya').hide();
    // $('.paythepiper').hide();
    $('.getmypizza').hide();


$("#order-btn").click(function() {
    $(".order-page").show();
    $(".landing-page").hide();
    // $("#delivery-option").text("PICKUP BY CUSTOMER");
//  });

 //ORDER PAGE
 
$("#orderit-btn").click(function() {
    $(".order-page").hide();
    $(".landing-page").hide();    
    // $('#streetcreds').show();
    // $('#gottafindya').show();
    // $('.paythepiper').show();
    $('.getmypizza').show();

  });
});


  //***TRIED TO REMOVE DEFAULT CHECK OF RADIO BUTTON - didnt work
  // https://www.tutorialrepublic.com/faq/how-to-check-or-uncheck-radio-button-dynamically-using-jquery.php

//   $("#customRadio1").click(function(){//button class/id
//     $(".hand1st").prop("checked", true);//label class/id
// });

// $(".check-female").click(function(){
//     $("#female").prop("checked", true);
// });

  // $('.hand').hide();//not hidden so will show automatically since it is default checked radio button 
  $('.skinny').hide();
  $('.ny').hide();
  $('.gluten').hide();

  // $('.saycheese').hide();
  // $('.top').hide();
  // $('.saucy').hide();

$("#hand1st").click(function() {
  $(".hand").show();
  $('.skinny').hide();
  $('.ny').hide();
  $('.gluten').hide();
});

$("#skinny1st").click(function() {
  $('.hand').hide();
  $(".skinny").show();
  $('.ny').hide();
  $('.gluten').hide();
  });

$("#ny1st").click(function() {
  $('.hand').hide();
  $(".skinny").hide();
  $('.ny').show();
  $('.gluten').hide();
  });
  
$("#gluten1st").click(function() {
  $('.hand').hide();
  $(".skinny").hide();
  $('.ny').hide();
  $('.gluten').show();
  });
  

});//closing document ready

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