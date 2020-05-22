// $(document).ready(function(e){

//LANDING PAGE
$('.total-btn').hide();
$('.circle3').hide();
$('.order-page').hide();//TEMP SHOWING
$('.getmypizza').hide();//TEMP SHOWING
$('.creditcard-page').hide();

$("#order-btn").click(function () {
    $(".order-page").show();
    $('.total-btn').show();
    $(".landing-page").hide();
});//closer for order-btn func

// $('#payup-btn').click(function () {
//     let nameTest = document.getElementsByName('name');
//     if(nameTest.value === undefined) {
//         console.log("Yes we were right");
//     }
//     $('.getmypizza').hide();
//     $('.creditcard-page').show();
//     $('.total').show();//should show 
//     $('.circle3').show();
// });//closer for payup-btn func

//**** DROPDOWNS FOR CRUST */
function hideCrustDrops() { $(".hand").hide();
$('.skinny').hide();
$('.ny').hide();
$('.gluten').hide();
}
// $(".hand").hide();
// $('.skinny').hide();
// $('.ny').hide();
// $('.gluten').hide();

// $("#customRadio1").click(function () {
//     $(".hand").show();
//     $('.skinny').hide();
//     $('.ny').hide();
//     $('.gluten').hide();
// });

// $("#customRadio2").click(function () {
//     $('.hand').hide();
//     $(".skinny").show();
//     $('.ny').hide();
//     $('.gluten').hide();
// });

// $("#customRadio3").click(function () {
//     $('.hand').hide();
//     $(".skinny").hide();
//     $('.ny').show();
//     $('.gluten').hide();
// });

// $("#customRadio4").click(function () {
//     $('.hand').hide();
//     $(".skinny").hide();
//     $('.ny').hide();
//     $('.gluten').show();
// });
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

let price;
let type;
let sizeprice = document.querySelector('.sizeprice');
let hand = document.querySelector('.hand');
let skinny = document.querySelector('.skinny');
let ny = document.querySelector('.ny');
let gluten = document.querySelector('.gluten');
let check = false;
let totalToppings = 0;
console.log(sizeprice);
console.log(hand);
console.log(skinny);
console.log(ny);
console.log(gluten);

crustys.reset();

// Checkbox code
let userPizzaSelections = [];
// Monitor the toppings check boxes
$('#toppings').click(function (e) {

    // Determine if the user is checking or unchecking a choice for toppings
    // Update the toppings array
    console.log("This is the toppings " +e.target.checked);
    if(e.target.checked === undefined){
        console.log("Nothing")
    } else if (e.target.checked === true) {
        userPizzaSelections.push(e.target.value);
    } else {
          
        let removeItem = userPizzaSelections.indexOf(e.target.value);
      
        userPizzaSelections.splice(removeItem, 1);
    }

    // Keep track of the total toppings checked.
    totalToppings = $('input:checkbox:checked').length;
    console.log(totalToppings);
    console.log(userPizzaSelections);
    addTotals()

});

function addTotals(){
    let toppingCost = totalToppings * .99;
    let endPrice = crustPrice + cheesePrice + saucePrice + toppingCost;
  $('#total').text(endPrice.toFixed(2));
}


// This is the  form event listener
let saucePrice = 0.00;
let cheesePrice = 0.00;
// Set the global cost for sauce
$('.saucy').change(function (e) {

    //Set the global crust price
    saucePrice = Number(e.target.value);

    // Globally set the user sauce choice. These variables will be used at check out.
    sauceOption = e.target.id;
    sauceChoice = e.target.selectedIndex;
    addTotals()
});
// Set the global cost for sauce
$('#cheese').change(function (e) {

    //Set the global crust price
    cheesePrice = Number(e.target.value);

    // Globally set the user sauce choice. These variables will be used at check out.
   cheeseOption = e.target.id;
    cheeseChoice = e.target.selectedIndex;
    addTotals()
});


// Listen for user input on the radio buttons
const radioButtonArr = ['customRadio1', 'customRadio2', 'customRadio3', 'customRadio4'];
const dropDownArr  = ['hand0', 'skinny0', 'ny0', 'gluten0'];
let crustPrice = 0.00;

$(':radio').click(function (e) {
    radioId = e.target.id;
    console.log(radioId);
    crust_option = e.target.value;
    unHideCrust(radioId);

});
// Unhide crust options
function unHideCrust(radioId) {

    // Set all options to hide
   hideCrustDrops();

    // Turn radioId into a number
    let user_selected_radio = radioButtonArr.indexOf(radioId);

    // Show the user selected radio button
    $('#' + dropDownArr[user_selected_radio]).show();

}

// Set the global cost for crust
$('.sizeprice').change(function (e) {
console.log("in size price "+e.target.id)
    //Set the global crust price
    crustPrice = Number(e.target.value);

    // Globally set the user crust choice. These variables will be used at check out.
    crustOption = e.target.id;

    crustChoice = e.target.selectedIndex;
    
  // Check to see if the user selected a crust and set the check variable
   if (crustPrice > 0) {
       check = true;
   } else {
       check = false;
   }
  // Clear unused crust drop downs
     clearDropDowns(e);
     addTotals()
});

////////////// CRUST SELECTION ///////////////////
function clearDropDowns(e) {
    let user_selected = dropDownArr.indexOf(e.target.id);
    console.log("in clear "+user_selected);
    // Iterate through the dropDownArr to clear unused entries
    for (let i = 0; i < dropDownArr.length; i++) {

        if (i !== user_selected) {
            // Set unused drop downs to "Choose"
            $('#' + dropDownArr[i])[0].selectedIndex = 0;
        }
    }

}

// crustys.addEventListener("change", function (e) {

//     if (e.target.value > 0 && e.target.value <= 3) {
//         check = true;
//         clearFields('customRadio1');
//     } else if (e.target.value > 3 && e.target.value <= 5) {
//         console.log("This is the true" + e.target.value);
//         check = true;
//         clearFields('customRadio2');
//     } else if (e.target.value > 5 && e.target.value <= 7) {
//         console.log("This is the true" + e.target.value);
//         check = true;
//         clearFields('customRadio3');
//     } else if (e.target.value == 8) {
//         check = true;
//         console.log("This is the true" + e.target.value);
//         clearFields('customRadio4')

//     } else {
//         console.log("do nothing");
//     }
// });
console.log(hand.value);

let selected = sizeprice.querySelector('option[selected]');
console.log(selected);
console.log(selected.value);

$("#gettherest-btn").click(function () {
    console.log(check);
    if (check === false) {
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
//////FUNCTION FOR RESETTING DROPDOWN FIELDS WHEN NEW SIZE/PRICE of crust CHOSEN
function clearFields(type) {
    if (type === "customRadio1") {
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
}//closer for func clearFields()

//////CONFIRMATION FORM POPUP
$('#confirm_form').hide();
//Function To Display Popup
$('#orderit-btn').click(function (e) {
    console.log('clicked');
    $('#confirm_form').show();
    //AFTER CONFIRM ORDER takes to GOTTAFINDYA section
    $("#yup-btn").click(function () {
        $(".order-page").hide();
        $('.getmypizza').show();
        $('.total').hide();
        $('#confirm_form').hide();
    });

    console.log('WORKS to HERE');
    //IF NOT confirm order TAKES BACK TO ORDER section
    $("#nope-btn").click(function () {
        $('#confirm_form').hide();
    });
    console.log('WORKS to HERE2');
});//closer for #orderit-btn click event

//******DWELLING TYPE DELIVERY ADDRESS- OTHER DROP DOWN */
let dwelling = document.querySelector('#dwelling');
console.log(dwelling);
console.log('WORKS to HERE 3');

$('#dwelling').change(function () {
    if (dwelling.value == 'Other...') {
        $('#other').show();
    } else {
        $('#other').hide();
    }
});
console.log(dwelling.value);

console.log('WORKS to HERE 4');









//GOTTAFINDYA & STREETCRED FORM VALIDATION
//GOTTAFINDYA
let name = document.getElementById('whosbuying');
let address = document.getElementById('address');
let city = document.getElementById('city');
let state = document.getElementById('state');
let zip = document.getElementById('zip');
let email = document.getElementById('email');
let fone = document.getElementById('fone');

//STREET CREDS
let name2 = document.getElementById('whosbuying2');
let address2 = document.getElementById('address2');

let city2 = document.getElementById('city2');
let state2 = document.getElementById('state2');
let zip2 = document.getElementById('zip2');
// let email2 = document.getElementById('email2');
// let fone2 = document.getElementById('fone2');

//SUBMIT BUTTON for gottafindya and streetcred
let payup = document.getElementById('payup-btn');

//GOTTAFINDYA VALIDATION with REGEX
let gottafindya = document.forms.gottafindya;
console.log(gottafindya);

let streetcred = document.forms.streetcred;
console.log(streetcred);

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
let patterns = {
    name: /^(?![\s.]+$)[a-zA-Z\s.]*$/,
    address: /^(?![\s.]+$)[a-zA-Z\s.]*$/,
    citytype: /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/,
    statetype: /^([Aa][LKSZRAEPlkszraep]|[Cc][AOTaot]|[Dd][ECec]|[Ff][LMlm]|[Gg][AUau]|[Hh][Ii]|[Ii][ADLNadln]|[Kk][SYsy]|[Ll][Aa]|[Mm][ADEHINOPSTadehinopst]|[Nn][CDEHJMVYcdehjmvy]|[Oo][HKRhkr]|[Pp][ARWarw]|[Rr][Ii]|[Ss][CDcd]|[Tt][NXnx]|[Uu][Tt]|[Vv][AITait]|[Ww][AIVYaivy])$/,
    zip: /(^\d{5}$)|(^\d{9}$)|(^\d{5}-\d{4}$)/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    phone: /^\D?([2-9]{1})(\d{2})\D?\D?(\d{3})\D?(\d{4})$/,
    cvv: /^[0-9]{3,4}$/,
    mc: /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$ /,
    ccn: /^(?:4[0-9]{12}(?:[0-9]{3})?|(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|3[47][0-9]{13})$/,
}//closer for patterns object

//VALIDATION of add, billing, cc FUNCTION
function validate(field, regex) {
    console.log(regex.test(field.value));
    if (regex.test(field.value)) {
        field.className = 'form-control valid';
        $('.errorFone').text('');
    } else {
        field.className = 'form-control invalid';
       
        $('.errorFone').text("10 digits only, please");
    }
}//closing for function validate()

//EVENT LISTENER FOR DELIVERY FORM VALIDATION
gottafindyaInputs.forEach((input) => {
    input.addEventListener('keyup', e => {
        console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value]);
    });//closer for input.addEventListener-keyup
    gottafindya.reset();
});//closer for gottafindyaInputs.forEach()

//EVENT LISTENER FOR BILLING FORM VALIDATION
streetcredInputs.forEach((input) => {
    input.addEventListener('keyup', e => {
        console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value]);
    });//closer for input.addEventListener-keyup
    streetcred.reset();
});//closer for gottafindyaInputs.forEach()

//EVENT LISTENER FOR CREDIT CARD FORM VALIDATION
paythepiperInputs.forEach((input) => {
    input.addEventListener('keyup', e => {
        console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value]);
    });//closer for input.addEventListener-keyup
    paythepiper.reset();
});//closer for gottafindyaInputs.forEach()

    /////CLICK/SUBMIT VALIDATIONS  to be sure all fields complete

    // let getvalue = document.getElementsByTagName('input');
    // console.log(getvalue);//every input and returns them in an HTML collection
    // let getvalue = document.querySelector('.form-content input');
    // console.log(getvalue);


    //CLICK/SUBMIT VALIDATION for DELIVERY(gottafindya) FIELDS
    $('#payup-btn').on('click', e=> {
        e.preventDefault();
    //    console.log(e.target.name);//empty string???
    //    console.log(e.target.name.value);//undefined


// let delivery = $('#gottafindya input[type="text"]');
    
//             if(!$(delivery).val()){
//                 $(delivery).addClass("error");
//             //   $(this).appendPa      ('<div class="error test test"></div>');
//                 $('.del').append('<div>hey, hey invalid name! KAREN</div>');
//             // } else if (delivery.classList.contains('invalid')){
//             //     $('.del').append('<div>hey, hey invalid name! LAMAR</div>');  
//             } else {
//                 $(delivery).removeClass("error");
//             }

    






// if (name.classList.contains('invalid')) { 
//         console.log("Name Invalid")
//          $('.delname').append('<div class="error"></div>');
//             $('.error').text('hey, hey invalid name! KAREN');
// } if (name.classList.contains('invalid')) { 
//     console.log("Name Invalid")
//      $('.delname').append('<div class="error"></div>');
//         $('.error').text('hey, hey invalid name! KAREN');


        if ((name.classList.contains('invalid') || name.value == '')) { 
            // if (name.classList.contains('invalid')){
            //  let input = e.target.classList;
        // console.log(input);
        // console.log(e.target.name.classLIst);
            console.log('fill in name');
            $('.delname').append('<div id="test">hey, hey invalid name! KAREN</div>');
        }
            // $('.delname').append('<div class="error"></div>');
            // $('.error').text('hey, hey invalid name! KAREN');
            // } else if (name.value == '') {
            //     $('.delname').append('<div class="error"></div>');
            //     $('.error').text('hey, hey forgot a field!   LAMAR');
            // } else {
            // $('.delname').append('<div> </div>');

                // $('.delname').append('<div class="error"></div>');
                // $('.error').text('BLANK');
            // }
            // return false;
            
         if  ((address.classList.contains('invalid') ||address.value == '')){
            console.log('fill in address');
            $('.deladd').append('<div class="error"></div>');
            $('.error').text('hey, hey forgot a field!');
            return false;
         }else {
            $('.error').remove();////do this for all of them!!!
         }

        if ((city.classList.contains('invalid') || city.value == '')) {
        console.log('fill in city');
        $('.delcity').append('<div class="error"></div>');
        $('.error').text('hey, hey forgot a field!');
        return false;

    } if ((state.classList.contains('invalid') || state.value == '')) {
    console.log('fill in state');
    $('.delstate').append('<div class="error"></div>');
    $('.error').text('hey, hey forgot a field!');
    return false;

} if ((zip.classList.contains('invalid') || zip.value == '')){
console.log('fill in form');
$('.delzip').append('<div class="error"></div>');
$('.error').text('hey, hey forgot a field!');
return false;

} if ((email.classList.contains('invalid') || email.value == '')) {
console.log('fill in email');
$('.delem').append('<div class="error"></div>');
$('.error').text('hey, hey forgot a field!');
return false;

} if ((fone.classList.contains('invalid') || fone.value == '')) {
console.log('fill in fone');
$('.delfone').append('<div class="error"></div>');
$('.error').text('hey, hey forgot a field!');
return false;

        } else {
            console.log('go to next screen');
            // $('div').remove('.deladd');
            // $('#test').hide();
//             $('.getmypizza').hide();
//             $('.creditcard-page').show();
//             $('.total').show();//should show 
//             $('.circle3').show();
//             return true;
        }
//         // gottafindya.reset();
    });

    


/////////DUPLICATE DELIVERY ADDRESS to BILLING when checked

$('#dup').click(function () {
    "use strict";
    $('#whosbuying2').val($('#whosbuying').val());
    $('#address2').val($('#address').val());
    $('#apt-ste-num2').val($('#apt-ste-num').val());
    $('#city2').val($('#city').val());
    $('#state2').val($('#state').val());
    $('#zip2').val($('#zip').val());
});
// });//closing document ready


////////EXPIRATION DATE INPUT
// Get todays date and year
const today = new Date();
const todayyear = today.getFullYear();
const todaymonth = today.getMonth();

// let ccmonthform = document.querySelector('#ccmonth');//gets month exp form tag
/////GRABS the MONTH VALUE
// let ccmonth = document.querySelector('#ex-month');//gets select tag for month exp
// let monthValue = ccmonth.options[ccmonth.selectedIndex].value;

// let ccyear = document.querySelector('#ex-year');
// let yearValue = ccyear.options[ccyear.selectedIndex].value;
// Lamar Stuff
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

////SUBMIT EVENT LISTENER FOR FINAL ORDER & VALIDATION////

$('#paythepiper-btn').on('submit', e=> {
        e.preventDefault();
console.log('clickkkkk');
        if ((name2.classList.contains('invalid') || name2.value == '')) { 
            console.log('fill in name2');
            $('.delname2').append('<div class="error"></div>');
            $('.error').text('hey, hey forgot a field!');
            return false;
            
        } else if  ((address2.classList.contains('invalid') ||address2.value == '')){
            console.log('fill in address2');
            $('.deladd2').append('<div class="error"></div>');
            $('.error').text('hey, hey forgot a field!');
            return false;

        } if ((city2.classList.contains('invalid') || city2.value == '')) {
        console.log('fill in city2');
        $('.delcity2').append('<div class="error"></div>');
        $('.error').text('hey, hey forgot a field!');
        return false;

    } if ((state2.classList.contains('invalid') || state2.value == '')) {
    console.log('fill in state2');
    $('.delstate2').append('<div class="error"></div>');
    $('.error').text('hey, hey forgot a field!');
    return false;

} if ((zip2.classList.contains('invalid') || zip2.value == '')){
console.log('fill in zip2');
$('.delzip').append('<div class="error"></div>');
$('.error').text('hey, hey forgot a field!');
return false;

        } else {
            console.log('go to next screen2');
            // $('.getmypizza').hide();
            // $('.creditcard-page').show();
            // $('.total').show();//should show 
            // $('.circle3').show();
            return true;
        }
    });
// Run the program

window.addEventListener('load', () => {
    hideCrustDrops();
})
    /////START KAREN VERSION
    // This is the the form event listener
//     ccmonth.addEventListener("change", function(e) {
//         // console.log(monthValue);
//         e.preventDefault();
//         let mo = e.target.value;
//         console.log(mo);
//         let yr;
//         $('#ex-year').change(e => {
//             // console.log(yearValue);
//             e.preventDefault();
//             yr = e.target.value;    
//             // console.log(e.target.value);
//             console.log(yr);


//         if (mo < todaymonth && yr == todayyear) {
//             console.log('expired');
//         } else {
//             console.log('cool');
//         }
//         // ccmonth.reset();//DOESNT WORK
//     });
//  });
/////END KARENS VERSION


    /////GRABS the YEAR VALUE
    // let ccyear = document.querySelector('#ex-year');
    // let yearValue = ccyear.options[ccyear.selectedIndex].value;

    // $('#ex-year').change(e => {
    //     console.log(yearValue);
    //     e.preventDefault();
    //     console.log(e.target.value);
    // })

    /////END EXPIRATION DATE INPUT///////





    
    // btn.addEventListener('focus', e => {
    //     e.preventDefault();
    //     const addName = addInput.querySelector('input[name="name"]').value.trim();
    //     console.log(addName);
    //     if (addName == '') {
    //         addInput.name.style.border = '3px solid crimson';
    //     });