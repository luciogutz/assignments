var refactor = require("./refactor");

// document.addEventListener("DOMContentLoaded", function(){
//     // need to create var to connect data-js to querySelector
//     var button7Element = document.querySelector("[data-js='button__7']");
//     var outputButtonElement = document.querySelector("[data-js='output']");
//     // creating addEventListener and argument click and function() "anonymous"
//     button7Element.addEventListener("click", function(){
//         // sending input button7Element to outputButtonElement, as a text 7.
//         outputButtonElement.textContent += 7;
//     });
//
//     var button8Element = document.querySelector("[data-js='button__8']");
//     var outputButtonElement = document.querySelector("[data-js='output']");
//
//     button8Element.addEventListener("click", function(){
//
//         outputButtonElement.textContent += 8;
//
//     });
//
//     var button9Element = document.querySelector("[data-js='button__9']");
//     var outputButtonElement = document.querySelector("[data-js='output']");
//
//     button9Element.addEventListener("click", function(){
//
//         outputButtonElement.textContent += 9;
//     });
//
//     var button4Element = document.querySelector("[data-js='button__4']");
//     var outputButtonElement = document.querySelector("[data-js='output']");
//
//     button4Element.addEventListener("click", function(){
//
//         outputButtonElement.textContent += 4;
//     });
//
//     var button5Element = document.querySelector("[data-js='button__5']");
//     var outputButtonElement = document.querySelector("[data-js='output']");
//
//     button5Element.addEventListener("click", function(){
//
//         outputButtonElement.textContent += 5;
//     });
//
//     var button6Element = document.querySelector("[data-js='button__6']");
//     var outputButtonElement = document.querySelector("[data-js='output']");
//
//     button6Element.addEventListener("click", function(){
//
//       outputButtonElement.textContent += 6;
//     });
//
//     var button1Element = document.querySelector("[data-js='button__1']");
//     var outputButtonElement = document.querySelector("[data-js='output']");
//
//     button1Element.addEventListener("click", function(){
//
//       outputButtonElement.textContent += 1;
//
//     });
//
//     var button2Element = document.querySelector("[data-js='button__2']");
//     var outputButtonElement = document.querySelector("[data-js='output']");
//
//     button2Element.addEventListener("click", function(){
//
//         outputButtonElement.textContent += 2;
//     });
//
//     var button3Element = document.querySelector("[data-js='button__3']");
//     var outpuButtonElement = document.querySelector("[data-js='output']");
//
//     button3Element.addEventListener("click", function(){
//
//         outputButtonElement.textContent += 3;
//     });
//
//     var button0Element = document.querySelector("[data-js='button__0']");
//     var outputButtonElement = document.querySelector("[data-js='output']");
//
//     button0Element.addEventListener("click", function(){
//
//         outputButtonElement.textContent += 0;
//     });
//
//     var divideButtonElement = document.querySelector("[data-js='divide']");
//     var outputButtonElement = document.querySelector("[data-js='output']");
//
//     divideButtonElement.addEventListener("click", function(){
//
//         outputButtonElement.textContent += ("/");
//     });
//
//     var multiplyButtonElement = document.querySelector("[data-js='multiply']");
//     var outputButtonElement = document.querySelector("[data-js='output']");
//
//     multiplyButtonElement.addEventListener("click", function(){
//
//         outputButtonElement.textContent += ("*");
//     });
//
//     var subtractButtonElement = document.querySelector("[data-js='subtract']");
//     var outputButtonElement = document.querySelector("[data-js='output']");
//
//     subtractButtonElement.addEventListener("click", function(){
//
//         outputButtonElement.textContent += ("-");
//     });
//
//     var decimalButtonElement = document.querySelector("[data-js='decimal']");
//     var outputButtonelement = document.querySelector("[data-js='output']");
//
//     decimalButtonElement.addEventListener("click", function(){
//
//         outputButtonElement.textContent += (".")
//     });
//
//     var equalsButtonElement = document.querySelector("[data-js='equals']");
//     var outputButtonElement = document.querySelector("[data-js='output']");
//     equalsButtonElement.addEventListener("click", function(){
//     var answer = eval(outputButtonElement.textContent);
//       outputButtonElement.textContent = answer;
//     var finalAnswer = answer.toFixed(2);
//       outputButtonElement.textContent = finalAnswer;
//
//     });
//
//     var additionButtonElement = document.querySelector("[data-js='addition']");
//     var outputButtonElement = document.querySelector("[data-js='output']");
//
//     additionButtonElement.addEventListener("click", function(){
//
//         outputButtonelement.textContent += ("+");
//     });
//
//     var clearButtonElement = document.querySelector("[data-js='clear']");
//     var outputButtonElement = document.querySelector("[data-js='output']");
//     var clearDisplay = ("");
//     clearButtonElement.addEventListener("click", function(){
//
//         outputButtonElement.textContent = clearDisplay;
//     });
//
//
//
// });
