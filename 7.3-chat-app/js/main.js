import React from 'react'
import { ajax } from 'jquery'

export default React.createClass({
  componentDidMount() {
    ajax({
      url: "https://tiny-tiny.herokuapp.com/collections/lucioChat-app",
      dataType: "json",
      success: this.onAjaxInitialLoad
    })
  },
  getInitialState() {
    return {
    chats: "",
    chatHistory: []
   }
  },
  onAjaxInitialLoad(response){
    var chatAppended = response.reverse()
    this.setState({
      chatHistory: chatAppended
    })
  },
  onPostAjaxLoad(response){
    this.setState({
      chatHistory: this.state.chatHistory.concat(response)
    })
  },
  onChatChange(e) {
    var currentChatInput = e.target.value
    console.log(currentChatInput)
    this.setState({
      chats: currentChatInput
    })
  },
  onChatSubmit(e) {
    e.preventDefault()
    var currentChat = this.state.chats
    ajax({
      url: "https://tiny-tiny.herokuapp.com/collections/lucioChat-app",
      dataType: "json",
      type: "post",
      data: {
        currentChat
      },
      success: this.onPostAjaxLoad
    })
  },
  render() {
    return(
      <section>
        <aside className="aside">
          <h2 className="tiy"> TIY San Antonio </h2>
          <h4 className="channel"> Channels </h4>
          <div className="channels">
            <p className="channel-marg"> all-things-spurs</p>
            <p className="channel-marg"> # announcments </p>
            <p className="channel-marg"> # fee </p>
            <p className="channel-marg"> # fee-lecture-notes </p>
            <p className="channel-marg"> # js-junkie </p>
            <p className="channel-marg"> # random </p>
          </div>
          <h4 className="channels"> Direct Message </h4>
          <h6 className="user-marg"> daniel </h6>
          <h6 className="user-marg"> david </h6>
          <h6 className="user-marg"> terika </h6>
          <h6 className="user-marg"> reese </h6>
          <h6 className="user-marg"> nic </h6>
          <h6 className="user-marg"> jason </h6>
          <h6 className="user-marg"> jeremy </h6>
          <h6 className="user-marg"> justin </h6>
          <h6 className="user-marg"> jason </h6>
        </aside>
        <section className="navBar">
          <img className="navIcons" src="http://downloadicons.net/sites/default/files/christmas-gift-box-icon-64524.png"/>
          <img className="navIcon-star" src="https://www.dukehealth.org/sites/default/themes/dukezen/images/icons/star-o-grey.svg"/>
          <img className="navIcon-at" src="http://cliparts101.com/files/187/0C5623693068369CD580C6AFA8D51CE6/EmailIconWhiteonGrey.png"/>
            <input placeholder="Search" className="searchBar" type="text"/>
          <img className="navIcon-chat" src="http://www.iconsdb.com/icons/preview/gray/list-ingredients-xxl.png"/>
          <img className="navIcon-settings" src="http://www.iconsdb.com/icons/download/icon-sets/grey-wall/settings-512.gif"/>
          <img className="navIcon-phone" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdV5gPulD9DWrZcigUhvq_qETk1rg1eGifr4GT20w-CdL57gAz"/>
        </section>
        <section>
          <article className="mainSection">
              {
                this.state.chatHistory.map((chat, i)=>{
                  return <p className="posts"><img className="chatImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGHyL5TZXzyU0eXFXmNeKzxVVt9CxUxYRN77aOfhl4KgjqVujW-w"/><h4 className="userName">User Name: </h4><span key={i}> { chat.currentChat } </span></p>
                })
              }
          </article>
        <form className="chatInput">
          <button className="submitButton" onClick={ this.onChatSubmit } type="submit"> + </button>
          <input className="chatBar" onChange={this.onChatChange} placeholder="Type message here" type="text"/>
        </form>
      </section>
      </section>
    )
  },
})
