$(function(){


  var $body = $("body");

  var $giftInput = $body.find("[data-js='giftInput']");
  var $addElement = $body.find("[data-js='add']");
  var $giftListElement = $body.find("[data-js='selectionArea']");
  var $total = $body.find("[data-js='total']");


  $addElement.on("click", function(e){

      e.preventDefault();

      var $giftInputValue = $giftInput.val();
      var $giftInputArray = $giftInputValue.split(",");
      var $giftTextItem = $giftInputArray[0];
      var $giftTextAmount = $giftInputArray[1];

      var $checkElement = $("<button>")
        .attr({
          class: "checkButton",
          type: "button"
        })
        .html("&#10003");

      $giftTextItem = $("<p>")
        .attr({
          class: "itemList"
        })
        .text($giftTextItem);

      $giftTextAmount = $("<p>")
        .attr({
          class: "amount"
        })
        .text("$" + $giftTextAmount);


      var $giftList = $("<section>")
        .append($checkElement)
        .append($giftTextItem)
        .append($giftTextAmount);

        $giftListElement.prepend($giftList);

        var totalPrice = "";
        var stringAmount = "";
        $giftTextAmount.each(function(giftTextAmount){
          var giftTextAmount = $(".giftTextAmount");
          stringAmount += $giftTextAmount.text();
          var input = stringAmount;
          var amount = input.split("$");
          var joinAmount = amount.join("+");
          var amountSum = eval(joinAmount);
          totalPrice += amountSum;
          console.log(amountSum);
        });
        $total.text(totalPrice);
//


  //       $body.on("click", "[data-js='circle']", function(){
  // var $this = $(this);
  // $this.siblings().addClass("lineThrough");
  // $this.html("&#10003");


  //
  //
  //
  //
  //       // $total.text("$" + $totalAmount);


  });
});
