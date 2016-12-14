$(function(){
  // need to get data-js to main.js, im getting the first item on my list because that what I need to manipulate.
  var $destinationElement = $("[data-js='destination']");
  // need a way to listen for an event and add a function call on that event
  $destinationElement.on("click", function(e){
    // declar a ver ref the function (e)
    var $clickedElement = $(this);
    // when the element is clicked i need it to expand to show more information, but I also need the expanded destination to go back to its original place when another destination is "clicked".
    $destinationElement.filter(".more__info").removeClass("more__info");


    $clickedElement.addClass("more__info");

  });
console.log($);
});
