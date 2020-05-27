// $(document).ready(function(e){

//LANDING PAGE
$('.total-btn').hide();
$('.circle3').hide();
$('.order-page').hide();
$('.getmypizza').hide();
$('.creditcard-page').hide();
$('#complete_form').hide();


$("#order-btn").click(function () {
    $(".order-page").show();
    $('.total-btn').show();
    $(".landing-page").hide();
});//closer for order-btn func


//**** DROPDOWNS FOR CRUST */
function hideCrustDrops() {
    $(".hand").hide();
    $('.skinny').hide();
    $('.ny').hide();
    $('.gluten').hide();
}
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
crustys.reset();

// Checkbox code
let userPizzaSelections = [];
// Monitor the toppings check boxes
$('#toppings').click(function (e) {
    // Determine if the user is checking or unchecking a choice for toppings
    // Update the toppings array
    console.log("This is the toppings " + e.target.checked);
    if (e.target.checked === undefined) {
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

function addTotals() {
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
const dropDownArr = ['hand0', 'skinny0', 'ny0', 'gluten0'];
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
    console.log("in clear " + user_selected);
    // Iterate through the dropDownArr to clear unused entries
    for (let i = 0; i < dropDownArr.length; i++) {

        if (i !== user_selected) {
            // Set unused drop downs to "Choose"
            $('#' + dropDownArr[i])[0].selectedIndex = 0;
        }
    }
}

let selected = sizeprice.querySelector('option[selected]');

$("#gettherest-btn").click(function () {
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
    $('#confirm_form').show();
    //AFTER CONFIRM ORDER takes to GOTTAFINDYA section
    $("#yup-btn").click(function () {
        $(".order-page").hide();
        $('.getmypizza').show();
        $('.total').hide();
        $('#confirm_form').hide();
    });

    //IF NOT confirm order TAKES BACK TO ORDER section
    $("#nope-btn").click(function () {
        $('#confirm_form').hide();
    });
});//closer for #orderit-btn click event

//******DWELLING TYPE DELIVERY ADDRESS- OTHER DROP DOWN */
let dwelling = document.querySelector('#dwelling');

$('#dwelling').change(function () {
    if (dwelling.value == 'Other...') {
        $('#other').show();
    } else {
        $('#other').hide();
    }
});

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

//SUBMIT BUTTON for gottafindya and streetcred
let payup = document.getElementById('payup-btn');

//GOTTAFINDYA VALIDATION with REGEX
let gottafindya = document.forms.gottafindya;//grabs the delivery form

let streetcred = document.forms.streetcred;//grabs the billing form NOT nameoncard

let paythepiper = document.forms.paythepiper;//grabs cc form NOT month and year

let nameoncard = document.forms.nameoncard;//grabs nameoncard form



let gottafindyaInputs = document.querySelectorAll('#gottafindya input:not(.notincl)');//grabs all input tags within #gottafindya  except those with .notincl
let streetcredInputs = document.querySelectorAll('#streetcred input:not(.notincl)');
let paythepiperInputs = document.querySelectorAll('#paythepiper input');
let nameoncardInput = document.querySelectorAll('#nameoncard input');


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
        validate(e.target, patterns[e.target.attributes.name.value]);
    });//closer for input.addEventListener-keyup
    gottafindya.reset();
});//closer for gottafindyaInputs.forEach()

//EVENT LISTENER FOR BILLING FORM VALIDATION
streetcredInputs.forEach((input) => {
    input.addEventListener('keyup', e => {
        validate(e.target, patterns[e.target.attributes.name.value]);
    });//closer for input.addEventListener-keyup
    streetcred.reset();
});//closer for gottafindyaInputs.forEach()

//EVENT LISTENER FOR CREDIT CARD FORM VALIDATION
paythepiperInputs.forEach((input) => {
    input.addEventListener('keyup', e => {
        validate(e.target, patterns[e.target.attributes.name.value]);
    });//closer for input.addEventListener-keyup
    paythepiper.reset();
});//closer for gottafindyaInputs.forEach()

nameoncardInput.forEach((input) => {
    input.addEventListener('keyup', e => {
        validate(e.target, patterns[e.target.attributes.name.value]);
    });//closer for input.addEventListener-keyup
    nameoncard.reset();
});//closer for gottafindyaInputs.forEach()

//CLICK/SUBMIT VALIDATION for DELIVERY(gottafindya) FIELDS
$('#payup-btn').on('click', e => {
    e.preventDefault();

    $('.error').remove();//clears form

    if ((name.classList.contains('invalid') || name.value == '')) {
        $('.delname').append('<div class="error">hey, hey what\'s your name?</div>');
    }

    if ((address.classList.contains('invalid') || address.value.trim() == '')) {
        $('.deladd').append('<div class="error">hey, hey need need your address! Gotta find ya, ya know!!</div>');
    }

    if ((city.classList.contains('invalid') || city.value == '')) {
        $('.delcity').append('<div class="error">hey, hey forgot the city! </div>');
    }

    if ((state.classList.contains('invalid') || state.value == '')) {
        $('.delstate').append('<div class="error">hey, hey your state? (not mental state haha!</div>');
    }

    if ((zip.classList.contains('invalid') || zip.value == '')) {
        $('.delzip').append('<div class="error">hey, hey zip, zip, zippety do dah!</div>');
    }

    if ((email.classList.contains('invalid') || email.value == '')) {
        $('.delem').append('<div class="error">hey, hey can we get your email?</div>');
    }

    if ((fone.classList.contains('invalid') || fone.value == '')) {
        $('.delfone').append('<div class="error">hey, hey what about your number?</div>');
    }
    else if ($('.error').length > 1){
        console.log('ciao ciao');
    }
    else {
        $('.getmypizza').hide();
        $('.creditcard-page').show();
        $('.total').show();
        $('.circle3').show();
    }
});


/////////DUPLICATE DELIVERY ADDRESS to BILLING when checked
$('#dup').click(function () {
    "use strict";
    if ($('#dup').prop('checked') === true) {
        $('#address2').val($('#address').val());
        $('#apt-ste-num2').val($('#apt-ste-num').val());
        $('#city2').val($('#city').val());
        $('#state2').val($('#state').val());
        $('#zip2').val($('#zip').val());
    } else {
        $('#whosbuying2').val('');
        $('#address2').val('');
        $('#apt-ste-num2').val('');
        $('#city2').val('');
        $('#state2').val('');
        $('#zip2').val('');
    }
});

// });//closing document ready


////////EXPIRATION DATE INPUT
// Get todays date and year
const today = new Date();
const todayyear = today.getFullYear();
const todaymonth = today.getMonth();

let mo = 0;
let yr = 2020;

function checkDate() {
    if (mo < todaymonth && yr == todayyear) {
        $('.delmo').append('<div class="error">hey, hey card expired!</div>');
        $('.delyr').append('<div class="error">hey, hey card expired!</div>');
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
$('#paythepiper-btn').on('click', e => {
    e.preventDefault();

    $('.error').remove();//clear form

    checkDate();//add check for exp date

    //validate fields for billing
    if((ccn.classList.contains('invalid') || ccn.value == '')) {
        $('.delccn').append('<div class="error">hey, hey check the number!</div>');
    }

    if((cvv.classList.contains('invalid') || cvv.value == '')) {
        $('.delcvv').append('<div class="error">hey, hey need the code!</div>');
    }
    
    if ((name2.classList.contains('invalid') || name2.value == '')) {//where pulling from ??  cannot be form...
        $('.delname2').append('<div class="error">hey, hey invalid name!</div>');
    }

     if ((address2.classList.contains('invalid') || address2.value.trim() == '')) {
        $('.deladd2').append('<div class="error">hey, hey need need your address! Gotta find ya, ya know!!</div>');

    } 
    if ((city2.classList.contains('invalid') || city2.value == '')) {
        $('.delcity2').append('<div class="error">hey, hey forgot the city!</div>');

    } 
    if ((state2.classList.contains('invalid') || state2.value == '')) {
        $('.delstate2').append('<div class="error">hey, hey your state? (not mental state haha!</div>');

    } 
    if ((zip2.classList.contains('invalid') || zip2.value == '')) {
        $('.delzip2').append('<div class="error">hey, hey zip, zip, zippety do dah!</div>');
    }
    else if ($('.error').length > 1){
        console.log('ciao ciao');
    }
    else {
        $('#complete_form').show();
    }
});

// Run the program
window.addEventListener('load', () => {
    hideCrustDrops();
});
