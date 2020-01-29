import React, {Component} from "react"
import {Chatkit, ChatManager} from '@pusher/chatkit-client'
import { TokenProvider} from '@pusher/chatkit-server'
import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'

// const instanceLocator = "v1:us1:dfaf1e22-2d33-45c9-b4f8-31f634621d24";

// const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/dfaf1e22-2d33-45c9-b4f8-31f634621d24/token";

// const username = "perborgen";

// const roomId = 9796712;

// const DUMMY_DATA = [
//   {
//     senderId: "perborgen",
//     text: "who'll win?"
//   },
//   {
//     senderId: "janedoe",
//     text: "who'll win?"
//   }
// ];

class MessagesApp extends Component {
      
  // constructor() {
  //   super()
  //   this.state = {
  //      messages: DUMMY_DATA
  //   }
  // }

  // sendMessage(text) {
  //   this.currentUser.sendMessage({
  //     text: text,
  //     roomId: roomId
  //   })
  // }

  // componentDidMount() {
  //   const chatManager = new Chatkit.ChatManager({
  //     instanceLocator: instanceLocator,
  //     userId: username,
  //     tokenProvider: new Chatkit.TokenProvider({
  //       url: testToken
  //     })
  //   })
  //     chatManager.connect().then(currentUser => {
  //       currentUser.subscribeToRoom({
  //       roomId: roomId,
  //       hooks: {
  //         onNewMessage: message => {
  //           this.setState({
  //             messages: [...this.state.messages, message]
  //           })
  //         }
  //       }
  //     })
  //   })
  // }
  
   
  
  render() {
    return (
      <div className="app">
        <h1>Messages</h1>
        {/* <MessageList messages={this.state.messages}/> */}
        {/* <SendMessageForm sendMessage={this.sendMessage}/> */}
     </div>
    )
  }
}
export default MessagesApp 

//IL
//v1:us1:3c74174a-0d07-4f9b-8b82-8c5a00b184c5
//TTK
//https://us1.pusherplatform.io/services/chatkit_token_provider/v1/3c74174a-0d07-4f9b-8b82-8c5a00b184c5/token
