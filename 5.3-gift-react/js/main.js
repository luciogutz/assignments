import React from "react"

export default React.createClass({

  getInitialState() {
    return {
      giftInput: ""
    }
  },

  onButtonClick(e) {
    e.preventDefault();
    var giftInputValue = this.state.giftInput;
    var giftInputArray = giftInputValue.split(",");
    var giftTextItem = giftInputArray[0];
    var giftTextAmount = giftInputArray[1];
    this.refs.selectionArea.insertAdjacentHTML("afterbegin",
    `<section class="giftSelected itemList"><button class="checkButton"></button>${giftTextItem}</section>`);
  },

  newInputValue: function(e) {
    this.setState({
      giftInput: e.target.value
    })
  },

  render() {
    return (
      <section>
      <h1 className="title"> Gifts To Buy </h1>
      <main className="main">
        <form className="giftItem__section">
          <input onChange={this.newInputValue} value={this.state.giftInput} ref="giftInput" className="giftItem" placeholder="type the gift to buy here"/>
          <button onClick={ this.onButtonClick } ref="add" className="giftSubmit" type="submit"> ADD </button>
        </form>
        <div ref="selectionArea" className="overflow">

        </div>
      </main>
        <div className="totalSection">
          <p className="finalTotal"></p>
          <p className="total"> Total: </p>
        </div>
      </section>

    )


  }

})
