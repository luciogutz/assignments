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
    var currentChat = this.state.chats
    ajax({
      url: "https://tiny-tiny.herokuapp.com/collections/lucioChat-app",
      dataType: "json",
      type: "post",
      data: {
        currentChat
      },
    })
  },
  render() {
    return(
      <section>
          {
            this.state.chatHistory.map((chat, i)=>{
              return <p key={i}> {chat.currentChat} </p>
            })
          }
          <form>
          <input onChange={this.onChatChange} placeholder="Type in message here" type="text"/>
          <input onClick={ this.onChatSubmit } type="submit"/>
        </form>
      </section>
    )
  },
})
