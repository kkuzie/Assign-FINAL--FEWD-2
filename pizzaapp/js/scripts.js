$(document).ready(function(e) {
    $('.order-page').hide();
    $('form').hide();

$("#order-btn").click(function() {
    $(".order-page").show();
    $(".landing-page").hide();
    // $("#delivery-option").text("PICKUP BY CUSTOMER");
  });

  $('.hand').hide();
  $('.skinny').hide();
  $('.ny').hide();
  $('.gluten').hide();

  $('.saycheese').hide();
  $('.top').hide();
  $('.sauce').hide();

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
  

})//closing document ready

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
