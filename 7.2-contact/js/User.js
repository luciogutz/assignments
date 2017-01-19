import React from 'react'
import { Link } from 'react-router'


export default React.createClass({
  render() {
    return (
      <section className="contact-Wrapper">
        <Link className="backButton" to='/'> Back to contact list </Link>
        <div className="userImage-Wrapper">
          <img className="userImage" src="http://24x7webstudio.com/wp-content/uploads/2014/02/Boy-team.png"/>
        </div>
        <h2 className="userInfo"><img className="smallIcon" src="http://www.sunshineglobalhospitals.com/xadmin/myaccount/upload/default/profiledefault.png"/> {this.props.params.name} </h2>
        <p className="userInfo"><img className="smallIcon2" src="http://downloadicons.net/sites/default/files/email-message-icon-82430.png"/> {this.props.params.email} </p>
        <p className="userInfo"><img className="smallIcon2" src="http://image.flaticon.com/icons/png/512/0/191.png"/> {this.props.params.phone} </p>
        <p className="userInfo"><img className="smallIcon2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/World_icon.svg/2000px-World_icon.svg.png"/> {this.props.params.location} </p>
      </section>
    )
  }
})
