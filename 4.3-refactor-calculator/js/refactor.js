var $ = require("jquery");

$(function(){

var $body = $("body");
var $calculatorElement = $body.find("[data-js='calculator']");
var $exponentElement = $body.find("[data-js='exponent']");
var $outputElement = $body.find("[data-js='output']");

$calculatorElement.on("click", function(e){
   var concatExponents += $outputElement;
   
console.log(concatExponents);
});

});
