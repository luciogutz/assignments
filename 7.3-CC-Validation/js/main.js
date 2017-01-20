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
    if(this.state.isCardNumberValid === false){
      this.refs.submit.pattern = ""
    }else{
      this.refs.submit.value = ""
    }

  },
  render() {
    return(
      <section>
        <form>
          <input ref="submit" className={this.state.isCardNumberValid ? "valid" : "invalid"} onChange={this.onInputChange} type="text"/>
          <input onClick={this.onCardSubmit} className={this.state.isCardNumberValid ? "valid" : "invalid"} type="submit"/>
        </form>
      </section>
    )
  },
})
