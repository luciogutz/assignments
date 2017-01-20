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
      this.setState({isCardNumberValid:cardNumber})
      this.refs.thankYou.className = "hidden"
  },
  onCardSubmit(e) {
    if(this.state.isCardNumberValid === false){
      this.refs.submit.pattern = ""
    }else{
      e.preventDefault()
      this.refs.submit.value = ""
      this.refs.thankYou.className = "visible"
    }
  },
  render() {
    return(
      <section>
        <h2> Enter Card Information Here </h2>
        <form>
          <input ref="submit" className={this.state.isCardNumberValid ? "valid" : "invalid"} onChange={this.onInputChange} type="text"/>
          <input onClick={this.onCardSubmit} className={this.state.isCardNumberValid ? "valid" : "invalid"} type="submit"/>
          <h3 ref="thankYou" className="hidden"> Thank you, card accepted </h3>
        </form>
      </section>
    )
  },
})
