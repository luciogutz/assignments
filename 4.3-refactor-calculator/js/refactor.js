var $ = require("jquery");

$(function(){
  var $body = $("body");
  var $outputElement = $body.find("[data-js='output']");
  var $exponentElements = $body.find("[data-js='exponent']");
  var $equals = $body.find("[data-js='equals']");
  var $clearButton = $body.find("[data-js='clear']");

  $exponentElements.on("click", function(e){
    var $clickedExponentElement = $(this);
    var currentOutputString = $outputElement.text();
    var numberClickedString = $clickedExponentElement.text();
    $outputElement.text(currentOutputString + numberClickedString);
  });
  $equals.on("click", function(e){
    var total = eval($outputElement.text());
    $outputElement.text(total);
  });
  $clearButton.on("click", function(){
    var $this = $("this");
    $this = $outputElement.text("");
  });

});
