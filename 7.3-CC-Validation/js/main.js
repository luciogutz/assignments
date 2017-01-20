import React from 'react'
import Validator from 'validator'

export default React.createClass({
  getInitialState() {
    return{
      isCardNumberValid: false
    }
  },
  onInputChange(e) {
    var cardNumber = Validator.isCreditCard(e.target.value);
    console.log(cardNumber);
      this.setState({isCardNumberValid:cardNumber})
  },
  onCardSubmit() {


  },
  render() {
    return(
      <section>
        <form>
          <input className={this.state.isCardNumberValid ? "valid" : "invalid"} onChange={this.onInputChange} type="text"/>
          <input className={this.state.isCardNumberValid ? "valid" : "invalid"} type="submit"/>
        </form>
      </section>
    )
  },
})
