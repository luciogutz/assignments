import React from 'react'
import Validator from 'validator'

export default React.createClass({
  getInitialState() {
    return{
      isCardNumberValid: true
    }
  },
  onInputChange(e) {
    var cardNumber = isNumeric()
  },
  render() {
    return(
      <section>
        <form>
          <input onChange="onInputChange" placeholder="1234 5678 9012 3456" type="text"/>
          <input onClick="" type="submit"/>
        </form>
        <h1> Is this rendering </h1>
      </section>
    )
  },
})
