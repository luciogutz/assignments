var $ = require("jquery");

$(function(){
  var $body = $("body");
  var $outputElement = $body.find("[data-js='output']");
  var $exponentElements = $body.find("[data-js='exponent']");
  var $equals = $body.find("[data-js='equal']");

  $exponentElements.on("click", function(e){
    var $clickedExponentElement = $(this);
    var currentOutputString = $outputElement.text();
    var numberClickedString = $clickedExponentElement.text();
    $outputElement.text(currentOutputString + numberClickedString);

  });
  $equals.on("click", function(e){
    var $equals = eval($outputElement);
    $outputElement.text($equals);
      console.log($equals);
  });

});
