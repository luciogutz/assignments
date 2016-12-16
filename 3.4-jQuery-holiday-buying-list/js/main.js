$(function(){


  var $body = $("body");

  var $giftInput = $body.find("[data-js='giftInput']");
  var $addElement = $body.find("[data-js='add']");
  var $giftListElement = $body.find("[data-js='selectionArea']");



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

      var $amountElement = $("<p>")
        .attr({
          class: "amount"
        })
        Math.floor((Math.random() * 100) + 1);

      var $giftList = $("<section>")
        .append($checkElement)
        .append($listItemElement)
        .append($amountElement);

        $giftListElement.prepend($giftList);



  });
});
