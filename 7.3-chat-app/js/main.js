import React from 'react'
import { ajax } from 'jquery'

export default React.createClass({
  componentDidMount() {
    ajax({
      url: "https://tiny-tiny.herokuapp.com/collections/lucioChat-app",
      dataType: "json",
      messageHistory: this.onAjaxInitialLoad
    })
  },
  setInitialState() {
    return {
    chats: "",
    chatHistory: []
   }
  },
  onAjaxInitialLoad(messages){
    this.setState({
      chatHistory: messages
    })
  },
  onPostAjaxLoad(messages){
    this.setState({
      chatHistory: this.state.chatHistory.concat(messages)
    })
  },
  onChatChange(c) {
    var currentChatInput = c.target.value
    this.setState({
      chats: currentChatInput
    })
  },
  onChatSubmit() {
    var currentChat = this.chats
  },
  render() {
    return(
      <section>
        <form>
          <p> {} </p>
          <input onChange={this.onChatChange} placeholder="Type in message here" type="text"/>
          <input type="submit"/>
        </form>
      </section>
    )
  },
})
