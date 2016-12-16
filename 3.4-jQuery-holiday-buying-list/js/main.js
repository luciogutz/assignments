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

      var $price = Math.floor((Math.random() * 1000) + 1);


      var $amountElement = $("<p>")
        .attr({
          class: "amount"
        })
        .text("$" + $price);


      var $giftList = $("<section>")
        .append($checkElement)
        .append($listItemElement)
        .append($amountElement);

        $giftListElement.prepend($giftList);

        var $totalPrice = 0;

        $("price").each(function($totalPrice){



        });
  console.log($totalPrice);




        $total.text("$" + $totalAmount);
        // I need to add all ouputs of $price and output it to data-js="total".

  });
});
