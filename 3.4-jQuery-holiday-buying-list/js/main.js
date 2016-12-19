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
          type: "button",
          "data-js": "checkMark"
        })
        .html("");

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

        var totalAmount = "";
        var stringAmount = "";
        $giftTextAmount.each(function(giftTextAmount){
          var giftTextAmount = $(".giftTextAmount");
          stringAmount += $giftTextAmount.text();
          var input = stringAmount;
          var amount = input.split("$");
          // var joinAmount = amount.join("+");
          var amountSum = eval(amount.join("+"));
          totalAmount = amountSum;
        });
        $total.text("$" + totalAmount);
console.log(totalAmount)

  $body.on("click", "[data-js='checkMark']", function(){
    var $this = $(this);
    $this.siblings().addClass("removeItem");
    $this.html("&#10003");
    });
  // $body.on("dblclick", $giftInput, function(){
  //   var $this = $(this);
  //   var clear = $this.empty();
  // });





  });
});
