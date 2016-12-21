var $ = require("jquery");

$(function(){
  var $body = $("body");
  var $modal = $body.find("[data-js='modal1']");
  var $backButton = $body.find("[data-js='backButton']");
  var $button1 = $body.find("[data-js='button1']");
  var $button2 = $body.find("[data-js='button2']");
  var $button3 = $body.find("[data-js='button3']");
  var $button4 = $body.find("[data-js='button4']");
  var $button5 = $body.find("[data-js='button5']");
  var $button6 = $body.find("[data-js='button6']");

  // functions for album 1
  $button1.on("click", function(e){
    $modal.removeClass("hidden");
  });
  $backButton.on("click", function(e){
    $modal.addClass("hidden");
  });

  // functions for album 2
  $button2.on("click", function(e){
    $modal.removeClass("hidden");
  });
  $backButton.on("click", function(e){
    $modal.addClass("hidden");
  });

  // functions for album 3
  $button3.on("click", function(e){
    $modal.removeClass("hidden");
  });
  $backButton.on("click", function(e){
    $modal.addClass("hidden");
  });

  // functions for album 4
  $button4.on("click", function(e){
    $modal.removeClass("hidden");
  });
  $backButton.on("click", function(e){
    $modal.addClass("hidden");
  });

  // functions for album 5
  $button5.on("click", function(e){
    $modal.removeClass("hidden");
  });
  $backButton.on("click", function(e){
    $modal.addClass("hidden");
  });

  // functions for album 6
  $button6.on("click", function(e){
    $modal.removeClass("hidden");
  });
  $backButton.on("click", function(e){
    $modal.addClass("hidden");
  });

// console.log($button1);



});
