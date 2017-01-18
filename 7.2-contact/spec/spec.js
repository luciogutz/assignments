
// i want to printout hello.
describe("newName", function(){

  var newName;
  var jsdom = require("jsdom");
  beforeEach(function(){
    document = jsdom.jsdom(`<h1 data-js="hello"> "Hello" </h1>`)
    window = document.defaultView;
    newName = require("../js/newFile.js");
  });

  describe("hello", function(){
    it("should say hello", function(){
      expect(newName.helloElement.innerHTML).toBe("hello")
    })
  })
});
