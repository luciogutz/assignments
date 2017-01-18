import React from 'react'
import { Link } from 'react-router'
import User from './User'

export default React.createClass({
  getDefaultProps(){
    return {
      contacts: [
        {
          name: "Joe Shmo",
          email: "namehere@yahoo.com",
          phone: "348-253-9874",
          location: "Miami, FL"
        },
        {
          name: "Billy the Kid",
          email: "theKID_billy@aol.com",
          phone: "139-456-3029",
          location: "Houston, TX"
        },
        {
          name: "Zack Attack",
          email: "Z_Man@gmail.com",
          phone: "482-823-1567",
          location: "New York, NY"
        },
        {
          name: "Don Juan",
          email: "The-Doninator@yahoo.com",
          phone: "742-874-9864",
          location: "Peoria, AZ"
        }
      ]
    }
  },
  render() {
    return(
      <section>
        <h1> My Contact List </h1>
        {
           this.props.contacts.map((contact, i) => {
           return <Link to={`User/${contact.name}/${contact.email}/${contact.phone}/${contact.location}`} key={i}><img className="contact-Image" src="https://d2wnxi2v4fzw0h.cloudfront.net/assets/fallback/preview_default_profile.png"/> {contact.name} </Link>
          })
        }
      </section>
    )
  }
})
