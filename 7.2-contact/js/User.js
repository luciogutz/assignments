import React from 'react'
import { Link } from 'react-router'


export default React.createClass({
  render() {
    return (
      <section>
        <img src="https://d2wnxi2v4fzw0h.cloudfront.net/assets/fallback/preview_default_profile.png"/> 
        <h2> {this.props.params.name} </h2>
        <p> {this.props.params.email} </p>
        <p> {this.props.params.phone} </p>
        <p> {this.props.params.location} </p>
        <Link to='/'> Close </Link>

      </section>
    )
  }
})
