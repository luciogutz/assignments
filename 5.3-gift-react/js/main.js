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
    // var currentgiftInput = this.state.giftInput;
    var list = this.refs.selectionArea
    list.insertAdjacentHTML("afterbegin", '<div class="overflow"><section class="giftSelected"></section></div>');

    this.setState({
      list: giftTextItem + giftTextAmount
   })
  },

  render() {
    return (
      <section>
      <h1 className="title"> Gifts To Buy </h1>
      <main className="main">
        <form className="giftItem__section">
          <input ref="giftInput" className="giftItem" placeholder="type the gift to buy here"/>
          <button onClick={ this.onButtonClick } ref="add" className="giftSubmit" type="submit"> ADD </button>
        </form>
        <div className="overflow">
          <section ref="selectionArea" className="giftSelected">
          </section>
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
