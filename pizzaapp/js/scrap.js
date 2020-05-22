$(document).ready(function(e){

// $("#orderit-btn").click(function() {
//     if(sizeprice.value == selected.value || sizeprice2.value == selected.value || sizeprice3.value == selected.value|| sizeprice4.value == selected.value) {
//       // alert('please pick crust');
//       $('.crust-choice').append('<div id="choosecrust"></div>');
//       $('#choosecrust').text('Hey, hey! pick a size!');
//     //   function clear () {
//     //     $("select").each(function() {this.selectedIndex = 0});      
//     // }
//     // clear();
//       // selected1.value && selected2.value && selected3.value && selected4.value === selected;
//       // $(".order-page").hide();
//       // $(".landing-page").hide();    
//       // $('.getmypizza').show();
//     } else if (sizeprice.value === 1 || sizeprice.value == 2 || sizeprice2.value === 3 || sizeprice2.value === 4 || sizeprice3.value === 5 || sizeprice3.value === 6 || sizeprice3.value === 7 || sizeprice4.value === 8) {
//       $('.saycheese').show();
//       $('.top').show();
//       $('.saucy').show();  
//       $('.circle1').show(); 
//       $('.circle').hide(); 
//       $('.crust-choice').append('<div id="choosecrust"></div>');
//       $('#choosecrust').text('');
//     } 
    // else {
      // sizeprice.option.reset();
      // sizeprice2.option.reset();
      // sizeprice3.option.reset();
      // sizeprice4.option.reset();
    // }
    // });

    






                //         <div class="custom-control custom-radio" id='hand1st'>
                //         <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
                //         <label class="custom-control-label hand1st" for="customRadio1">
                //             <h3>By the hand...</h3>
                //             <!-- Nah, not feeling it -->
                //         </label>

                //     </div>
                //     <!--closer for hand1st-->

                //     <div class="custom-control custom-radio" id="skinny1st">
                //         <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
                //         <label class="custom-control-label" for="customRadio2">
                //             <h3>Skinny dippin</h3>
                //             <!-- Yup, cheese it up! -->
                //         </label>

                //     </div>

                //     <div class="custom-control custom-radio" id="ny1st">
                //         <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input">
                //         <label class="custom-control-label" for="customRadio3">
                //             <h3>i <span style="font-size:120%;color:red;">&hearts;</span> NY</h3>
                //         </label>


                //     </div>
                //     <div class="custom-control custom-radio" id="gluten1st">
                //         <input type="radio" id="customRadio4" name="customRadio" class="custom-control-input">
                //         <label class="custom-control-label" for="customRadio4">
                //             <h3>Glutenless for punishment</h3>
                //         </label>

                //     </div>
                //     <form action="">
                //     <select class="custom-select hand sizeprice">
                //         <option selected>Tossed by hand - Select size</option>
                //         <option value="1">Little Sis 12" $9.99</option>
                //         <option value="2">Middle Child 14" $12.99</option>
                //         <option value="3">Big Brother 16" $14.99</option>
                //     </select>
                //     <select class="custom-select skinny sizeprice">
                //         <option selected>Cracker thin and crunchy - Select Size</option>
                //         <option value="1">Middle Child 12" $11.99</option>
                //         <option value="2">Big Brother 14" $13.99</option>
                //     </select>
                //     <select class="custom-select ny sizeprice">
                //         <option selected>New Yorker Style - Select Size</option>
                //         <option value="1">Big Boss 18" $16.99</option>
                //         <option value="2">Godfather 20" $19.99</option>
                //     </select>
                //     <select class="custom-select gluten sizeprice">
                //         <option selected>Only one size option</option>
                //         <option value="1">Little Sis 12" $10.99</option>
                //     </select>
                // </form>



                // </div>




//////TRIAL FOR COSTS
// let pizzaSize = {

//   "bythehand": [
//       {
//           size: "Lil Sis",
//           price: 9.99
//       },
//       {
//           size: "Medium",
//           price: 12.99
//       },
//       {
//           size: "Large",
//           price: 14.99
//       }
//   ],
//   "skinny": [
//       {
//           size: "Medium",
//           price: 11.99
//       },
//       {
//           size: "Large",
//           price: 13.99
//       }
//   ],
//   "ny": [
//       {
//           size: "Medium",
//           price: 16.99
//       },
//       {
//           size: "Extra Large",
//           price: 19.99
//       }
//   ],
//   "gluten": [
//       {
//           size: "Small",
//           price: 10.99
//       }
//   ]
// };
// console.log(pizzaSize);
// console.log(pizzaSize[0].price);


function crustTotal() {
  let displayTotal = document.querySelector('.total-btn span');//grabs total div with total-btn button tag in it
  console.log(displayTotal);
  var priceTotal = 0;
  console.log(priceTotal);
  displayTotal.innerText = '$' + priceTotal;
  
  // for (let i=0; i<)
	// priceTotal = parseFloat(pizzaSize.price);
	// displayTotal.innerHTML = '<p>Order Total: $' + priceTotal + '</p>';
	// return priceTotal;
}
crustTotal();


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










// //SETTING PRICES TO 0
// var currentPizzaPrices = [0, 0, 0, 0];



//GETTING VALUE/TEXT OF CHEESEOPTIONS AND DISPLAYING IT IN ORDER DETAILS DIV
// function cheeseOptionValue() {
//   "use strict";
//   var costs = [0, 0, 2.99, 3.99],
//       cost = costs[$('#cheese').selectedIndex],
//       cheese = $('#cheese').options[$('#cheese').selectedIndex].value;
//   $('cheeseOptionsOrderDetails').innerHTML = "<br>" + cheese;
//   return cost;
// }
// //VERIFY SELECTED VALUE OF ITEM IN RADIO BUTTON FOR DOUGH OPTIONS
// //PROGRAMMATICALLY ADDING TO A DROP DOWN LIST
// function verifyDoughOption() {
//     "use strict";

//     var doughType = pizzaSizePrices;//doughType refers to items in if stmts below
//     //
//     if ($('handTossed').checked) {
//         doughType = "handTossed";

//     } else if ($('thinCrust').checked) {
//         doughType = "thinCrust";


//     } else if ($('nYStyle').checked) {
//         doughType = "nyStyle";


//     } else if ($('glutenFree').checked) {
//         doughType = "glutenFree";


//     } else {
//         doughType = "none";
//         setPhase(phases.crustType);
//         updateOrder();
//         return;
//     }

//     sizePrice = pizzaSizePrices[doughType];


//This is the conditional code to check which drop down value is selected
   // $(".order-page").hide();
    // $(".landing-page").hide();    
    // $('.getmypizza').show();
//  if (hand.value == 1){
//      type = 'hand1';
//     clearFields(type);
//     price = 9.99;
//    console.log(price);
//    showTop(); 
//   } else if  (hand.value == 2){
//      type = 'hand1';
//     clearFields(type);
//     price = 12.99;
//      showTop(); 
//   } else if (hand.value == 3){
//     console.log("hello world");
//     type = 'hand1';
//     clearFields(type);
//     price = 14.99;
//      showTop(); 
//   } else if (skinny.value == 4){
//     console.log("made it");
//        type = 'skinny1';
//       clearFields(type);
//       price = 11.99;
//        showTop(); 
//   } else if (skinny.value == 5){
//          type = 'skinny1';
//         clearFields(type);
//         price = 13.99;
//          showTop(); 
// } else if (ny.value == 6){
//           type = 'ny1';
//           clearFields(type);
//           price = 16.99;
//            showTop(); 
//   } else if (ny.value == 7){
//              type = 'ny1';
//             clearFields(type);
//             price = 19.99;
//              showTop();
//   } else if (gluten.value == 8){
//              type = 'gluten1';
//               clearFields(type);
//               price = 10.99;
//                showTop(); 
//   // (hand.value == 1 || hand.value == 2 || hand.value == 3 || skinny.value == 4 || skinny.value == 5 || ny.value == 6 || ny.value == 7 || gluten.value == 8) {
//   } 

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