import React from "react"

export default React.createClass({


  render() {
    return (
      <h1> Gifts To Buy </h1>
      <main className="main">
        <form className="giftItem__section">
          <input className="giftItem" placeholder="type the gift to buy here">
          <button className="giftSubmit" type="submit" value="post"> ADD </button>
        </form>
        <div className="overflow">
          <section className="giftSelected">
          </section>
        </div>
      </main>
        <div className="totalSection">
          <p className="finalTotal"></p>
          <p className="total"> Total: </p>
        </div>

    )


  }

})
