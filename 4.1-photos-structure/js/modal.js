var $ = require("jquery");

$(function(){
  // var $this = $("this");
  var $body = $("body");
  var $modal = $body.find("[data-js='modal']");
  var $backButton = $body.find("[data-js='backButton']");
  var $modalImgElement = $body.find("[data-js='modalImg']");
  var $thumbnailContainerElements = $body.find("[data-js='thumbnailContainer']");
  var $imgButton = $body.find("[data-js='button1']");

  // functions for album 1
  $thumbnailContainerElements.on("click", function(e){
    $modal.removeClass("hidden");

    var $clickedThumbnailContainerElements = $(this);
    var $clickedThumbnailImageElements = $clickedThumbnailContainerElements.find("[data-js='albumImg']")
    var sourceOfClickedThumbnailImage = $clickedThumbnailImageElements.attr("src");
    var altOfClickedThumbnailImage = $clickedThumbnailImageElements.attr("alt");
    //
    $modalImgElement.attr("src", sourceOfClickedThumbnailImageElement);
    $modalImgElement.attr("alt", altOfClickedThumbnailImage);

    // var $albumImg1 = $("<img>")
    //   .attr({
    //     alt: "yoda",
    //     class: "imgPage3",
    //     src: "http://www.sideshowtoy.com/photo.php?sku=400302"
    //   });
    // var imgModal1 = $modal.append($albumImg1);
  });
  $backButton.on("click", function(e){
    $modal.addClass("hidden")
  });

  // // functions for album 2
  // $button2.on("click", function(e){
  //   $modal.removeClass("hidden");
  // });
  // $backButton.on("click", function(e){
  //   $modal.addClass("hidden");
  // });
  //
  // // functions for album 3
  // $button3.on("click", function(e){
  //   $modal.removeClass("hidden");
  // });
  // $backButton.on("click", function(e){
  //   $modal.addClass("hidden");
  // });
  //
  // // functions for album 4
  // $button4.on("click", function(e){
  //   $modal.removeClass("hidden");
  // });
  // $backButton.on("click", function(e){
  //   $modal.addClass("hidden");
  // });
  //
  // // functions for album 5
  // $button5.on("click", function(e){
  //   $modal.removeClass("hidden");
  // });
  // $backButton.on("click", function(e){
  //   $modal.addClass("hidden");
  // });
  //
  // // functions for album 6
  // $button6.on("click", function(e){
  //   $modal.removeClass("hidden");
  // });
  // $backButton.on("click", function(e){
  //   $modal.addClass("hidden");
  // });

// console.log($button1);



});
