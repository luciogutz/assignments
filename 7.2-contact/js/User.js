import React from 'react'
import { Link } from 'react-router'


export default React.createClass({
  render() {
    return (
      <section className="contact-Wrapper">
        <img className="userImage" src="http://24x7webstudio.com/wp-content/uploads/2014/02/Boy-team.png"/>
        <h2 className="userInfo"> {this.props.params.name} </h2>
        <p className="userInfo"> {this.props.params.email} </p>
        <p className="userInfo"> {this.props.params.phone} </p>
        <p className="userInfo"> {this.props.params.location} </p>
        <Link to='/'> Close </Link>

      </section>
    )
  }
})
