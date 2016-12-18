$(function(){


  var $body = $("body");

  var $giftInput = $body.find("[data-js='giftInput']");
  var $addElement = $body.find("[data-js='add']");
  var $giftListElement = $body.find("[data-js='selectionArea']");
  var $total = $body.find("[data-js='total']");


  $addElement.on("click", function(e){

      e.preventDefault();

      var $giftInputValue = $giftInput.val();

      var $checkElement = $("<button>")
        .attr({
          class: "checkButton",
          type: "button"
        })
        .html("&#10003");

      var $listItemElement = $("<p>")
        .attr({
          class: "itemList"
        })
        .text($giftInputValue);

      var $price = [20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];

      var $randomPriceArray = $price[Math.floor(Math.random() * $price.length)];


      var $amountElement = $("<p>")
        .attr({
          class: "amount"
        })
        .text("$" + $randomPriceArray);


      var $giftList = $("<section>")
        .append($checkElement)
        .append($listItemElement)
        .append($amountElement);

        $giftListElement.prepend($giftList);

        var $totalPrice = "";
        var $priceArray = "";

          // Create placeholder variable to hold total price outside of loop
          // loop over each found instance of price
      $randomPriceArray.each(function(priceEl){
        var $randomPriceArray = $(".randomPriceArray");
        $priceArray += $randomPriceArray.text;

            console.log($priceArray);


          })


          // $.each($randomPriceArray, function(priceEl){


            // })

            // console.log($priceEl);
      		// wrap priceEl in a jquery factory call
      		// grab each .val() of each wrapped $priceEl
      		// add and reassign placeholder totalPrice

  // Have reference to total price element
  // Set total price to totalPriceElement reference
  // $.each($price, function(){


  // console.log($sum);




        // $total.text("$" + $totalAmount);
        // I need to add all ouputs of $price and output it to data-js="total".

  });
});
