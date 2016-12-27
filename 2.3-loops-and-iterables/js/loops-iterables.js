// PART 0: Write a function called squareDance() that squares each number in an array.
function squareDance(numbersArray){
    // var squaredNumber = Math.pow(numbersArray[1], 2);
    for(var i = 0; i < numbersArray.length; i++){

    var currentNumber = numbersArray[i];
    // square the current nnumber and set it back (replace existing) to array
    numbersArray[i] = Math.pow(currentNumber, 2);
    }

    return numbersArray;
}


console.assert(squareDance([1, 2])[1] === 4)
console.assert(squareDance([5,10,15])[2] === 225)
console.assert(squareDance([3,6,9,3])[0] === 9)

// PART 1: write a function called nicer(). It should clean up the language in its input sentence.


function nicer(sentence){
    var sentenceArray = sentence.split(" ");
    var removeWordsArray = ["heck", "darn", "crappy", "dang"];

    for (var i = 0; i < sentenceArray.length; i++){

      var currentWord = sentenceArray[i];
      if (currentWord === "heck" || currentWord === "darn" || currentWord === "crappy" || currentWord === "dang") {
        // remove from my array currentWord
        sentenceArray.splice(i, 1);
      }

    }
    var cleanSentence = sentenceArray.join(" ");
    return cleanSentence;
}

console.assert(nicer("dad get the heck in here and bring me a darn sandwich.") === "dad get the in here and bring me a sandwich.")

console.assert(nicer("here son, your crappy sandwich is on the dang plate.") === "here son, your sandwich is on the plate.")

// PART 2: write a function called capitalizeAll(). It should take as input a sentence and capitalize the first letter of every word in the sentence.

function capitalizeAll(sentence){

      var sentenceArray = sentence.split(" ");
      var sentenceCap = "";

      for (var i = 0; i < sentenceArray.length; i++){
        var currentWord = sentenceArray[i];
        var capFirstLetter = currentWord[0].toUpperCase();

        var currentWordArray = currentWord.split("");

       currentWordArray.splice(0, 1);

        currentWordArray.unshift(capFirstLetter);

        var currentWordCap = currentWordArray.join("");

        if (i === sentenceArray.length -1) {
          sentenceCap += currentWordCap;
        }else {
          sentenceCap += currentWordCap + " ";
        }


      }
      return sentenceCap;

}


console.assert(capitalizeAll('every day is like sunday.') === 'Every Day Is Like Sunday.')

// PART 3: write a function called properSentences(). It should take as input a string and capitalize the first letter of every sentence in that string. (For our purposes, all sentences will end with periods. Write one that works with ? and ! and receive a gratifying high five, right on the hand!)

var paragraph = 'it was a fine morning. the wine was good. light slanted in through the cafe window.'


function properSentences(paragraph){
    var paragraphArray = paragraph.split(". ");

    for (var i = 0; i < paragraphArray.length; i++){
        var currentSentence = paragraphArray[i];
        var noFirstLetterSentence = currentSentence.slice(1)
        var capFirstLetter = currentSentence[0].toUpperCase();

        var capParagraph = capFirstLetter + noFirstLetterSentence;
        // console.log(capParagraph);
        // I was able to achieve the deesired output, but im sure I need an if statement
    }
      return capParagraph;
}


console.assert(properSentences(paragraph) === "It was a fine morning. The wine was good. Light slanted in through the cafe window.")

// PART 4: write a function called iPutTheFunIn(). It should take a string as input. The output should be a copy of the original string with the word 'fun' inserted into the center of the string.

// function iPutTheFunIn(text){
//
//       var textArray = text.split("");
//       var fun = "fun";
//       for (var i = 0; i < textArray.length; i++){
//
//               var currentText = textArray[i];
//              var findMiddle = currentText/2;

// I give up for tonight...
// console.log(insertFun);
      // }

// }





console.assert(iPutTheFunIn("funerary") === "funefunrary")
console.assert(iPutTheFunIn("reds") === "refunds")

// PART 5: write a function called pipeline(). it should take three inputs: (1) a starting value, (2) a function, and (3) another function. it should use functions (2) and (3) on the starting value, one after the other, and return a new value that has been processed by both function (2) and function (3).

// the following three tests all correspond to the pipeline() function.

// test 1
var paragraph = 'dad bring your crappy self in here. i want a dang sandwich.'

console.assert(pipeline(paragraph,nicer,properSentences) === "Mom bring your self in here. I want a sandwich.")

// test 2
var squareNum = function(n){
    return n * n
}

var addOne = function(n) {
    return n + 1
}

console.assert(pipeline(7,squareNum,addOne) === 50)

// test 3
var exclaimAll = function(arr) {
    var newArr = []
    for (var i = 0; i < arr.length; i ++) {
        newArr.push(arr[i] + '!')
    }
}

var result = pipeline([10,20,30],squareDance,exclaimAll)
console.assert(result[1] === "400!")
console.assert(result[2] === "900!")
