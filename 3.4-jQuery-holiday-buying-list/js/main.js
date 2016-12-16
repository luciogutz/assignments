$(function(){


  var $body = $("body");

  var $giftInputElement = $body.find("{data-js='giftInput'}");
  var $addElement = $body.find("{data-js='add'}");
  var $selectionAreaElement = $body.find("{data-js='selectionArea'}");
  var $giftListElement = $body.find("{data-js='selectionArea'}");



  $addElement.on("click", function(e){

      e.preventDefault();

      var $giftInputValue = $giftInputValue.val();

      var $checkElement = $("<button>")
        .attr({
          class: "checkButton",
          type: "button"
        });

      var $listItemElement = $("<p>")
        .attr({
          class: "itemList"
        });

      var $amountElement = $("<p>")
        .attr({
          class: "amount"
        });

      var $giftList = ("section")
        .append($checkElement)
        .append($listItemElement)
        .append($amountElement);

        $giftInputElement.append($giftListElement);



  });
});
