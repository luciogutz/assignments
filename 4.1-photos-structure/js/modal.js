var $ = require("jquery");

$(function(){
  var $body = $("body");
  var modal = $body.find("[data-js='modal1']");
  var button1 = $body.find("[data-js='button1']");

  button1.on("click", function(e){
    modal.removeClass("hidden");
    modal.addClass("not__hidden");
  });
console.log(buttom1);



});
